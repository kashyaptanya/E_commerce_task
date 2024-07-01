import { toast } from 'react-toastify';

const Toast = (type, message, position = "top-right", time = 1000) => {
    toast.dismiss();

    const defaultOptions = {
        position: position,
        autoClose: time,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
    };

    const options = {
        ...defaultOptions,
        ...(type === 'e' ? { autoClose: 1000, type: 'error' } : {}),
        ...(type === 's' ? { autoClose: time, type: 'success' } : {}),
        ...(type === 'w' ? { autoClose: 1000, type: 'warning' } : {}),
    };

    toast(message, options);
};

export default Toast;

/* 
    ******** Positions ********  
    #"top-left"
    #"top-right"
    #"top-center"
    #"bottom-left"
    #"bottom-right"
    #"bottom-center"

    ******** Types ******** 
    #success =s
    #error =e
    #warn =w
    #default
*/