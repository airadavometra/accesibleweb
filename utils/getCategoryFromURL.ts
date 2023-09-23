import { Category } from "@/types/simulation/category";

export const getCategoryValue = (
  category?: string | string[]
): Category | undefined => {
  if (category && typeof category === "string") {
    switch (category) {
      case "fruits":
        return "fruits";
      case "vegetables":
        return "vegetables";
      case "combo":
        return "combo";
      default:
        return undefined;
    }
  }
  return undefined;
};
