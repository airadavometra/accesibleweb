import { Category } from "./category";

export type Product = {
  id: number;
  imgSrc: string;
  name: string;
  price: number;
  unit: string;
  category: Category;
  description: string;
  availableQuantity: number;
};
