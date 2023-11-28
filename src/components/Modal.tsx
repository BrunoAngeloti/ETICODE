import React from 'react';
import ReactDOM from 'react-dom';
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-secondary-50 px-7 sm:px-14 py-10 rounded-md shadow-lg relative max-w-full w-[500px] mx-5 max-h-full">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-lg font-bold"
        >
          <IoMdClose />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
