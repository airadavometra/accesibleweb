import { NotificationToast } from "@/components/accessible/NotificationToast/NotificationToast";
import { BlindnessNotificationToast } from "@/components/blindnessSimulation/NotificationToast/NotificationToast";
import { ColorBlindnessNotificationToast } from "@/components/colorBlindnessSimulation/NotificationToast/NotificationToast";
import { DyslexiaNotificationToast } from "@/components/dyslexiaSimulation/NotificationToast/NotificationToast";
import { MyopiaNotificationToast } from "@/components/myopiaSimulation/NotificationToast/NotificationToast";
import { TremorNotificationToast } from "@/components/tremorSimulation/NotificationToast/NotificationToast";
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

export const showBlindnessAddToCartNotification = (
  productName: string,
  amount: number
) => {
  toast(
    <BlindnessNotificationToast productName={productName} amount={amount} />,
    {
      style: {
        maxWidth: "50%",
        padding: "8px 16px 8px 8px",
        border: "1px solid black",
        borderRadius: "0px",
      },
      duration: 3000,
    }
  );
};

export const showColorBlindnessAddToCartNotification = (
  productName: string,
  amount: number
) => {
  toast(
    <ColorBlindnessNotificationToast
      productName={productName}
      amount={amount}
    />,
    {
      style: {
        maxWidth: "50%",
        padding: "8px 16px 8px 8px",
        border: "1px solid black",
        borderRadius: "0px",
      },
      duration: 3000,
    }
  );
};

export const showDyslexiaAddToCartNotification = (
  productName: string,
  amount: number
) => {
  toast(
    <DyslexiaNotificationToast productName={productName} amount={amount} />,
    {
      style: {
        maxWidth: "50%",
        padding: "8px 16px 8px 8px",
        border: "1px solid black",
        borderRadius: "0px",
      },
      duration: 3000,
    }
  );
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

export const showTremorAddToCartNotification = (
  productName: string,
  amount: number
) => {
  toast(<TremorNotificationToast productName={productName} amount={amount} />, {
    style: {
      maxWidth: "50%",
      padding: "8px 16px 8px 8px",
      border: "1px solid black",
      borderRadius: "0px",
    },
    duration: 3000,
  });
};
