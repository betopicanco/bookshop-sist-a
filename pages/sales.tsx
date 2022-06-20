import H1 from "../components/heading/H1";
import Trash from "../components/icons/Trash";
import Layout from "../components/Layout"
import PrimaryButton from "../components/button/PrimaryButton";
import Table from "../components/table";
import TBody from "../components/table/TBody";
import Td from "../components/table/Td";
import { NextPage } from "next";
import { useState } from "react";
import NewSale from "../components/modal/add/NewSale";
import SalesInterface from "../interfaces/sales";

export async function getStaticProps() {
  return {
    props: {
      sales: true
    }
  }
}

interface SalesProps {
  sales: SalesInterface[]
}

const Sales: NextPage = () => {
  const [ showModal, setShowModal ] = useState(false);
  const sales = [
    {id: 1, nomelivro: 'Livro X', valor: 100.00, nomevendedor: 'Cléber Machado', datavenda: '14/05/22'},
    {id: 2, nomelivro: 'Livro Y', valor: 75.00, nomevendedor: 'Sérgio Luiz', datavenda: '14/05/22'},
    {id: 3, nomelivro: 'Livro Z', valor: 50.00, nomevendedor: 'Vinicius Junior', datavenda: '14/05/22'},
  ];
  const deleteAction = (
    <Td>
      <Trash style={` h-6 w-6 stroke-red-600 `}/>
    </Td>
  );

  return (
    <Layout>
      <>
        <div className="flex justify-between">
          <H1>
            Vendas
          </H1>

          <PrimaryButton handleClick={() => { setShowModal(true) }}>
            Adicionar
          </PrimaryButton>
        </div>

        {showModal && (
          <NewSale setShowModal={setShowModal}/>
        )}

        <Table 
          thead={
            ['Livros', 'Preço', 'Vendedor', 'Data', 'Excluir']
          }
          tbody={
            <TBody data={sales} actions={deleteAction}/>
          }
        />
      </>
    </Layout>
  );
}

export default Sales;