import WidthContainer from "@/components/WidthContainer/WidthContainer";
import { Product } from "@/types/challenge/product";
import classNames from "classnames";
import Image from "next/image";
import { Button } from "../Button/Button";
import s from "./ProductInfo.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useChallengeStore } from "@/state/useChallenge";
import { QuantityButton } from "../QuantityButton/QuantityButton";

type ProductInfoProps = {
  product: Product;
};

export const ProductInfo = ({ product }: ProductInfoProps) => {
  const router = useRouter();
  const { addProduct, setCheckoutCart, cart } = useChallengeStore((state) => ({
    addProduct: state.addProduct,
    setCheckoutCart: state.setCheckoutCart,
    cart: state.cart,
  }));
  const [quantity, setQuantity] = useState<number>(1);
  const [inCart, setInCart] = useState<boolean>(false);

  useEffect(() => {
    const cartProduct = cart.find((item) => item.id === product.id);
    if (cartProduct) {
      setQuantity(cartProduct.quantity);
      setInCart(true);
    } else {
      setQuantity(1);
      setInCart(false);
    }
  }, [cart, product]);

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
            <span className={s.price}>${product.price}</span>
            <div>
              <span className={s.quantityButtonTitle}>Quantity</span>
              <QuantityButton
                quantity={quantity}
                increase={() => setQuantity((prevState) => prevState + 1)}
                decrease={() =>
                  setQuantity((prevState) =>
                    prevState > 0 ? prevState - 1 : prevState
                  )
                }
              />
            </div>
            <Button
              text={inCart ? "Update cart" : "Add to cart"}
              onClick={() => addProduct(product, quantity)}
              type="secondary"
            />
            <Button
              text="Buy it now"
              onClick={() => {
                setCheckoutCart([{ ...product, quantity: quantity }]);
                router.push("/challenge/checkout");
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
