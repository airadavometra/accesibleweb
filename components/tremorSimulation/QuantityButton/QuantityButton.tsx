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
      >
        <button
          aria-label="remove one unit"
          onClick={decrease}
          disabled={disabled === "decrease"}
        >
          -
        </button>
      </div>
      <span className={s.quantity}>{quantity}</span>
      <div
        className={classNames(s.quantityButton, {
          [s.disabled]: disabled === "increase",
        })}
      >
        <button
          aria-label="add one more unit"
          onClick={increase}
          disabled={disabled === "increase"}
        >
          +
        </button>
      </div>
    </div>
  );
};
