import Form from "../../form";
import H3 from "../../heading/H3";
import Input from "../../input";
import Modal from "..";
import AddModalInterface from "./interface";
import Datalist from "../../input/Datalist";

export default function NewBuy(props: AddModalInterface) {
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

        <Datalist
          id={'corredor'}
          placeholder="Selecionar Corredor"
          options={['A', 'B', 'C', 'D']}
        />

        <Datalist
          id={'pratileira'}
          placeholder="Selecionar Pratileira"
          options={['A', 'B', 'C', 'D']}
        />
      </Form>
    </Modal>
  );
}