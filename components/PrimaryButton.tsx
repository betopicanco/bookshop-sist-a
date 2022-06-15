export default function PrimaryButton(props: {children: JSX.Element | string}) {
  return (
    <button className={` 
      border-2 border-stone-800 
      px-4 py-2 rounded-md
      shadow-md
      bg-white/30
      active:bg-white/80
    `}>
      {props.children}
    </button>
  );
}