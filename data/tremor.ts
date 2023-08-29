import { Simulation } from "@/types/simulation/simulation";

export const data: Simulation = {
  path: "tremor",
  title: "Tremor challenge",
  problem: [
    "According to the International Essential Tremor Foundation, an estimated 7 to 10 million people in the United States alone are affected by tremor. Moreover, tremor isn't always a chronic condition. Many individuals may experience temporary tremor because of stress, anxiety, fatigue, certain medications, or just while riding on public transportation. This means that anyone can face this issue at some point.",
    "Unfortunately, many websites and applications are not designed with these issues in mind. Interactive elements might be too small to click on, the lack of space between elements can cause misclicking, and the lack of keyboard navigation options often leave users reliant on mouse movements.",
  ],
  challengeSteps: [
    "You live alone",
    "You have $16 budget limit",
    "Buy 1 kg of nectarines",
    "Buy a chinese cabbage",
    "Buy 2 kg of cucumbers",
    "Buy a combo for mustard soup",
    "Use a discount code to save some money (optional)",
  ],
  productIds: [
    9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 33, 34, 35, 36, 37, 38, 39, 40, 49,
    55, 56, 57, 58,
  ],
  dayOfferId: 37,
  bestsellerIds: [9, 14, 35, 49],
  deliveryPrice: 0.99,
  promocode: "STEADY10",
  discount: 10,
  budgetLimit: 16,
  cart: [
    { productId: 16, quantity: 1, displayName: "nectarines" },
    { productId: 33, quantity: 1, displayName: "chinese cabbage" },
    { productId: 40, quantity: 2, displayName: "cucumbers" },
    { productId: 57, quantity: 1, displayName: "mustard soup for 2 person" },
  ],
};
