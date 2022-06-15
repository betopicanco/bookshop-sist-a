import Menu from "./Menu";

const Header = () => {
  return (
    <header 
      className={`
        bg-stone-800 
        flex justify-between 
        px-20
      `}
    >
      <div></div>
      <div>
        <Menu />
      </div>
    </header>
  );
}

export default Header;