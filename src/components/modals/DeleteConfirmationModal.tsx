import { FaTrash } from "react-icons/fa";
import { Button } from "../Button";
import Modal from "../Modal";
import { useEffect } from "react";

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  handleConfirm: () => void;
}

export function DeleteConfirmationModal({ isOpen, onClose, handleConfirm }: DeleteConfirmationModalProps){
  useEffect(() => {
    if(isOpen) document.body.style.overflowY = 'hidden'
    else document.body.style.overflowY = 'visible'
  }, [isOpen])

  const handleConfirmDelete = () => {
    handleConfirm()
    onClose()
  }

  return(
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="font-poppins flex flex-col item-center text-center justify-center">
        <h1 className="font-semibold text-grey-500 text-2xl">Deseja limpar os dados?</h1>
        <p className="font-medium text-grey-300 text-base mt-2">
          Todos os dados serão perdidos.
        </p>

        <div className="flex flex-row gap-2 items-center justify-center w-full mt-4">
          <Button title="Cancelar" onPress={onClose} fullWidth variant="outlined"/>
          <Button title="Limpar" onPress={handleConfirmDelete} icon={FaTrash} fullWidth variant="filled"/>
        </div>
      </div>
    </Modal>
  )
}