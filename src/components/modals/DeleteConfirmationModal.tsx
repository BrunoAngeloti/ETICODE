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

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full mt-6">
          <Button title="Cancelar" onPress={onClose} fullWidth variant="outlined"/>
          <Button title="Limpar" onPress={handleConfirmDelete} icon={FaTrash} fullWidth variant="filled" color="red"/>
        </div>
      </div>
    </Modal>
  )
}