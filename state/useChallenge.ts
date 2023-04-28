import { Product } from "@/types/challenge/product";
import { Filter } from "@/types/filter";
import { create } from "zustand";

export type CartProduct = Product & { quantity: number };

type ChallengeStore = {
  filter?: Filter;
  setFilter: (filter?: Filter) => void;
  startTime?: Date;
  setStartTime: (startTime?: Date) => void;
  finishTime?: Date;
  setFinishTime: (startTime?: Date) => void;
  isSuccessful: boolean;
  setIsSuccessfulTrue: () => void;
  cart: CartProduct[];
  addProduct: (product: Product, quantity: number) => void;
  removeProduct: (productId: number) => void;
  updateProductQuantity: (productId: number, quantity: number) => void;
  checkoutCart: CartProduct[];
  setCheckoutCart: (checkoutCart: CartProduct[]) => void;
};

export const useChallengeStore = create<ChallengeStore>()((set) => ({
  filter: undefined,
  setFilter: (filter) => set(() => ({ filter: filter })),
  startTime: undefined,
  setStartTime: (startTime) => set(() => ({ startTime: startTime })),
  finishTime: undefined,
  setFinishTime: (startTime) => set(() => ({ startTime: startTime })),
  isSuccessful: false,
  setIsSuccessfulTrue: () => set({ isSuccessful: true }),
  cart: [],
  addProduct: (product, quantity) =>
    set((state) => {
      if (quantity === 0) {
        return {
          cart: state.cart,
        };
      }
      const productIndex = state.cart.findIndex(
        (item) => item.id === product.id
      );

      if (productIndex !== -1) {
        const newCart = state.cart.slice();
        newCart[productIndex].quantity += quantity;

        return {
          cart: newCart,
        };
      }

      return {
        cart: [...state.cart, { quantity: quantity, ...product }],
      };
    }),
  removeProduct: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    })),
  updateProductQuantity: (productId, quantity) =>
    set((state) => {
      let productIndex = state.cart.findIndex((item) => item.id === productId);

      if (productIndex !== -1) {
        const newCart = state.cart.slice();
        newCart[productIndex].quantity = quantity;

        return {
          cart: newCart,
        };
      }
      return { cart: state.cart };
    }),
  checkoutCart: [],
  setCheckoutCart: (checkoutCart) =>
    set(() => ({ checkoutCart: checkoutCart })),
}));
