// src/components/offer/header.tsx
export function OfferHeader({
  filterSelected,
  setFilterSelected,
}: {
  filterSelected: string;
  setFilterSelected: (value: string) => void;
}) {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold text-primary">LISTA DE OFERTAS</h1>
      <select
        className="border rounded-md p-2"
        value={filterSelected}
        onChange={(e) => setFilterSelected(e.target.value)}
      >
        <option value="">Ordenar por</option>
        <option value="MaiorPc">Maior Cashback em %</option>
        <option value="MenorPc">Menor Cashback em %</option>
        <option value="MaiorMoney">Maior Cashback em R$</option>
        <option value="MenorMoney">Menor Cashback em R$</option>
      </select>
    </div>
  );
}
