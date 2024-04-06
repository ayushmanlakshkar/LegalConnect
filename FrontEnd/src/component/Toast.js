import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useToast } from '../store';

const Toast = () => {
 const {message,type,setToast,clearToast}= useToast();

  useEffect(() => {
    if (message) {
      toast[type ? 'success' : 'error'](message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
      });
      clearToast();
    }
  }, [message,type]);

  return <ToastContainer />;
}

export default Toast;
