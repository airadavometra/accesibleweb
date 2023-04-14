import WidthContainer from "@/components/WidthContainer/WidthContainer";
import { Product } from "@/types/challenge/product";
import classNames from "classnames";
import Image from "next/image";
import { Button } from "../Button/Button";
import s from "./ProductInfo.module.css";
import { useState } from "react";

type ProductInfoProps = {
  product: Product;
};

export const ProductInfo = ({ product }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState<number>(0);

  return (
    <section className={s.main}>
      <WidthContainer className={s.widthContainer}>
        <div className={s.content}>
          <div className={classNames(s.section, s.imageContainer)}>
            <Image
              className={s.image}
              src={product.imgSrc}
              alt={product.name}
              fill
            />
          </div>
          <div className={classNames(s.section, s.descriptionSection)}>
            <h3 className={s.name}>{product.name}</h3>
            <span className={s.price}>{product.price}</span>
            <div>
              <span className={s.quantityButtonTitle}>Quantity</span>
              <div className={s.quantityButtonContainer}>
                <button
                  className={s.quantityButton}
                  onClick={() =>
                    setQuantity((prevState) =>
                      prevState > 0 ? prevState - 1 : prevState
                    )
                  }
                >
                  -
                </button>
                <span className={s.quantity}>{quantity}</span>
                <button
                  className={s.quantityButton}
                  onClick={() => setQuantity((prevState) => prevState + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <Button
              text="Add to cart"
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
              type="secondary"
            />
            <Button
              text="Buy it now"
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
              type="primary"
            />
            <p className={s.description}>{product.description}</p>
          </div>
        </div>
      </WidthContainer>
    </section>
  );
};
