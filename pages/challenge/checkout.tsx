import type { NextPage } from "next";
import s from "@/styles/challenge/Checkout.module.css";
import WidthContainer from "@/components/WidthContainer/WidthContainer";
import { CartProduct, useChallengeStore } from "@/state/useChallenge";
import { Button } from "@/components/challenge/Button/Button";
import { useRouter } from "next/router";
import { Input } from "@/components/challenge/Input/Input";
import { useCallback, useEffect, useMemo, useState } from "react";
import { challengeMap } from "@/data/challenge/challenge";
import { Filter } from "@/types/filter";
import { ConfirmPayModal } from "@/components/challenge/ConfirmPayModal/ConfirmPayModal";

const validateResult = (filter: Filter, cart: CartProduct[]): boolean => {
  const data = filter ? challengeMap[filter] : undefined;
  if (data) {
    return data.cart.every(
      (item) =>
        cart.find(
          (c) => c.id === item.productId && c.quantity === item.quantity
        ) !== undefined
    );
  }
  return false;
};

const getDiscount = (promocode: string, filter?: Filter) => {
  const data = filter ? challengeMap[filter] : undefined;
  if (data && data.promocode === promocode) {
    return data.discount;
  }
  return undefined;
};

const SHIPPING_PRICE = 1.25;

const CheckoutPage: NextPage = () => {
  const router = useRouter();

  const {
    filter,
    checkoutCart,
    appliedDiscount,
    setAppliedDiscount,
    setCheckoutCart,
    setFinishTime,
    setIsSuccessfulTrue,
  } = useChallengeStore((state) => ({
    filter: state.filter,
    checkoutCart: state.checkoutCart,
    appliedDiscount: state.appliedDiscount,
    setAppliedDiscount: state.setAppliedDiscount,
    setCheckoutCart: state.setCheckoutCart,
    setFinishTime: state.setFinishTime,
    setIsSuccessfulTrue: state.setIsSuccessfulTrue,
  }));

  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const [address, setAddress] = useState<string>();
  const [apartment, setApartment] = useState<string>();
  const [country, setCountry] = useState<string>();
  const [city, setCity] = useState<string>();
  const [region, setRegion] = useState<string>();
  const [zipCode, setZipCode] = useState<string>();
  const [discountCode, setDiscountCode] = useState<string>();

  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState<boolean>(false);
  console.log(checkoutCart);
  const subtotal = useMemo(
    () =>
      checkoutCart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [checkoutCart]
  );

  useEffect(() => {
    if (filter === undefined) {
      router.push("/");
    }
  }, [filter, router]);

  useEffect(() => {
    if (discountCode) {
      const discount = getDiscount(discountCode, filter);
      setAppliedDiscount(discount ?? 0);
    }
  }, [discountCode, filter, setAppliedDiscount]);

  const onPayClick = useCallback(() => {
    setFinishTime(new Date());

    if (
      filter &&
      firstName &&
      lastName &&
      email &&
      address &&
      country &&
      city &&
      region &&
      zipCode &&
      validateResult(filter, checkoutCart)
    ) {
      setIsSuccessfulTrue();
    }
    router.push("/result");
  }, [
    setFinishTime,
    checkoutCart,
    filter,
    firstName,
    lastName,
    email,
    address,
    country,
    city,
    region,
    zipCode,
    router,
    setIsSuccessfulTrue,
  ]);

  const onBackToCartClick = useCallback(() => {
    setCheckoutCart([]);
    router.push("/challenge/cart");
  }, [setCheckoutCart, router]);

  return (
    <>
      <main className={s.main}>
        <WidthContainer className={s.widthContainer}>
          <h1 className={s.title}>Your order</h1>
          <div className={s.form}>
            <div className={s.group}>
              <div className={s.section}>
                <h2 className={s.sectionTitle}>Contact information</h2>
                <Input
                  placeholder="First name"
                  color="black"
                  value={firstName}
                  onChange={(newValue?: string) => setFirstName(newValue)}
                  type={"text"}
                  required
                />
                <Input
                  placeholder="Last name"
                  color="black"
                  value={lastName}
                  onChange={(newValue?: string) => setLastName(newValue)}
                  type={"text"}
                  required
                />
                <div className={s.inputGroup}>
                  <Input
                    placeholder="Email"
                    color="black"
                    value={email}
                    onChange={(newValue?: string) => setEmail(newValue)}
                    type={"email"}
                    required
                  />
                  <Input
                    placeholder="Phone (optional)"
                    color="black"
                    value={phone}
                    onChange={(newValue?: string) => setPhone(newValue)}
                    type={"tel"}
                  />
                </div>
              </div>
              <div className={s.section}>
                <h2 className={s.sectionTitle}>Shipping address</h2>
                <Input
                  placeholder="Address"
                  color="black"
                  value={address}
                  onChange={(newValue?: string) => setAddress(newValue)}
                  type={"text"}
                  required
                />
                <Input
                  placeholder="Apartment, suite, etc (optional)"
                  color="black"
                  value={apartment}
                  onChange={(newValue?: string) => setApartment(newValue)}
                  type={"text"}
                />
                <div className={s.inputGroup}>
                  <Input
                    placeholder="Country"
                    color="black"
                    value={country}
                    onChange={(newValue?: string) => setCountry(newValue)}
                    type={"text"}
                    required
                  />
                  <Input
                    placeholder="City"
                    color="black"
                    value={city}
                    onChange={(newValue?: string) => setCity(newValue)}
                    type={"text"}
                    required
                  />
                </div>
                <div className={s.inputGroup}>
                  <Input
                    placeholder="Region"
                    color="black"
                    value={region}
                    onChange={(newValue?: string) => setRegion(newValue)}
                    type={"text"}
                    required
                  />
                  <Input
                    placeholder="ZIP code"
                    color="black"
                    value={zipCode}
                    onChange={(newValue?: string) => setZipCode(newValue)}
                    type={"text"}
                    required
                  />
                </div>
              </div>
            </div>
            <div className={s.group}>
              <div className={s.section}>
                <h2 className={s.sectionTitle}>Order details</h2>
                <Input
                  placeholder="Discount code"
                  color="black"
                  value={discountCode}
                  onChange={(newValue?: string) => setDiscountCode(newValue)}
                  type={"text"}
                />
                {discountCode !== undefined &&
                  discountCode !== "" &&
                  appliedDiscount === 0 && (
                    <span className={s.errorMessage}>
                      Invalid discount code
                    </span>
                  )}
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
                {appliedDiscount > 0 && (
                  <span className={s.subtotal}>
                    Discount
                    <span className={s.price}>
                      {"  "}-{appliedDiscount}%
                    </span>
                  </span>
                )}
                <div className={s.border} />
                <span className={s.total}>
                  Total
                  <span className={s.price}>
                    {"  "}$
                    {(SHIPPING_PRICE + subtotal) *
                      ((100 - appliedDiscount) / 100)}
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
      </main>
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
