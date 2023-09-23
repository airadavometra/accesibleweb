import type { NextPage } from "next";
import s from "@/styles/simulation/blindness/Checkout.module.css";
import WidthContainer from "@/components/common/WidthContainer/WidthContainer";
import { useSimulationStore } from "@/state/useSimulation";
import { Button } from "@/components/blindnessSimulation/Button/Button";
import { useRouter } from "next/router";
import { Input } from "@/components/blindnessSimulation/Input/Input";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ConfirmPayModal } from "@/components/mainLanding/ConfirmPayModal/ConfirmPayModal";
import { data } from "@/data/blindness";
import Image from "next/image";

const CheckoutPage: NextPage = () => {
  const router = useRouter();

  const {
    checkoutCart,
    isDiscountApplied,
    setIsDiscountApplied,
    setCheckoutCart,
    setCart,
  } = useSimulationStore((state) => ({
    checkoutCart: state.checkoutCart,
    isDiscountApplied: state.isDiscountApplied,
    setIsDiscountApplied: state.setIsDiscountApplied,
    setCheckoutCart: state.setCheckoutCart,
    setCart: state.setCart,
  }));

  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const [address, setAddress] = useState<string>();
  const [country, setCountry] = useState<string>();
  const [city, setCity] = useState<string>();
  const [discountCode, setDiscountCode] = useState<string>();

  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState<boolean>(false);

  const subtotal = useMemo(
    () =>
      checkoutCart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [checkoutCart]
  );

  const total = useMemo(
    () =>
      isDiscountApplied
        ? Number(
            (data.deliveryPrice || 0) +
              subtotal * ((100 - (data.discount || 0)) / 100)
          ).toFixed(2)
        : Number((data.deliveryPrice || 0) + subtotal).toFixed(2),
    [subtotal, isDiscountApplied]
  );

  useEffect(() => {
    if (discountCode && data && data.promocode === discountCode) {
      setIsDiscountApplied(true);
    }
  }, [discountCode, setIsDiscountApplied]);

  const onPayClick = useCallback(() => {
    setCart([]);
    setCheckoutCart([]);
    setIsDiscountApplied(false);
    router.push("/blindness/result");
  }, [setCart, setCheckoutCart, setIsDiscountApplied, router]);

  const onBackToCartClick = useCallback(() => {
    setCheckoutCart([]);
    router.push("/blindness/cart");
  }, [setCheckoutCart, router]);

  return (
    <>
      <div className={s.main}>
        <WidthContainer className={s.widthContainer}>
          <div className={s.title}>Your order</div>
          <div className={s.form}>
            <div className={s.group}>
              <div className={s.section}>
                <div className={s.sectionTitle}>Contact information</div>
                <Input
                  placeholder="First name"
                  color="black"
                  value={name}
                  onChange={(newValue?: string) => setName(newValue)}
                />
                <div className={s.inputGroup}>
                  <Input
                    placeholder="Email"
                    color="black"
                    value={email}
                    onChange={(newValue?: string) => setEmail(newValue)}
                  />
                  <Input
                    placeholder="Phone (optional)"
                    color="black"
                    value={phone}
                    onChange={(newValue?: string) => setPhone(newValue)}
                  />
                </div>
              </div>
              <div className={s.section}>
                <div className={s.sectionTitle}>Shipping address</div>
                <Input
                  placeholder="Address"
                  color="black"
                  value={address}
                  onChange={(newValue?: string) => setAddress(newValue)}
                />
                <div className={s.inputGroup}>
                  <Input
                    placeholder="Country"
                    color="black"
                    value={country}
                    onChange={(newValue?: string) => setCountry(newValue)}
                  />
                  <Input
                    placeholder="City"
                    color="black"
                    value={city}
                    onChange={(newValue?: string) => setCity(newValue)}
                  />
                </div>
              </div>
            </div>
            <div className={s.group}>
              <div className={s.section}>
                <div className={s.sectionTitle}>Order details</div>
                <div className={s.products}>
                  {checkoutCart.map((item) => (
                    <div key={item.id} className={s.productContainer}>
                      <div className={s.imageContainer}>
                        <Image
                          className={s.image}
                          src={item.imgSrc}
                          alt=""
                          fill
                        />
                      </div>
                      <div className={s.productInfo}>
                        <span className={s.productName}>{item.name}</span>
                        <span>
                          ${item.price} x {item.quantity}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <Input
                  placeholder="Discount code"
                  color="black"
                  value={discountCode}
                  onChange={(newValue?: string) => setDiscountCode(newValue)}
                />
                {discountCode !== undefined &&
                  discountCode !== "" &&
                  (isDiscountApplied ? (
                    <div className={s.errorMessage}>Discount applied</div>
                  ) : (
                    <div className={s.errorMessage}>Invalid discount code</div>
                  ))}
                <div className={s.border} />
                <span className={s.subtotal}>
                  Subtotal
                  <span className={s.price}>
                    {"  "}${Number(subtotal).toFixed(2)}
                  </span>
                </span>
                <span className={s.subtotal}>
                  Shipping
                  <span className={s.price}>
                    {"  "}${data.deliveryPrice || 0}
                  </span>
                </span>
                {isDiscountApplied && (
                  <span className={s.subtotal}>
                    Discount
                    <span className={s.price}>
                      {"  "}-{data.discount || 0}%
                    </span>
                  </span>
                )}
                <div className={s.border} />
                <span className={s.total}>
                  Total
                  <span className={s.price}>
                    {"  "}${total}
                  </span>
                </span>
              </div>
              <div className={s.buttonsGroup}>
                <Button
                  text="Pay"
                  onClick={() => setIsConfirmModalOpen(true)}
                  type="primary"
                />
                <Button
                  text="Back to cart"
                  onClick={onBackToCartClick}
                  type="secondary"
                />
              </div>
            </div>
          </div>
        </WidthContainer>
      </div>
      {isConfirmModalOpen && (
        <ConfirmPayModal
          isOpen={isConfirmModalOpen}
          onClose={() => setIsConfirmModalOpen(false)}
          onOk={onPayClick}
        />
      )}
    </>
  );
};

export default CheckoutPage;
