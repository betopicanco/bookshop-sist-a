import ButtonProps from "./interface";

export default function SecondaryButton(props: ButtonProps) {
  const { children, type } = props;

  return (
    <button
      type={type}
      className={` 
        px-4 py-2 rounded-md
        shadow-md
        text-white
        bg-blue-400
        active:bg-blue-600
      `}
    >
      {children}
    </button>
  );
}