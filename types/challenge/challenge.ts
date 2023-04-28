export type Challenge = {
  title: string;
  problem: string;
  challenge: string;
  productIds: number[];
  dayOfferId: number;
  bestsellerIds: number[];
  deliveryPrice: number;
  promocode: string;
  discount: number;
  problemDescription: string;
  taskDescription: string;
  cart: Array<{ productId: number; quantity: number }>;
};
