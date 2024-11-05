"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function NotFoundPageContent() {
  const searchParams = useSearchParams();

  const paramValue = searchParams.get("someParam") || "Nenhum valor encontrado";

  return (
    <div>
      <h1>Página Não Encontrada</h1>
      <Suspense fallback={<p>Carregando parâmetro...</p>}>
        <p>O parâmetro de consulta é: {paramValue}</p>
      </Suspense>
    </div>
  );
}

export default function NotFoundPage() {
  return (
    <Suspense fallback={<div>Carregando página de erro...</div>}>
      <NotFoundPageContent />
    </Suspense>
  );
}
