interface InputProps {
  id: string,
  placeholder: string,
  required?: boolean,
  type?: 'text' | 'date'
}

export default function Input(props: InputProps) {
  const { id, placeholder, required } = props;
  const type  = props.type ? props.type : 'text'
  
  return (
    <input
      id={id}
      name={id}
      type={type}
      required={required}
      placeholder={placeholder} 
      className={`
        my-4 mx-8 py-2 px-4
        border border-neutral-400
        rounded-sm block
      `}
    />
  )
}