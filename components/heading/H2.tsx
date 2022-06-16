import HeadingProps from "./interface";

export default function H2(props: HeadingProps) {
  return (
    <h2 className={` text-2xl `}>
      {props.children}
    </h2>
  );
}