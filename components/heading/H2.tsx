export default function H2(props: { children: string }) {
  return (
    <h2 className={` text-2xl `}>
      {props.children}
    </h2>
  );
}