import MenuLink from "./MenuLink";

export default function Menu() {
  return (
    <nav>
      <ul className={`flex`}> 
        <MenuLink href="/sales">
          Vendas
        </MenuLink>

        <MenuLink href="/inventory">
          Estoque
        </MenuLink>
        
        <MenuLink href="/buys">
          Compras
        </MenuLink>
        
        <MenuLink href="/providers">
          Fornecedores
        </MenuLink>
      </ul>
    </nav>
  );
}