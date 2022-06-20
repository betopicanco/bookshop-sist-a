import { NextPage } from "next";
import { useState } from "react";
import PrimaryButton from "../components/button/PrimaryButton";
import H1 from "../components/heading/H1";
import Layout from "../components/Layout";
import NewItem from "../components/modal/add/NewItem";
import Table from "../components/table";
import TBody from "../components/table/TBody";

const Inventory: NextPage = () => {
  const [ showModal, setShowModal ] = useState(false);

  return (
    <Layout>
      <>
        <div className="flex justify-between">
          <H1>
            Estoque
          </H1>

          <PrimaryButton handleClick={() => { setShowModal(true) }}>
            Adicionar
          </PrimaryButton>
        </div>

        {showModal && (
          <NewItem setShowModal={setShowModal}/>
        )}

        <Table
          thead={['Livros', 'Preço', 'Corredor', 'Prateleira']}
          tbody={
            <TBody data={[0]}/>
          }
        />
      </>
    </Layout>
  );
}

export default Inventory;