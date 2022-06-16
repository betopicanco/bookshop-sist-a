import H2 from "../heading/H2";
import Table from "../table";
import TBody from "../table/TBody";

export default function LatestSales() {
  const latestSales = [
    {book: 'Livro X', price: 100},
    {book: 'Livro Y', price: 75},
    {book: 'Livro Z', price: 50},
  ];

  return (
    <div className={` w-2/5 `}>
      <H2>
        Últimas Vendas
      </H2>

      <Table
        thead={['Livro', 'Preço']}
        tbody={
          <TBody data={latestSales}/>
        }
      />
    </div>
  );
}