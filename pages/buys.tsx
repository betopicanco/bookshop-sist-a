import { NextPage } from "next";
import { useEffect, useState } from "react";
import PrimaryButton from "../components/button/PrimaryButton";
import H1 from "../components/heading/H1";
import Check from "../components/icons/Check";
import Layout from "../components/Layout";
import NewBuy from "../components/modal/add/NewBuy";
import Table from "../components/table";
import TBody from "../components/table/TBody";
import Td from "../components/table/Td";
import api from "../services/api";

const Buys: NextPage = () => {
  const [ showModal, setShowModal ] = useState(false);
  const [ buys, setBuys ] = useState();

  useEffect(() => {
    api.get('/buys').then(res => {
      setBuys(res.data.data)
    });
  }, []);

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

        {buys && (
          <Table
          thead={['Livro', 'Preço', 'Chega em', 'Fornecedor', 'Entregue']}
            tbody={
              <TBody data={buys} actions={confirm}/>
            }
          />
        )}
       </> 
    </Layout>
  );
}

export default Buys;