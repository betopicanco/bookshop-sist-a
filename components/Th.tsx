const Th = (props: { children: string }) => {
  return (
    <th className={`p-2 bg-stone-300`}>
      {props.children}
    </th>
  );
}

export default Th;