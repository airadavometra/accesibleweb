import s from "./QuantityButton.module.css";

type QuantityButtonProps = {
  quantity: number;
  increase: () => void;
  decrease: () => void;
};

export const QuantityButton = ({
  quantity,
  increase,
  decrease,
}: QuantityButtonProps) => {
  return (
    <div className={s.quantityButtonContainer}>
      <button className={s.quantityButton} onClick={decrease}>
        -
      </button>
      <span className={s.quantity}>{quantity}</span>
      <button className={s.quantityButton} onClick={increase}>
        +
      </button>
    </div>
  );
};
