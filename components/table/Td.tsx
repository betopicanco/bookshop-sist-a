export default function Td(props: { children: JSX.Element | string }) {
  return (
    <td className="bg-white p-2 border border-stone-300">
      {props.children}
    </td>
  );
}