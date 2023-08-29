import { Simulation } from "@/types/simulation/simulation";

export const data: Simulation = {
  path: "tremor",
  title: "Dyslexia challenge",
  problem: [
    "Dyslexia, potentially affecting between 5% to 17% of the population, create difficulties with reading and understanding online content. It's crucial to remember that not just dyslexia, but factors like language proficiency, education, or even tiredness and distractions can make it complicated.",
    "It's a concerning reality that individuals with dyslexia or comparable reading challenges are often overlooked in website design. Features such as dense blocks of text, complex fonts, low contrast between text and background, and a lack of diverse content forms can create significant accessibility barriers on many websites.",
  ],
  challengeSteps: [
    "You have a family of 2 people",
    "You have $15 budget limit",
    "Buy 2 kg of juicy oranges",
    "Buy 1 kg of Red Delicious apples",
    "Buy 1 kg of local tomatoes",
    "Buy a combo for vegetarian borsch",
    "Use a discount code to save some money (optional)",
  ],
  productIds: [
    1, 2, 3, 4, 5, 6, 7, 8, 13, 14, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
    30, 31, 32, 33, 34, 35, 45, 46, 47, 48, 53, 54, 57, 58,
  ],
  dayOfferId: 17,
  bestsellerIds: [6, 14, 28, 31],
  deliveryPrice: 1.19,
  promocode: "READABLE20",
  discount: 20,
  budgetLimit: 15,
  cart: [
    { productId: 3, quantity: 2, displayName: "juicy oranges" },
    { productId: 22, quantity: 1, displayName: "Red Delicious apples" },
    { productId: 48, quantity: 1, displayName: "local tomatoes" },
    {
      productId: 53,
      quantity: 1,
      displayName: "vegetarian borsch for 2 person",
    },
  ],
};
