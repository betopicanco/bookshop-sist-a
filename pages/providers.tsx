import { NextPage } from "next";
import { useEffect, useState } from "react";
import PrimaryButton from "../components/button/PrimaryButton";
import H1 from "../components/heading/H1";
import Trash from "../components/icons/Trash";
import Layout from "../components/Layout";
import NewProviders from "../components/modal/add/NewProviders";
import Table from "../components/table";
import TBody from "../components/table/TBody";
import Td from "../components/table/Td";
import api from "../services/api";

const Providers: NextPage = () => {
  const [ showModal, setShowModal ] = useState(false);
  const [ providers, setProviders ] = useState();
  const deleteAction = (
    <Td>
      <Trash style={` h-6 w-6 stroke-red-600 `}/>
    </Td>
  );

  useEffect(() => {
    api.get('/provider').then(res => {
      setProviders(res.data.data);
    })
  }, []);

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

        {providers && (
          <Table
            thead={['Fornecedor', 'Endereço', 'Telefone', 'Site', 'Excluir']}
            tbody={
              <TBody data={providers} actions={deleteAction}/>
            }
          />
        )}
      </>
    </Layout>
  );
}

export default Providers;