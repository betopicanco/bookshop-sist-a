const Th = (props: { children: string }) => {
  return (
    <th className={`p-2 bg-stone-300 text-left font-medium`}>
      {props.children}
    </th>
  );
}

export default Th;