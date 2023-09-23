import { CheckCircle } from "@/icons/CheckCircle";
import s from "./NotificationToast.module.css";

type NotificationToastProps = {
  productName: string;
  amount: number;
};

export const DyslexiaNotificationToast = ({
  productName,
  amount,
}: NotificationToastProps) => {
  return (
    <div className={s.toast}>
      <CheckCircle />
      <div className={s.text}>
        <span className={s.bold}>
          {amount} {productName}
          {amount > 1 ? "s " : " "}
        </span>
        added to your cart
      </div>
    </div>
  );
};
