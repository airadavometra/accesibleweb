import { NotificationToast } from "@/components/accessible/NotificationToast/NotificationToast";
import { MyopiaNotificationToast } from "@/components/myopiaSimulation/NotificationToast/NotificationToast";
import toast from "react-hot-toast";

export const showAccessibleAddToCartNotification = (
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

export const showMyopiaAddToCartNotification = (
  productName: string,
  amount: number
) => {
  toast(<MyopiaNotificationToast productName={productName} amount={amount} />, {
    style: {
      maxWidth: "50%",
      padding: "8px 16px 8px 8px",
      border: "1px solid black",
      borderRadius: "0px",
    },
    duration: 3000,
  });
};
