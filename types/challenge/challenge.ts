export type Challenge = {
  title: string;
  problem: string[];
  challengeSteps: string[];
  disclaimer?: string;
  productIds: number[];
  dayOfferId: number;
  bestsellerIds: number[];
  deliveryPrice: number;
  promocode: string;
  discount: number;
  budgetLimit: number;
  cart: Array<{ productId: number; quantity: number }>;
};
