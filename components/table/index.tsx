import Th from "./Th";

interface TableProps {
  thead: string[],
  tbody: JSX.Element
}

export default function Table(props: TableProps) {
  const { thead, tbody } = props;

  return (
    <table className={` mt-10 shadow-lg w-full `}>
      <thead>
        <tr>
          {thead.map((header, index) => {
            return (
              <Th key={index}>
                {header}
              </Th>
            );
          })}
        </tr>
      </thead>
      {tbody}
    </table>
  );
}