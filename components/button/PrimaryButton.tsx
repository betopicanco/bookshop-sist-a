import ButtonProps from "./interface";

export default function PrimaryButton(props: ButtonProps) {
  const { children, handleClick } = props;

  return (
    <button 
      onClick={handleClick}
      className={` 
        border-2 border-stone-800 
        px-4 py-2 rounded-md
        shadow-md
        bg-white/30
        active:bg-white/80
      `}
    >
      {children}
    </button>
  );
}