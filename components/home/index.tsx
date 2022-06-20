import LatestSales from "./LatestSales";
import TotalSales from "./TotalSales";

interface HomeSectionProps {
  totalSales: {
    day: number,
    month: number
  },

}

export default function HomeSection(props: HomeSectionProps) {
  const { totalSales } = props;
  
  return (
    <section className={` pt-10 flex justify-between `}>
      {/* <LatestSales /> */}
      
      <TotalSales day={totalSales.day} month={totalSales.month}/>
    </section>
  );
}