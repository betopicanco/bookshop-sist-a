import Row from "./Row";

interface TBodyProps {
  data: {}[],
  actions?: JSX.Element
}
export default function TBody(props: TBodyProps) {
  const { data, actions } = props;
  return (
    <tbody>
      {data.map((obj, index) => {
        return (
          <tr key={index}>
            <Row obj={obj} index={index}/>
            {actions}
          </tr>
        )
      })}
    </tbody>
  )
}