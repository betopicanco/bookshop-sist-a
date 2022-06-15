import H1 from "../components/H1";
import Layout from "../components/Layout"
import Table from "../components/Table";

const Sales = () => {
  return (
    <Layout>
      <>
        <H1>
          Vendas
        </H1>

        <Table 
          thead={['Livros', 'Preço']}>
          <tr>
          </tr>
        </Table>
      </>
    </Layout>
  );
}

export default Sales;