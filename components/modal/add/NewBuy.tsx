import Form from "../../form";
import H3 from "../../heading/H3";
import Input from "../../input";
import Modal from "..";
import AddModalInterface from "./interface";
import api from "../../../services/api";

export default function NewBuy(props: AddModalInterface) {
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const data = {
      book: event.target.book.value,
      price: event.target.price.value,
      date: event.target.date.value,
      provider: event.target.provider.value,
    };

    api.post('/buys', data)
      .then(() => props.setShowModal(false))
      .catch(err => console.error(err))
  };

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
          id="book"
          placeholder="Nome do Livro"
          required
        />

        <Input 
          id="price"
          placeholder="Preço"
          required
        />

        <Input 
          id="date"
          placeholder="Data"
          required
        />

        <Input 
          id="provider"
          placeholder="Fornecedor"
          required
        />
      </Form>
    </Modal>
  );
}