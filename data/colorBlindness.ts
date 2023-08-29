import { Simulation } from "@/types/simulation/simulation";

export const data: Simulation = {
  path: "color-blindness",
  title: "Color blindness challenge",
  problem: [
    "Color blindness, affecting roughly 1 in 12 men and 1 in 200 women worldwide, casts unique challenges in online exploration. Even situational factors like screen glare, bright sunlight or a dim screen can momentarily disrupt color perception, leading to potential digital misunderstandings.",
    "Despite the prevalence of color blindness and situations impacting color perception, many websites are not designed to help these users. The reliance on color to convey information, poor color contrast, and lack of alternative cues can make a website difficult to use for these individuals.",
  ],
  challengeSteps: [
    "You live alone",
    "You have $19 budget limit",
    "Buy 2 kg of Opal apples",
    "Buy an orange paprika",
    "Buy 1 kg of pink tomatoes",
    "Buy a combo for vegetarian lasagna",
    "Use a discount code to save some money (optional)",
  ],
  productIds: [
    5, 9, 10, 11, 12, 20, 21, 22, 23, 33, 34, 41, 42, 43, 44, 45, 46, 47, 48,
    49, 50, 55, 56, 59, 60,
  ],
  dayOfferId: 19,
  bestsellerIds: [9, 10, 33, 35],
  deliveryPrice: 0.89,
  promocode: "COLORFREE10",
  discount: 10,
  budgetLimit: 19,
  cart: [
    { productId: 23, quantity: 2, displayName: "Opal apples" },
    { productId: 44, quantity: 1, displayName: "orange paprika" },
    { productId: 45, quantity: 1, displayName: "pink tomatoes" },
    {
      productId: 55,
      quantity: 1,
      displayName: "vegetarian lasagna for 2 person",
    },
  ],
};
