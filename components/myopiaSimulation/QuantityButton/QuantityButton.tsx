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
      <button
        className={classNames(s.quantityButton, {
          [s.disabled]: disabled === "decrease",
        })}
        onClick={decrease}
        disabled={disabled === "decrease"}
      >
        -
      </button>
      <span className={s.quantity}>{quantity}</span>
      <button
        className={classNames(s.quantityButton, {
          [s.disabled]: disabled === "increase",
        })}
        onClick={increase}
        disabled={disabled === "increase"}
      >
        +
      </button>
    </div>
  );
};
