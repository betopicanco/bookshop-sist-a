export default function Td(props: { children: JSX.Element | string }) {
  return (
    <td className="bg-white py-2 px-4 border border-stone-300">
      {props.children}
    </td>
  );
}