import { toast } from 'react-toastify';

export const showResponseMessage = (message: string, type: "error" | "success" = "error") => {
  toast(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    draggable: true,
    theme: "light",
    type
  });
};