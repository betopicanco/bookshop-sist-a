import { Dispatch, SetStateAction } from "react";
import Form from "../form";
import H3 from "../heading/H3";
import Input from "../input";
import Modal from "../modal";

interface NewSupplierProps {
  setShowModal: Dispatch<SetStateAction<boolean>>
}

export default function NewSupllier(props: NewSupplierProps) {
  return (
    <Modal 
      setShowModal={props.setShowModal} 
      title={
        <H3>
          Incluir Fornecedor
        </H3>
      }>
      <Form>
        <Input placeholder="Fornecedor"/>

        <Input placeholder="Endereço"/>

        <Input placeholder="Telefone"/>

        <Input placeholder="Site"/>
      </Form>
    </Modal>
  )
}