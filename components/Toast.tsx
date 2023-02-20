import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IToast {
  message: string;
  variant: "success" | "error" | "warning" | "info";
}

export const notify = ({ message, variant }: IToast) =>
  toast(message, {
    type: variant,
  });