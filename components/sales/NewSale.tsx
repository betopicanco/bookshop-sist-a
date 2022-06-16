import { Dispatch, SetStateAction } from "react";
import Form from "../form";
import H3 from "../heading/H3";
import Input from "../input";
import Modal from "../modal";

interface NewSaleProps {
  setShowModal: Dispatch<SetStateAction<boolean>>
}

export default function NewSale(props: NewSaleProps) {
  return (
    <Modal 
      setShowModal={props.setShowModal} 
      title={
        <H3>
          Incluir Venda
        </H3>
      }>
      <Form>
        <Input placeholder="Livro"/>

        <Input placeholder="Código"/>

        <Input placeholder="Preço"/>

        <Input placeholder="Nota Fiscal"/>
      </Form>
    </Modal>
  )
}