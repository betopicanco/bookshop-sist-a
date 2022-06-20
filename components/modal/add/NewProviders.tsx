import Form from "../../form";
import H3 from "../../heading/H3";
import Input from "../../input";
import Modal from "..";
import AddModalInterface from "./interface";
import api from "../../../services/api";

export default function NewProviders(props: AddModalInterface) {
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const data = {
      name: event.target.name.value,
      address: event.target.address.value,
      contact: event.target.contact.value,
      site: event.target.site.value,
    }

    api.post('/provider', data)
      .then(() => props.setShowModal(false))
      .catch(err => console.error(err))
  }

  return (
    <Modal 
      setShowModal={props.setShowModal} 
      title={
        <H3>
          Incluir Fornecedor
        </H3>
      }>
      <Form handleSubmit={handleSubmit}>
        <Input
          id="name"
          placeholder="Fornecedor"
          required
        />

        <Input 
          id="address"
          placeholder="Endereço"
          required
        />

        <Input 
          id="contact"
          placeholder="Telefone"
          required
        />

        <Input 
          id="site"
          placeholder="Site"
          required
        />
      </Form>
    </Modal>
  )
}