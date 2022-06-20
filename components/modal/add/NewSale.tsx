import Form from "../../form";
import H3 from "../../heading/H3";
import Input from "../../input";
import Modal from "..";
import AddModalInterface from "./interface";

export default function NewSale(props: AddModalInterface) {
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