"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function HomePageContent() {
  const searchParams = useSearchParams();
  const theme = searchParams.get("theme") || "default-theme";

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>Current theme: {theme}</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={<div>Loading home page...</div>}>
      <HomePageContent />
    </Suspense>
  );
}
