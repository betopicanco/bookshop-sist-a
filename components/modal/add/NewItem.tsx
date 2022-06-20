import Form from "../../form";
import H3 from "../../heading/H3";
import Input from "../../input";
import Modal from "..";
import AddModalInterface from "./interface";

export default function NewItem(props: AddModalInterface) {
  return (
    <Modal 
      setShowModal={props.setShowModal} 
      title={
        <H3>
          Incluir Item
        </H3>
      }>
      <Form>
        <Input placeholder="Nome do Livro"/>

        <Input placeholder="Preço"/>
      </Form>
    </Modal>
  )
}