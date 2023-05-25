import type { NextPage } from "next";
import s from "@/styles/challenge/Cart.module.css";
import WidthContainer from "@/components/WidthContainer/WidthContainer";
import { useChallengeStore } from "@/state/useChallenge";
import { EmptyState } from "@/components/challenge/EmptyState/EmptyState";
import Image from "next/image";
import { QuantityButton } from "@/components/challenge/QuantityButton/QuantityButton";
import { Button } from "@/components/challenge/Button/Button";
import classNames from "classnames";
import { Delete } from "@/icons/Delete";
import { useRouter } from "next/router";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Fragment, useEffect } from "react";

const CartPage: NextPage = () => {
  const router = useRouter();

  const {
    filter,
    cart,
    removeProduct,
    updateProductQuantity,
    setCheckoutCart,
  } = useChallengeStore((state) => ({
    filter: state.filter,
    cart: state.cart,
    removeProduct: state.removeProduct,
    updateProductQuantity: state.updateProductQuantity,
    setCheckoutCart: state.setCheckoutCart,
  }));

  useEffect(() => {
    if (filter === undefined) {
      router.push("/");
    }
  }, [filter, router]);

  const isMobile = useMediaQuery("(max-width: 48rem)");

  const onContinueShoppingList = () => {
    router.push("/challenge");
  };

  return (
    <div className={s.main}>
      <WidthContainer className={s.widthContainer}>
        {cart.length === 0 ? (
          <EmptyState text="Your cart is empty" />
        ) : (
          <>
            <div className={s.titleContainer}>
              <div className={s.title}>Your cart</div>
              <div
                role="link"
                onClick={onContinueShoppingList}
                className={s.continueShoppingLink}
              >
                Continue shopping
              </div>
            </div>
            {isMobile ? (
              <div className={s.mobileCart}>
                <div className={s.tableHeader}>
                  <div className={s.gridHeader}>product</div>
                  <div className={s.gridHeader}>total</div>
                </div>
                {cart.map((item) => (
                  <div key={item.id} className={s.cartItem}>
                    <div className={s.imageContainer}>
                      <Image
                        className={s.image}
                        src={item.imgSrc}
                        alt=""
                        fill
                      />
                    </div>
                    <div className={s.interactiveContainer}>
                      <div className={s.productInfoContainer}>
                        <div className={s.productInfo}>
                          <div className={s.productName}>{item.name}</div>
                          <div>${item.price}</div>
                        </div>
                        <div className={s.total}>
                          ${Number(item.price * item.quantity).toFixed(2)}
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
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className={s.grid}>
                <div className={s.gridHeader}>product</div>
                <div className={s.gridHeader}>quantity</div>
                <div className={classNames(s.gridHeader, s.right)}>total</div>
                {cart.map((item) => (
                  <Fragment key={item.id}>
                    <div className={s.product}>
                      <div className={s.imageContainer}>
                        <Image
                          className={s.image}
                          src={item.imgSrc}
                          alt=""
                          fill
                        />
                      </div>
                      <div className={s.productInfo}>
                        <div className={s.productName}>{item.name}</div>
                        <div className={s.price}>${item.price}</div>
                      </div>
                    </div>
                    <div className={s.buttons}>
                      <QuantityButton
                        quantity={item.quantity}
                        disabled={
                          item.availableQuantity === item.quantity
                            ? "increase"
                            : item.quantity === 1
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
                    <div className={classNames(s.total, s.right)}>
                      ${Number(item.price * item.quantity).toFixed(2)}
                    </div>
                  </Fragment>
                ))}
              </div>
            )}
            <div className={s.border} />
            <div className={s.subtotalContainer}>
              <div className={s.subtotal}>
                Subtotal
                <div className={s.subtotalSum}>
                  {"  "}$
                  {Number(
                    cart.reduce(
                      (sum, item) => sum + item.price * item.quantity,
                      0
                    )
                  ).toFixed(2)}
                </div>
              </div>
              <div className={s.disclaimer}>
                Taxes and shipping calculated at checkout
              </div>
              <Button
                text="Check out"
                type="primary"
                onClick={() => {
                  setCheckoutCart(cart);
                  router.push("/challenge/checkout");
                }}
              />
            </div>
          </>
        )}
      </WidthContainer>
    </div>
  );
};

export default CartPage;
