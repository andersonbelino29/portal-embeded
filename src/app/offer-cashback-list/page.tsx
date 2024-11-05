"use client";

import { OfferCard } from "@/components/offer/card";
import OfferDetailModal from "@/components/offer/detail-modal";
import { OfferFilter } from "@/components/offer/filter";
import { OfferHeader } from "@/components/offer/header/page";
import { useState } from "react";

interface Offer {
  id: string;
  image: string;
  cashbackPercentage: number;
  title: string;
  price: number;
  expiryDate: string;
  limit?: string;
}

export default function Component() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filterSelected, setFilterSelected] = useState("");

  const offers: Offer[] = [
    {
      id: "1",
      image: "/images/fitaadesiva.png",
      cashbackPercentage: 15,
      title: "Fita Adesiva Invisível 12mm x 18m",
      price: 14.9,
      expiryDate: "30/12/2024",
      limit: "Limite: 2 unidades",
    },
    {
      id: "2",
      image: "/images/lapiscor.png",
      cashbackPercentage: 15,
      title: "Lápis de Cor 12 Cores Triangular Académie",
      price: 37.9,
      expiryDate: "30/12/2024",
    },
  ];

  const openModal = (offer: Offer) => {
    setSelectedOffer(offer);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedOffer(null);
  };

  const filteredOffers = offers.filter((offer) => {
    const matchesSearchTerm = offer.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesArea =
      selectedArea === "Todas" ||
      selectedArea === "" ||
      offer.limit === selectedArea;
    const matchesCategory =
      selectedCategory === "Todas" ||
      selectedCategory === "" ||
      offer.title.toLowerCase().includes(selectedCategory.toLowerCase());
    return matchesSearchTerm && matchesArea && matchesCategory;
  });

  const sortedOffers = filteredOffers.sort((a, b) => {
    switch (filterSelected) {
      case "MaiorPc":
        return b.cashbackPercentage - a.cashbackPercentage; // Ordena por maior cashback em %
      case "MenorPc":
        return a.cashbackPercentage - b.cashbackPercentage; // Ordena por menor cashback em %
      case "MaiorMoney":
        return b.price - a.price; // Ordena por maior cashback em R$
      case "MenorMoney":
        return a.price - b.price; // Ordena por menor cashback em R$
      default:
        return 0; // Sem ordenação
    }
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <OfferFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedArea={selectedArea}
        setSelectedArea={setSelectedArea}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <OfferHeader
        filterSelected={filterSelected}
        setFilterSelected={setFilterSelected}
      />{" "}
      {/* Passa os props */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 justify-items-center">
        {sortedOffers.map((offer) => (
          <OfferCard
            key={offer.id}
            offer={offer}
            onDetailsClick={() => openModal(offer)}
          />
        ))}

        {selectedOffer && (
          <OfferDetailModal
            isOpen={isModalOpen}
            onClose={closeModal}
            offer={selectedOffer}
          />
        )}
      </div>
    </div>
  );
}
