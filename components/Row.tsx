import Td from "./Td";

export default function Row({obj, index} : {obj: any, index: number}) {
  const row = [];
    for(let prop in obj) {
      row.push(
        <Td key={`${index}-${prop}`}>
          {obj[`${prop}`]}
        </Td>
      )
    }

  return (
    <>
      {row}
    </>
  );
}