import { NextPage } from "next";
import { useState } from "react";
import PrimaryButton from "../components/button/PrimaryButton";
import H1 from "../components/heading/H1";
import Layout from "../components/Layout";
import NewSupllier from "../components/suppliers/NewSupplier";

const Suppliers: NextPage = () => {
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
          <NewSupllier setShowModal={setShowModal}/>
        )}
      </>
    </Layout>
  );
}

export default Suppliers;