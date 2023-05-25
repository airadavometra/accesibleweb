import { challengeMap } from "@/data/challenge/challenge";
import { CartProduct } from "@/state/useChallenge";
import { Filter } from "@/types/filter";

const isInputEmpty = (value: string | undefined) =>
  value === undefined || value === "";

export const validateResult = (
  filter: Filter | undefined,
  name: string | undefined,
  email: string | undefined,
  address: string | undefined,
  country: string | undefined,
  city: string | undefined,
  cart: CartProduct[],
  isDiscountApplied: boolean
): Array<{ message: string; items: string[] }> => {
  const data = filter ? challengeMap[filter] : undefined;

  const errors: Array<{ message: string; items: string[] }> = [];

  if (data) {
    const subtotal = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const total = isDiscountApplied
      ? data.deliveryPrice + subtotal * ((100 - data.discount) / 100)
      : data.deliveryPrice + subtotal;

    if (total > data.budgetLimit) {
      errors.push({
        message: `Your budget limit was $${
          data.budgetLimit
        }, but you spent $${Number(total).toFixed(2)}`,
        items: [],
      });
    }

    const missingProducts: string[] = [];

    data.cart.forEach((item) => {
      if (
        cart.find(
          (c) => c.id === item.productId && c.quantity === item.quantity
        ) === undefined
      ) {
        missingProducts.push(item.displayName);
      }
    });

    if (missingProducts.length > 0) {
      errors.push({
        message: "Some required products are missing: ",
        items: missingProducts,
      });
    }
  }

  const missingInputs = validateInputs(name, email, address, country, city);

  if (missingInputs.length > 0) {
    errors.push({
      message: "Some delivery information is missing: ",
      items: missingInputs,
    });
  }

  return errors;
};

const validateInputs = (
  name: string | undefined,
  email: string | undefined,
  address: string | undefined,
  country: string | undefined,
  city: string | undefined
): string[] => {
  const missingData: string[] = [];

  if (isInputEmpty(name)) {
    missingData.push("name");
  }
  if (isInputEmpty(email)) {
    missingData.push("email");
  }
  if (isInputEmpty(address)) {
    missingData.push("address");
  }
  if (isInputEmpty(country)) {
    missingData.push("country");
  }
  if (isInputEmpty(city)) {
    missingData.push("city");
  }
  return missingData;
};
