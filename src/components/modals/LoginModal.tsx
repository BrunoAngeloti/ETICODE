import Modal from "../Modal";
import { FcGoogle } from "react-icons/fc";
import { useEffect } from "react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  setSignUpModalOpen: (value: boolean) => void;
}

export function LoginModal({ isOpen, onClose, setSignUpModalOpen }: LoginModalProps){
  function changeModal(){
    onClose();
    setSignUpModalOpen(true);
  }

  useEffect(() => {
    if(isOpen) document.body.style.overflowY = 'hidden'
    else document.body.style.overflowY = 'visible'
  }, [isOpen])

  return(
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="font-poppins flex flex-col item-center text-center">
        <h1 className="font-semibold text-grey-500 text-2xl">ENTRAR</h1>
        <p className="font-medium text-grey-300 text-sm mt-1">
          Novo usuário? 
          <span className="underline cursor-pointer ml-1" onClick={changeModal}>Criar uma conta</span>
        </p>

        <button 
          onClick={() => alert("Em breve")}
          className="py-2 px-5 text-grey-300 font-medium flex flex-row items-center justify-center bg-white border border-primary-50 rounded mt-4 hover:shadow-sm transition-shadow"
        >
          <FcGoogle className="mr-2" size={20} />
          Continuar com o Google
        </button>
      </div>
    </Modal>
  )
}