import LatestSales from "./LatestSales";
import TotalSales from "./TotalSales";

export default function HomeSection() {
  return (
    <section className={` pt-10 flex justify-between `}>
      <LatestSales />

      <TotalSales />
    </section>
  );
}