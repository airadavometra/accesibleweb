import { challengeMap } from "@/data/challenge/challenge";
import { CartProduct } from "@/state/useChallenge";
import { Filter } from "@/types/filter";

const errorMessages = {
  "exceeded-limit": "You've gone over your set budget limit",
  "cart-not-full": "Not all the required items we added to your cart",
  "missing-inputs": "Some delivery information is missing",
};

const isInputEmpty = (value: string | undefined) =>
  value === undefined || value === "";

export const validateResult = (
  filter: Filter | undefined,
  firstName: string | undefined,
  lastName: string | undefined,
  email: string | undefined,
  address: string | undefined,
  country: string | undefined,
  city: string | undefined,
  region: string | undefined,
  zipCode: string | undefined,
  cart: CartProduct[],
  isDiscountApplied: boolean
): string[] => {
  const data = filter ? challengeMap[filter] : undefined;

  const errors: string[] = [];

  if (
    isInputEmpty(firstName) ||
    isInputEmpty(lastName) ||
    isInputEmpty(email) ||
    isInputEmpty(address) ||
    isInputEmpty(country) ||
    isInputEmpty(city) ||
    isInputEmpty(region) ||
    isInputEmpty(zipCode)
  ) {
    errors.push(errorMessages["missing-inputs"]);
  }

  if (data) {
    const allItemsAreInCart = data.cart.every(
      (item) =>
        cart.find(
          (c) => c.id === item.productId && c.quantity === item.quantity
        ) !== undefined
    );

    if (!allItemsAreInCart) {
      errors.push(errorMessages["cart-not-full"]);
    }

    const subtotal = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const limitIsEnough =
      (isDiscountApplied
        ? data.deliveryPrice + subtotal * ((100 - data.discount) / 100)
        : data.deliveryPrice + subtotal) <= data.budgetLimit;

    if (!limitIsEnough) {
      errors.push(errorMessages["exceeded-limit"]);
    }
  }
  return errors;
};
