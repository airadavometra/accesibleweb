import WidthContainer from "@/components/common/WidthContainer/WidthContainer";
import { Product } from "@/types/simulation/product";
import classNames from "classnames";
import Image from "next/image";
import { Button } from "../Button/Button";
import s from "./ProductInfo.module.css";
import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import { useSimulationStore } from "@/state/useSimulation";
import { QuantityButton } from "../QuantityButton/QuantityButton";
import { showAccessibleAddToCartNotification } from "@/utils/showAccessibleAddToCartNotification";

type ProductInfoProps = {
  product: Product;
  path: string;
};

export const ProductInfo = ({ product, path }: ProductInfoProps) => {
  const router = useRouter();
  const { addProduct, setCheckoutCart } = useSimulationStore((state) => ({
    addProduct: state.addProduct,
    setCheckoutCart: state.setCheckoutCart,
  }));
  const [quantity, setQuantity] = useState<number>(1);

  const onAddProductClick = useCallback(
    (product: Product, quantity: number) => {
      addProduct(product, quantity);
      setQuantity(1);
    },
    [addProduct, setQuantity]
  );

  return (
    <section className={s.main}>
      <WidthContainer className={s.widthContainer}>
        <div className={s.content}>
          <div className={classNames(s.section, s.imageContainer)}>
            <Image
              className={s.image}
              src={product.imgSrc}
              alt={product.accessibleName}
              fill
            />
          </div>
          <div className={classNames(s.section, s.descriptionSection)}>
            <h3 className={s.name}>{product.accessibleName}</h3>
            <span className={s.price}>
              ${product.price} / {product.unit}
            </span>
            <div className={s.quantityButtonContainer}>
              <span className={s.quantityButtonTitle}>Quantity</span>
              <QuantityButton
                quantity={quantity}
                disabled={
                  product.availableQuantity === quantity
                    ? "increase"
                    : quantity === 0
                    ? "decrease"
                    : "none"
                }
                increase={() => setQuantity((prevState) => prevState + 1)}
                decrease={() =>
                  setQuantity((prevState) =>
                    prevState > 0 ? prevState - 1 : prevState
                  )
                }
              />
            </div>
            <Button
              text={"Add to cart"}
              onClick={() => {
                onAddProductClick(product, quantity);
                showAccessibleAddToCartNotification(
                  product.accessibleName,
                  quantity
                );
              }}
              type="secondary"
            />
            <Button
              text="Buy it now"
              onClick={() => {
                setCheckoutCart([{ ...product, quantity: quantity }]);
                router.push(`/${path}/accessible/checkout`);
              }}
              type="primary"
            />
            <p className={s.description}>{product.accessibleDescription}</p>
          </div>
        </div>
      </WidthContainer>
    </section>
  );
};
