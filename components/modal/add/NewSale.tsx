import Form from "../../form";
import H3 from "../../heading/H3";
import Input from "../../input";
import Modal from "..";
import AddModalInterface from "./interface";
import api from "../../../services/api";

export default function NewSale(props: AddModalInterface) {
  const handleSubmit = async (event: any) => {
    event.preventDefault()

    const data = {
      bookName: event.target.bookName.value,
      sellerName: event.target.sellerName.value,
      sellDate: event.target.sellDate.value,
      sellValue: event.target.sellValue.value,
      note: event.target.note.value
    }

    api.post('/sell', data)
      .then(res => props.setShowModal(false))
      .catch(err => console.error(err))
    
  }

  return (
    <Modal 
      setShowModal={props.setShowModal} 
      title={
        <H3>
          Incluir Venda
        </H3>
      }>
      <Form handleSubmit={handleSubmit}>
        <Input 
          id="bookName"
          placeholder="Livro"
          required
        />

        <Input 
          id="sellerName"
          placeholder="Vendedor"
          required
        />

        <Input 
          id="sellDate"
          placeholder="Data"
          required
        />

        <Input 
          id="sellValue"
          placeholder="Preço"
          required
        />

        <Input 
          id="note"
          placeholder="Nota Fiscal"
          required
        />
      </Form>
    </Modal>
  )
}