import HeadingProps from "./interface";

export default function H1(props: HeadingProps){
  return (
    <h1 className={` text-3xl `}>
      {props.children}
    </h1>
  );
}