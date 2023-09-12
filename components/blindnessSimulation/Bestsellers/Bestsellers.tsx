import WidthContainer from "@/components/common/WidthContainer/WidthContainer";
import { Product as ProductType } from "@/types/simulation/product";
import s from "./Bestsellers.module.css";
import { ProductsGrid } from "../ProductsGrid/ProductsGrid";

type BestsellersProps = {
  products: ProductType[];
};

export const Bestsellers = ({ products }: BestsellersProps) => {
  return (
    <div className={s.bestsellers}>
      <WidthContainer className={s.widthContainer}>
        <div className={s.title}>Meet our bestsellers</div>
        <ProductsGrid products={products} />
      </WidthContainer>
    </div>
  );
};
