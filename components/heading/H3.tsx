import HeadingProps from "./interface";

export default function H3(props: HeadingProps) {
  return (
    <h3 className={` text-xl `}>
      {props.children}
    </h3>    
  );
}