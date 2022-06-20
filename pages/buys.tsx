import { NextPage } from "next";
import { useState } from "react";
import PrimaryButton from "../components/button/PrimaryButton";
import H1 from "../components/heading/H1";
import Check from "../components/icons/Check";
import Layout from "../components/Layout";
import NewBuy from "../components/modal/add/NewBuy";
import Table from "../components/table";
import TBody from "../components/table/TBody";
import Td from "../components/table/Td";

const Buys: NextPage = () => {
  const [ showModal, setShowModal ] = useState(false);
  const confirm = (
    <Td>
      <Check style={` h-6 w-6 stroke-green-500 `}/>
    </Td>
  );

  return (
    <Layout>
      <>
        <div className="flex justify-between">
          <H1>
            Compras
          </H1>

          <PrimaryButton handleClick={() => { setShowModal(true) }}>
            Adicionar
          </PrimaryButton>
        </div>

        {showModal && (
          <NewBuy setShowModal={setShowModal}/>
        )}

        <Table
          thead={['Livro', 'Preço', 'Fornecedor', 'Chega em', 'Entregue']}
          tbody={
            <TBody data={[0]} actions={confirm}/>
          }
        />
       </> 
    </Layout>
  );
}

export default Buys;