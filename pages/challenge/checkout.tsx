import type { NextPage } from "next";
import s from "@/styles/challenge/Checkout.module.css";
import WidthContainer from "@/components/WidthContainer/WidthContainer";
import { useChallengeStore } from "@/state/useChallenge";
import { Button } from "@/components/challenge/Button/Button";
import { useRouter } from "next/router";
import { Input } from "@/components/challenge/Input/Input";
import { useMemo } from "react";

const SHIPPING_PRICE = 1.25;

const CheckoutPage: NextPage = () => {
  const router = useRouter();
  const { cart, setCheckoutCart } = useChallengeStore((state) => ({
    cart: state.cart,
    setCheckoutCart: state.setCheckoutCart,
  }));

  const subtotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );

  return (
    <main className={s.main}>
      <WidthContainer className={s.widthContainer}>
        <h1 className={s.title}>Your order</h1>
        <div className={s.form}>
          <div className={s.group}>
            <div className={s.section}>
              <h2 className={s.sectionTitle}>Contact information</h2>
              <Input placeholder="First name" color="black" />
              <Input placeholder="Last name" color="black" />
              <div className={s.inputGroup}>
                <Input placeholder="Email" color="black" />
                <Input placeholder="Phone (optional)" color="black" />
              </div>
            </div>
            <div className={s.section}>
              <h2 className={s.sectionTitle}>Shipping address</h2>
              <Input placeholder="Address" color="black" />
              <Input
                placeholder="Apartment, suite, etc (optional)"
                color="black"
              />
              <div className={s.inputGroup}>
                <Input placeholder="Country" color="black" />
                <Input placeholder="City" color="black" />
              </div>
              <div className={s.inputGroup}>
                <Input placeholder="Region" color="black" />
                <Input placeholder="ZIP code" color="black" />
              </div>
            </div>
          </div>
          <div className={s.group}>
            <div className={s.section}>
              <h2 className={s.sectionTitle}>Order details</h2>
              <Input placeholder="Discount code" color="black" />
              <div className={s.border} />
              <span className={s.subtotal}>
                Subtotal
                <span className={s.price}>
                  {"  "}${subtotal}
                </span>
              </span>
              <span className={s.subtotal}>
                Shipping
                <span className={s.price}>
                  {"  "}${SHIPPING_PRICE}
                </span>
              </span>
              <div className={s.border} />
              <span className={s.total}>
                Total
                <span className={s.price}>
                  {"  "}${SHIPPING_PRICE + subtotal}
                </span>
              </span>
            </div>
            <div className={s.buttonsGroup}>
              <Button
                text="Pay"
                onClick={function (): void {
                  throw new Error("Function not implemented.");
                }}
                type="primary"
              />
              <Button
                text="Back to cart"
                onClick={() => {
                  setCheckoutCart([]);
                  router.push("/challenge/cart");
                }}
                type="secondary"
              />
            </div>
          </div>
        </div>
      </WidthContainer>
    </main>
  );
};

export default CheckoutPage;