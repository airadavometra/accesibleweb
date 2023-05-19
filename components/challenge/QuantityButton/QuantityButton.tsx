import classNames from "classnames";
import s from "./QuantityButton.module.css";

type QuantityButtonProps = {
  quantity: number;
  disabled: "none" | "increase" | "decrease";
  increase: () => void;
  decrease: () => void;
};

export const QuantityButton = ({
  quantity,
  disabled,
  increase,
  decrease,
}: QuantityButtonProps) => {
  return (
    <div className={s.quantityButtonContainer}>
      <div
        className={classNames(s.quantityButton, {
          [s.disabled]: disabled === "decrease",
        })}
        onClick={decrease}
        role="button"
      >
        -
      </div>
      <div className={s.quantity}>{quantity}</div>
      <div
        className={classNames(s.quantityButton, {
          [s.disabled]: disabled === "increase",
        })}
        onClick={increase}
        role="button"
      >
        +
      </div>
    </div>
  );
};
