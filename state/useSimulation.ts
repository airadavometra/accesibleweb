import { Product } from "@/types/simulation/product";
import { create } from "zustand";

export type CartProduct = Product & { quantity: number };

type SimulationStore = {
  cart: CartProduct[];
  setCart: (Cart: CartProduct[]) => void;
  addProduct: (product: Product, quantity: number) => void;
  removeProduct: (productId: number) => void;
  updateProductQuantity: (productId: number, quantity: number) => void;
  isDiscountApplied: boolean;
  setIsDiscountApplied: (value: boolean) => void;
  checkoutCart: CartProduct[];
  setCheckoutCart: (checkoutCart: CartProduct[]) => void;
};

export const useSimulationStore = create<SimulationStore>()((set) => ({
  cart: [],
  setCart: (Cart) => set(() => ({ cart: Cart })),
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
  isDiscountApplied: false,
  setIsDiscountApplied: (value: boolean) =>
    set(() => ({ isDiscountApplied: value })),
  checkoutCart: [],
  setCheckoutCart: (checkoutCart) =>
    set(() => ({ checkoutCart: checkoutCart })),
}));
