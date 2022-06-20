import SecondaryButton from "../button/SecondaryButton";

interface FormProps {
  children: JSX.Element | JSX.Element[],
  handleSubmit: (event: any) => any
}

export default function Form(props: FormProps) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={` p-2 text-center `}>
        { props.children }
      </div>

      <div className={` text-right `}>
        <SecondaryButton type={'submit'}>
          Confirmar
        </SecondaryButton>
      </div>
    </form>
  );
}