import axios from "axios";
import { toast } from "react-toastify";

export const handleError = (error: any) => {
  if (!axios.isAxiosError(error)) {
    return;
  }
  let err = error.response;
  if (Array.isArray(err?.data.errors)) {
    for (const val of err.data.errors) {
      toast.warning(val.descrition);
    }
    return;
  }

  if (typeof err?.data.errors === "object") {
    for (const key in err.data.errors) {
      toast.warning(err.data.errors[key][0]);
    }
    return;
  }

  if (err?.data) {
    toast.warning(err.data);
    return;
  }

  if (err?.status === 401) {
    toast.warning("Please login to continue");
    window.history.pushState({}, "LoginPage", "/login");
    return;
  }

  if (err) {
    toast.warning(err.data);
  }
};
