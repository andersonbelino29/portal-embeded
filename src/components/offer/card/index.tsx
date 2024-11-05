import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";

interface OfferCardProps {
  offer: {
    id: string;
    image: string;
    cashbackPercentage: number;
    title: string;
    price: number;
    expiryDate: string;
    limit?: string;
  };
  onDetailsClick: () => void;
}

export function OfferCard({ offer, onDetailsClick }: OfferCardProps) {
  return (
    <Card
      key={offer.id}
      className="w-full max-w-[220px] rounded-lg overflow-hidden"
    >
      <div className="bg-primary text-secondary text-center py-1 text-xs">
        INFORME SEU CPF AO EFETUAR A COMPRA
      </div>
      <CardHeader className="p-2">
        <div className="flex justify-center">
          <Image
            src={offer.image}
            alt={offer.title}
            width={100}
            height={150}
            className="h-32 object-contain"
          />
        </div>
      </CardHeader>
      <div className="text-center text-xs font-bold text-primary py-1">
        <span role="img" aria-label="money bag">
          💰
        </span>
        {offer.cashbackPercentage}% DE VOLTA
        <span role="img" aria-label="money bag">
          💰
        </span>
      </div>
      <CardContent className="text-center p-2 pt-1">
        <h2 className="font-semibold text-sm mb-1">{offer.title}</h2>
        {offer.price > 0 && (
          <p className="text-sm font-bold mb-1">
            Preço: R$ {offer.price.toFixed(2)}
          </p>
        )}
        <div className="flex items-center justify-center gap-1 text-xs text-gray-600">
          <span role="img" aria-label="calendar">
            📅
          </span>
          <span>{offer.expiryDate}</span>
        </div>
        {offer.limit && (
          <div className="text-xs text-gray-600 mt-1">{offer.limit}</div>
        )}
      </CardContent>
      <CardFooter className="flex justify-center p-2">
        <Button
          variant="link"
          className="text-primary underline text-xs p-0 h-auto"
          onClick={onDetailsClick}
        >
          Ver Detalhes
        </Button>
      </CardFooter>
    </Card>
  );
}
