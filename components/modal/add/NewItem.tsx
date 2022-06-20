import Form from "../../form";
import H3 from "../../heading/H3";
import Input from "../../input";
import Modal from "..";
import AddModalInterface from "./interface";
import api from "../../../services/api";

export default function NewItem(props: AddModalInterface) {
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const data = {
      bookName: event.target.bookName.value,
      sellValue: event.target.sellValue.value,
      hall: event.target.hall.value,
      shelf: event.target.shelf.value,
    }

    api.post('/inventory', data)
      .then(res => props.setShowModal(false))
      .catch(err => console.error(err))
  }

  return (
    <Modal 
      setShowModal={props.setShowModal} 
      title={
        <H3>
          Incluir Item
        </H3>
      }>
      <Form handleSubmit={handleSubmit}>
        <Input
          id="bookName" 
          placeholder="Nome do Livro"
          required
        />

        <Input
          id="sellValue" 
          placeholder="Preço"
          required
        />

        <Input
          id="hall" 
          placeholder="Corredor"
          required
        />

        <Input
          id="shelf" 
          placeholder="Pratileira"
          required
        />
      </Form>
    </Modal>
  )
}