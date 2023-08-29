import { Simulation } from "@/types/simulation/simulation";

export const data: Simulation = {
  path: "myopia",
  title: "Blurred vision challenge",
  problem: [
    "According to the World Health Organization, at least 2.2 billion people have some vision impairment and this number is continually growing. People may also experience temporary blurred vision because of fatigue, certain medications, migraines, diabetes and many other reasons.",
    "Unfortunately, many websites lack essential accessibility accommodations like adjustable font sizes, high-contrast color schemes, and alternative text descriptions for images. These missing features create a frustrating and often inaccessible browsing experience.",
  ],
  challengeSteps: [
    "You have a family of 3 people",
    "You have $19 budget limit",
    "Buy 2 kg of Cara Cara oranges",
    "Buy 1 kg of bananas",
    "Buy 1 kg of sweet potatoes",
    "Buy a combo for tomato soup",
    "Use a discount code to save some money (optional)",
  ],
  productIds: [
    1, 2, 3, 4, 5, 6, 7, 8, 24, 25, 26, 27, 28, 29, 30, 31, 32, 51, 52, 53, 54,
  ],
  dayOfferId: 27,
  bestsellerIds: [1, 5, 24, 28],
  deliveryPrice: 1.09,
  promocode: "BLURRY20",
  discount: 20,
  budgetLimit: 19,
  cart: [
    { productId: 4, quantity: 2, displayName: "Cara Cara oranges" },
    { productId: 5, quantity: 1, displayName: "bananas" },
    { productId: 25, quantity: 1, displayName: "sweet potatoes" },
    {
      productId: 52,
      quantity: 1,
      displayName: "tomato soup for 4 person",
    },
  ],
};
