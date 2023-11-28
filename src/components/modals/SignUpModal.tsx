import { FcGoogle } from "react-icons/fc";
import Modal from "../Modal";

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  setLoginModalOpen: (value: boolean) => void;
  handleSignUp: () => void;
}

export function SignUpModal({ isOpen, onClose, setLoginModalOpen, handleSignUp }: SignUpModalProps){
  function changeModal(){
    onClose();
    setLoginModalOpen(true);
  }

  return(
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="font-poppins flex flex-col item-center text-center">
        <h1 className="font-semibold text-grey-500 text-2xl">CRIAR CONTA</h1>
        <p className="font-medium text-grey-300 text-sm mt-1">
          Já tem conta? 
          <span className="underline cursor-pointer ml-1" onClick={changeModal}>Entrar agora</span>
        </p>

        <button 
          className="py-2 px-5 text-grey-300 font-medium flex flex-row items-center justify-center bg-white border border-primary-50 rounded mt-4 hover:shadow-sm transition-shadow"
          onClick={handleSignUp}
        >
          <FcGoogle className="mr-2" size={20} />
          Cadastre com o Google
        </button>
      </div>
    </Modal>
  )
}