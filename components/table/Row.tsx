import RealCurrency from "../RealCurrency";
import Td from "./Td";

export default function Row({obj, index} : {obj: any, index: number}) {
  const row = [];
  
  for(let prop in obj) {
    (!prop.includes('id')) && (
      row.push(
        <Td key={`${index}-${prop}`}>
          {prop.includes('valor') || (prop === 'preco') ? (
            <RealCurrency value={+obj[`${prop}`]}/>
          ) : (
            obj[`${prop}`]
          )}
        </Td>
      )
    )
  }

  return (
    <>
      {row}
    </>
  );
}