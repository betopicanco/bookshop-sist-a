import Th from "./Th";

interface TableProps {
  thead: string[],
  children: JSX.Element[] | JSX.Element
}

const Table = (props: TableProps) => {
  const { thead, children } = props;

  return (
    <table className={` mt-10 `}>
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
      <tbody>
        {children}
      </tbody>
    </table>
  );
}

export default Table;