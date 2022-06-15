import MenuLink from "./MenuLink";

const Menu = () => {
  return (
    <nav>
      <ul className={`flex`}> 
        <MenuLink href="/sales">
          Vendas
        </MenuLink>

        <MenuLink href="/stock">
          Estoque
        </MenuLink>
        
        <MenuLink href="/shopping">
          Compras
        </MenuLink>
        
        <MenuLink href="/suppliers">
          Fornecedores
        </MenuLink>
      </ul>
    </nav>
  );
}

export default Menu;