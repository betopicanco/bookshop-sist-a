export default function Input(props: { placeholder: string }) {
  const { placeholder } = props;
  
  return (
    <input 
      type="text" 
      placeholder={placeholder} 
      className={`
        my-4 mx-8 py-2 px-4
        border border-neutral-400
        rounded-sm block
      `}
    />
  )
}