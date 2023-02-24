import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

type IToast = {
  message: string;
  variant: "success" | "error" | "warning" | "info";
}

export const notify = ({ message, variant }: IToast) =>
  toast(message, {
    type: variant,
  });
