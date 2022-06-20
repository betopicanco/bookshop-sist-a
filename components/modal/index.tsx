import { Dispatch, SetStateAction } from "react";
import PrimaryButton from "../button/PrimaryButton";

interface ModalProps {
  title: JSX.Element,
  children : JSX.Element,
  setShowModal:  Dispatch<SetStateAction<boolean>>
}

export default function Modal(props: ModalProps) {
  const { title, children, setShowModal } = props;

  return (
    <div
      className={`
        justify-center items-center flex 
        overflow-x-hidden overflow-y-auto 
        fixed inset-0 z-50 
        outline-none focus:outline-none
        bg-transparent/30
      `}>
      <div
        className={` 
          relative w-auto my-6 mx-auto max-w-3xl 
        `}>
        <div
          className={`
            border-0 rounded-lg shadow-lg 
            relative flex flex-col w-full
            bg-white outline-none focus:outline-none p-4
          `}>
          <div className="text-right p-2">
            <PrimaryButton handleClick={() => setShowModal(false)}>
              X
            </PrimaryButton>
          </div>
          
          <div className={` text-center `}>
            {title}
          </div>

          { children }
        </div>
      </div>
    </div>
  );
}