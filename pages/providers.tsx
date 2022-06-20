import { NextPage } from "next";
import { useState } from "react";
import PrimaryButton from "../components/button/PrimaryButton";
import H1 from "../components/heading/H1";
import Layout from "../components/Layout";
import NewProviders from "../components/modal/add/NewProviders";
import Table from "../components/table";

const Providers: NextPage = () => {
  const [ showModal, setShowModal ] = useState(false);

  return (
    <Layout>
      <>
        <div className="flex justify-between">
          <H1>
            Fornecedores
          </H1>

          <PrimaryButton handleClick={() => { setShowModal(true) }}>
            Adicionar
          </PrimaryButton>
        </div>

        {showModal && (
          <NewProviders setShowModal={setShowModal}/>
        )}

        <Table
          thead={['Fornecedor', 'Endereço', 'Telefone', 'Site', 'Excluir']}
          tbody={
            <></>
          }
        />
      </>
    </Layout>
  );
}

export default Providers;