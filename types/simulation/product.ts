import { Category } from "./category";

export type Product = {
  id: number;
  imgSrc: string;
  name: string;
  accessibleName: string;
  price: number;
  unit: string;
  category: Category;
  description: string;
  accessibleDescription: string;
  availableQuantity: number;
};
