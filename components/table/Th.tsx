const Th = (props: { children: string }) => {
  return (
    <th className={`
      py-2 px-4 bg-stone-300 
      text-left text-lg font-medium
    `}>
      {props.children}
    </th>
  );
}

export default Th;