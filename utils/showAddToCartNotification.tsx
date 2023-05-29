import { NotificationToast } from "@/components/challenge/accessible/NotificationToast/NotificationToast";
import { CheckCircle } from "@/icons/CheckCircle";
import toast from "react-hot-toast";

export const showAddToCartNotification = (
  productName: string,
  amount: number
) => {
  toast(<NotificationToast productName={productName} amount={amount} />, {
    style: {
      maxWidth: "50%",
      padding: "8px 16px 8px 8px",
      border: "1px solid black",
      borderRadius: "0px",
    },
    duration: 3000,
  });
};
