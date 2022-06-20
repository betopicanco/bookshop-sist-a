import Form from "../../form";
import H3 from "../../heading/H3";
import Input from "../../input";
import Modal from "..";
import AddModalInterface from "./interface";

export default function NewProviders(props: AddModalInterface) {
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