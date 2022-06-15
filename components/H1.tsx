const H1 = (props: { children: string }) => {
  return (
    <h1 className={`text-3xl`}>
      {props.children}
    </h1>
  );
}

export default H1;