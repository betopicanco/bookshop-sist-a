export default interface ButtonProps {
  children: JSX.Element | string,
  type?: 'button' | 'submit' | undefined,
  handleClick?: () => any
}