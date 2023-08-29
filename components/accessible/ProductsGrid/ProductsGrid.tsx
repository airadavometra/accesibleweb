import { Product as ProductType } from "@/types/simulation/product";
import { ProductLink } from "../ProductLink/ProductLink";
import s from "./ProductsGrid.module.css";

type ProductsGridProps = {
  products: ProductType[];
  path: string;
};

export const ProductsGrid = ({ products, path }: ProductsGridProps) => {
  return (
    <div className={s.grid}>
      {products.map((product, index) => (
        <ProductLink
          key={`${product.accessibleName}-${index}`}
          product={product}
          path={path}
        />
      ))}
    </div>
  );
};
