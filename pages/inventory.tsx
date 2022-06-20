import { NextPage } from "next";
import { useEffect, useState } from "react";
import PrimaryButton from "../components/button/PrimaryButton";
import H1 from "../components/heading/H1";
import Layout from "../components/Layout";
import NewItem from "../components/modal/add/NewItem";
import Table from "../components/table";
import TBody from "../components/table/TBody";
import api from "../services/api";

const Inventory: NextPage = () => {
  const [ showModal, setShowModal ] = useState(false);
  const [ inventory, setInventory ] = useState();

  useEffect(() => {
    api.get('/inventory').then(res => {
      setInventory(res.data.data);
    });
  }, []);

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

        {inventory && (
          <Table
          thead={['Livros', 'Corredor', 'Prateleira', 'Preço']}
            tbody={
              <TBody data={inventory}/>
            }
          />
        )}
      </>
    </Layout>
  );
}

export default Inventory;