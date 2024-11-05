"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Roboto } from "next/font/google";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import "./globals.css";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const searchParams = useSearchParams();
  const [theme, setTheme] = useState("theme-stone");
  const [isThemeLoaded, setIsThemeLoaded] = useState(false);

  useEffect(() => {
    const themeParam = searchParams.get("theme");

    if (themeParam) {
      setTheme(themeParam);
    }
    setIsThemeLoaded(true);
  }, [searchParams]);

  return (
    <html lang="en" className={theme}>
      <body
        className={`${roboto.className} antialiased bg-white ${
          isThemeLoaded ? "" : "hidden"
        }`}
      >
        <QueryClientProvider client={queryClient}>
          <main className="flex-1 overflow-y-auto pt-16">{children}</main>
        </QueryClientProvider>
      </body>
    </html>
  );
}