import { Simulation } from "@/types/simulation/simulation";

export const data: Simulation = {
  path: "blindness",
  title: "Blindness challenge",
  problem: [
    "According to the World Health Organization, an estimated 39 million people are affected by blindness. Navigating the web via screen readers is a challenge for these individuals. And screen readers aren't exclusively used by the visually impaired; they also assist those wanting to alleviate eye strain or preferring auditory information.",
    "Many websites are not designed with these users in mind. Important information may only be conveyed visually, interactive elements might not be properly labeled for screen readers, and complex navigation systems can create confusion and difficulty in accessing content.",
  ],
  challengeSteps: [
    "You have a family of 4 people",
    "You have $16 budget limit",
    "Buy 2 kg of pomegranates",
    "Buy an aubergine",
    "Buy a green paprika",
    "Buy a combo for mushroom soup",
    "Use a discount code to save some money (optional)",
  ],
  productIds: [
    5, 6, 9, 10, 16, 17, 18, 19, 24, 25, 26, 40, 41, 42, 43, 44, 51, 52, 59, 60,
  ],
  dayOfferId: 40,
  bestsellerIds: [6, 10, 33, 52],
  deliveryPrice: 0.79,
  promocode: "BRIGHTSIGHT15",
  discount: 15,
  budgetLimit: 16,
  cart: [
    { productId: 6, quantity: 1, displayName: "pomegranates" },
    { productId: 24, quantity: 2, displayName: "aubergine" },
    { productId: 42, quantity: 1, displayName: "yellow paprika" },
    { productId: 60, quantity: 1, displayName: "mushroom soup for 4 person" },
  ],
};
