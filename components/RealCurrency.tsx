export default function RealCurrency(props: {value: number}) {
  const real = props.value.toLocaleString('pt-BR', { 
    minimumFractionDigits: 2, 
    style: 'currency',
    currency: 'BRL' 
  });
  
  return (
    <>
      {real}
    </>
  );
}