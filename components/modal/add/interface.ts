import { Dispatch, SetStateAction } from "react";

export default interface AddModalInterface {
  setShowModal: Dispatch<SetStateAction<boolean>>,
}