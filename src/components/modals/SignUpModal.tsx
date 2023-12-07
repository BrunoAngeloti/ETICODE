import { FcGoogle } from "react-icons/fc";
import Modal from "../Modal";
import { supabase } from "@/lib/initSupabase";
import { useEffect } from "react";

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  setLoginModalOpen: (value: boolean) => void;
}

export function SignUpModal({ isOpen, onClose, setLoginModalOpen }: SignUpModalProps) {
  function changeModal() {
    onClose();
    setLoginModalOpen(true);
  }

  async function signUpWithGoogle() {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    })

    onClose()
  }

  useEffect(() => {
    if(isOpen) document.body.style.overflowY = 'hidden'
    else document.body.style.overflowY = 'visible'
  }, [isOpen])

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="font-poppins flex flex-col item-center text-center">
        <h1 className="font-semibold text-grey-500 text-2xl">CRIAR CONTA</h1>
        <p className="font-medium text-grey-300 text-sm mt-1">
          Já tem conta?
          <span className="underline cursor-pointer ml-1" onClick={changeModal}>Entrar agora</span>
        </p>

        <button
          className="py-2 px-5 text-grey-300 font-medium flex flex-row items-center justify-center bg-white border border-primary-50 rounded mt-4 hover:shadow-sm transition-shadow"
          onClick={signUpWithGoogle}
        >
          <FcGoogle className="mr-2" size={20} />
          Cadastre com o Google
        </button>
      </div>
    </Modal>
  )
}