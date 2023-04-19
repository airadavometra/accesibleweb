import type { NextPage } from "next";
import s from "@/styles/challenge/Cart.module.css";
import WidthContainer from "@/components/WidthContainer/WidthContainer";
import { useChallengeStore } from "@/state/useChallenge";
import { EmptyState } from "@/components/challenge/EmptyState/EmptyState";
import Link from "next/link";
import Image from "next/image";
import { QuantityButton } from "@/components/challenge/QuantityButton/QuantityButton";
import { Button } from "@/components/challenge/Button/Button";
import classNames from "classnames";
import { Delete } from "@/icons/Delete";
import { useRouter } from "next/router";

const CartPage: NextPage = () => {
  const router = useRouter();
  const { cart, removeProduct, updateProductQuantity, setCheckoutCart } =
    useChallengeStore((state) => ({
      cart: state.cart,
      removeProduct: state.removeProduct,
      updateProductQuantity: state.updateProductQuantity,
      setCheckoutCart: state.setCheckoutCart,
    }));

  return (
    <main className={s.main}>
      <WidthContainer className={s.widthContainer}>
        {cart.length === 0 ? (
          <EmptyState text="Your cart is empty" />
        ) : (
          <>
            <div className={s.titleContainer}>
              <h1 className={s.title}>Your cart</h1>
              <Link href="/challenge" className={s.continueShoppingLink}>
                Continue shopping
              </Link>
            </div>
            <section className={s.grid}>
              <span className={s.gridHeader}>product</span>
              <span className={s.gridHeader}>quantity</span>
              <span className={classNames(s.gridHeader, s.right)}>total</span>
              {cart.map((item) => (
                <>
                  <div className={s.product}>
                    <div className={s.imageContainer}>
                      <Image
                        className={s.image}
                        src={item.imgSrc}
                        alt={item.name}
                        fill
                      />
                    </div>
                    <div className={s.productInfo}>
                      <span className={s.productName}>{item.name}</span>
                      <span>${item.price}</span>
                    </div>
                  </div>
                  <div className={s.buttons}>
                    <QuantityButton
                      quantity={item.quantity}
                      disabled={
                        item.availableQuantity === item.quantity
                          ? "increase"
                          : item.quantity === 0
                          ? "decrease"
                          : "none"
                      }
                      increase={() =>
                        updateProductQuantity(item.id, item.quantity + 1)
                      }
                      decrease={() =>
                        updateProductQuantity(item.id, item.quantity - 1)
                      }
                    />
                    <Button
                      text="Delete from cart"
                      onClick={() => removeProduct(item.id)}
                      type={"icon"}
                      icon={<Delete className={s.icon} />}
                    />
                  </div>
                  <span className={classNames(s.total, s.right)}>
                    ${item.price * item.quantity}
                  </span>
                </>
              ))}
            </section>
          </>
        )}
        <div className={s.border} />
        <section className={s.subtotalContainer}>
          <span className={s.subtotal}>
            Subtotal
            <span className={s.subtotalSum}>
              {"  "}$
              {cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}
            </span>
          </span>
          <span className={s.disclamer}>
            Taxes and shipping calculated at checkout
          </span>
          <Button
            text="Check out"
            type="primary"
            onClick={() => {
              setCheckoutCart(cart);
              router.push("/challenge/checkout");
            }}
          />
        </section>
      </WidthContainer>
    </main>
  );
};

export default CartPage;
