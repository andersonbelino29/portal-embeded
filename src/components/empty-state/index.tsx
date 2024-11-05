import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function EmptyState() {
  return (
    <Card className="max-w-2xl mx-auto p-8">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-64 h-64 relative mb-4">
          <Image
            src="/placeholder.svg?height=256&width=256"
            alt="Empty state illustration"
            width={100}
            height={150}
            className="w-full h-full object-contain"
          />
        </div>
        <h2 className="text-xl font-semibold text-gray-900">
          É muito importante te ver por aqui!
        </h2>
        <p className="text-gray-600">
          Você ainda não possui histórico de compras.
        </p>
        <p className="text-gray-600">
          Compre na nossa rede e visualize aqui o registro das suas compras.
        </p>
      </div>
    </Card>
  );
}
