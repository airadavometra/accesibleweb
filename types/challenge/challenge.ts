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
  budgetLimit: number;
  problemDescription: string;
  taskDescription: string;
  cart: Array<{ productId: number; quantity: number }>;
};
