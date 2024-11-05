"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { MapPin } from "lucide-react";
import Image from "next/image";

interface Store {
  id: string;
  name: string;
}

interface OfferDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  offer: {
    image?: string;
    cashbackPercentage?: number;
    title?: string;
    description?: string;
    price?: number;
    validUntil?: string;
    maxCashback?: number;
  };
}

export default function OfferDetailModal({
  isOpen = true,
  onClose = () => {},
  offer = {
    image: "/placeholder.svg?height=200&width=150",
    cashbackPercentage: 1,
    title: "Coca",
    description: "Descrição da oferta",
    price: 10.0,
    validUntil: "30/11/2024",
    maxCashback: 10.0,
  },
}: OfferDetailsProps) {
  const participatingStores: Store[] = [
    { id: "1", name: "Vendfix Matrix" },
    { id: "2", name: "Teste Vip Commerce" },
    { id: "3", name: "Loja 4" },
    { id: "4", name: "Loja 6" },
    { id: "5", name: "Lab - Autorizador Homologação" },
    { id: "6", name: "Loja 14" },
    { id: "7", name: "Loja 15" },
    { id: "8", name: "Loja 16 - Novo Cnpj" },
    { id: "9", name: "Loja 22" },
    { id: "10", name: "Loja 29" },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg w-full mx-auto p-4 sm:p-6">
        <DialogHeader className="border-b pb-2">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-sm font-normal">
              INFORME O CPF NO CAIXA
            </DialogTitle>
          </div>
        </DialogHeader>

        <div className="bg-primary text-secondary text-sm py-1 px-4">
          O saldo poderá ser utilizado em até 1 dia após o recebimento.
        </div>

        <div className="flex gap-8 pt-4">
          <div className="w-1/3">
            <Image
              src={offer.image ?? ""}
              alt={offer.title ?? ""}
              width={100}
              height={150}
              className="w-full object-contain"
            />
          </div>

          <div className="w-2/3 space-y-4">
            <div className="text-2xl font-bold text-primary">
              {offer.cashbackPercentage}% DE VOLTA
            </div>

            <div>
              <h3 className="font-bold">{offer.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{offer.description}</p>
            </div>

            <div className="border rounded-md p-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Validade da oferta</span>
                <span className="text-sm">📅 {offer.validUntil}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm">Você poderá receber até</span>
                <span className="text-sm">
                  R$ {offer.maxCashback?.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t pt-4 mt-4">
          <h4 className="font-bold mb-4">LOJAS PARTICIPANTES</h4>
          <div className="grid grid-cols-2 gap-4">
            {participatingStores.map((store) => (
              <div key={store.id} className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm">{store.name}</span>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
