import H1 from "../components/heading/H1";
import Trash from "../components/icons/Trash";
import Layout from "../components/Layout"
import PrimaryButton from "../components/button/PrimaryButton";
import Table from "../components/table";
import TBody from "../components/table/TBody";
import Td from "../components/table/Td";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import NewSale from "../components/modal/add/NewSale";
import api from '../services/api';

const Sales: NextPage = () => {
  const [ showModal, setShowModal ] = useState(false);
  const [ sales, setSales ] = useState<any>();

  useEffect(() => {
    api.get('/sell').then(res => {
      setSales(res.data.data);
    })
  }, []);

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

        {sales && (
          <Table 
            thead={
              ['Livro', 'Vendedor', 'Data', 'Valor', 'Nota']
            }
            tbody={
              <TBody data={sales}/>
            }
          />
        )}
      </>
    </Layout>
  );
}

export default Sales;