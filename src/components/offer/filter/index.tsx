// src/components/offer/filter.tsx
"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";

interface OfferFilterProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedArea: string;
  setSelectedArea: (area: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export function OfferFilter({
  searchTerm,
  setSearchTerm,
  selectedArea,
  setSelectedArea,
  selectedCategory,
  setSelectedCategory,
}: OfferFilterProps) {
  const areas = [
    { value: "Todas", label: "Todas as Lojas" },
    { value: "loja1", label: "Loja 1" },
    { value: "loja2", label: "Loja 2" },
    { value: "loja3", label: "Loja 3" },
  ];

  const categories = [
    { value: "Todas", label: "Todas as categorias" },
    { value: "bebidas", label: "Bebidas" },
    { value: "alimentos", label: "Alimentos" },
    { value: "limpeza", label: "Limpeza" },
    { value: "higiene", label: "Higiene" },
  ];

  return (
    <div className="bg-white rounded-lg p-4 mb-8 shadow-sm">
      <div className="flex flex-col space-y-4">
        {/* Container para Saldo Bloqueado */}
        <div className="bg-blue-50 rounded-lg p-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* Ícone opcional para destacar o saldo */}
            <svg
              className="w-5 h-5 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
              />
            </svg>
            <p className="text-primary font-semibold text-lg">
              Saldo Bloqueado R$ 7,00
            </p>
          </div>
          <p className="text-gray-500 text-sm">(será liberado em 01/03)</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-primary">
            Selecione as Área para visualizar as ofertas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Select value={selectedArea} onValueChange={setSelectedArea}>
              <SelectTrigger className="w-full sm:w-[200px]">
                <SelectValue placeholder="Lojas participantes" />
              </SelectTrigger>
              <SelectContent>
                {areas.map((area) => (
                  <SelectItem key={area.value} value={area.value}>
                    {area.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-full sm:w-[200px]">
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary/40 h-4 w-4" />
          <Input
            type="text"
            placeholder="Buscar produtos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>
    </div>
  );
}
