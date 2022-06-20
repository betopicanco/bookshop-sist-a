interface InputProps {
  id: string,
  placeholder: string,
  required?: boolean
}

export default function Input(props: InputProps) {
  const { id, placeholder, required } = props;
  
  return (
    <input
      id={id}
      name={id}
      type="text"
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