import { ToastContainer, toast } from "react-toastify";

export function notification(type, mgs) {
  if (type == "error") {
    return toast.error(mgs);
  }
  if (type == "warn") {
    return toast.warn(mgs);
  }
  if (type == "success") {
    return toast.success(mgs);
  }
  if (type == "info") {
    return toast.info(mgs);
  }
}
