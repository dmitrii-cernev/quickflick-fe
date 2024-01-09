import {toast} from "react-toastify";

export const notifyDefaultError = () => toast.error("Oops! Something went wrong!", {position: "top-right"});
