import SecondaryButton from "../button/SecondaryButton";

interface FormProps {
  children: JSX.Element | JSX.Element[]
}

export default function Form(props: FormProps) {
  return (
    <form>
      <div className={` p-2 text-center `}>
        { props.children }
      </div>

      <div className={` text-right `}>
        <SecondaryButton handleClick={() => {}}>
          Confirmar
        </SecondaryButton>
      </div>
    </form>
  );
}