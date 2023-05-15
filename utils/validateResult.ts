import { challengeMap } from "@/data/challenge/challenge";
import { CartProduct } from "@/state/useChallenge";
import { Filter } from "@/types/filter";

export const validateResult = (
  filter: Filter,
  cart: CartProduct[],
  isDiscountApplied: boolean
): boolean => {
  const data = filter ? challengeMap[filter] : undefined;
  if (data) {
    const allItemsAreInCart = data.cart.every(
      (item) =>
        cart.find(
          (c) => c.id === item.productId && c.quantity === item.quantity
        ) !== undefined
    );

    const subtotal = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const limitIsEnough =
      (isDiscountApplied
        ? data.deliveryPrice + subtotal * ((100 - data.discount) / 100)
        : data.deliveryPrice + subtotal) <= data.budgetLimit;

    return allItemsAreInCart && limitIsEnough;
  }
  return false;
};
