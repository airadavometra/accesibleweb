import { Product } from "@/types/challenge/product";
import { Filter } from "@/types/filter";
import { create } from "zustand";

type CartProduct = Product & { quantity: number };

type ChallengeStore = {
  filter?: Filter;
  setFilter: (filter?: Filter) => void;
  startTime?: Date;
  setStartTime: (startTime?: Date) => void;
  cart: CartProduct[];
  addProduct: (product: Product, quantity: number) => void;
  removeProduct: (productId: number) => void;
  updateProductQuantity: (productId: number, quantity: number) => void;
};

export const useChallengeStore = create<ChallengeStore>()((set) => ({
  filter: undefined,
  setFilter: (filter) => set(() => ({ filter: filter })),
  startTime: undefined,
  setStartTime: (startTime) => set(() => ({ startTime: startTime })),
  cart: [],
  addProduct: (product, quantity) =>
    set((state) => ({
      cart: [...state.cart, { quantity: quantity, ...product }],
    })),
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
}));
