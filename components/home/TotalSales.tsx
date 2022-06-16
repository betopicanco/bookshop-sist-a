import H2 from "../heading/H2";
import H3 from "../heading/H3";
import RealCurrency from "../RealCurrency";

export default function TotalSales() {
  const day = 4000;
  const month = 25000;
  const style = {
    valueInReal: ` 
      px-4 py-2 m-1
      bg-white rounded-lg 
      shadow-md text-stone-400
    `
  }

  return (
    <div className={` w-2/5 `}>
      <H2>
        Caixa
      </H2>

      <div className={` pt-10 flex justify-around `}>
        <div>
          <H3>
            Dia
          </H3>

          <div className={style.valueInReal}>
            <strong>
              <RealCurrency value={day}/>
            </strong>
          </div>
        </div>

        <div>
          <H3>
            Mês
          </H3>

          <div className={style.valueInReal}>
            <strong>
              <RealCurrency value={month}/>
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}