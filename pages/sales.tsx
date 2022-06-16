import H1 from "../components/heading/H1";
import Trash from "../components/icons/Trash";
import Layout from "../components/Layout"
import PrimaryButton from "../components/button/PrimaryButton";
import Table from "../components/table";
import TBody from "../components/table/TBody";
import Td from "../components/table/Td";
import { NextPage } from "next";
import { useState } from "react";
import NewSale from "../components/sales/NewSale";

const Sales: NextPage = () => {
  const [ showModal, setShowModal ] = useState(false);
  const sales = [
    {name: 'Livro X', price: 100.00, vendor: 'Cléber Machado', date: '14/05/22'},
    {name: 'Livro Y', price: 75.00, vendor: 'Sérgio Luiz', date: '14/05/22'},
    {name: 'Livro Z', price: 50.00, vendor: 'Vinicius Junior', date: '14/05/22'},
    {name: 'Livro X', price: 100.00, vendor: 'Cléber Machado', date: '14/05/22'},
    {name: 'Livro Y', price: 75.00, vendor: 'Sérgio Luiz', date: '14/05/22'},
    {name: 'Livro Z', price: 50.00, vendor: 'Vinicius Junior', date: '14/05/22'},
    {name: 'Livro X', price: 100.00, vendor: 'Cléber Machado', date: '14/05/22'},
    {name: 'Livro Y', price: 75.00, vendor: 'Sérgio Luiz', date: '14/05/22'},
    {name: 'Livro Z', price: 50.00, vendor: 'Vinicius Junior', date: '14/05/22'},
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