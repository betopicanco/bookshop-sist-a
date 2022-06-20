interface DatalistProps {
  id: string,
  options: string[], 
  placeholder: string
}

export default function Datalist(props: DatalistProps) {
  const { id, options, placeholder } = props;

  return (
    <div>
      <input 
        list={id} 
        placeholder={placeholder}
        className={`
          my-4 mx-8 py-2 px-4
          border border-neutral-400
          rounded-sm
        `}
      />

      <datalist id={id}>
        {options.map((opt) => {
          return (
            <option value={opt}/>
          );
        })}
      </datalist>
    </div>
  );
}