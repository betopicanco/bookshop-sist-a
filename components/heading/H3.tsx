export default function H3(props: { children: string }) {
  return (
    <h3 className={` text-xl `}>
      {props.children}
    </h3>    
  );
}