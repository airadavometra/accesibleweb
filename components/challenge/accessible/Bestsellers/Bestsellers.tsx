import WidthContainer from "@/components/WidthContainer/WidthContainer";
import { Product as ProductType } from "@/types/challenge/product";
import { ProductLink } from "../ProductLink/ProductLink";
import s from "./Bestsellers.module.css";
import { ProductsGrid } from "../ProductsGrid/ProductsGrid";

type BestsellersProps = {
  products: ProductType[];
};

export const Bestsellers = ({ products }: BestsellersProps) => {
  return (
    <section className={s.bestsellers}>
      <WidthContainer className={s.widthContainer}>
        <h2 className={s.title}>Meet our bestsellers</h2>
        <ProductsGrid products={products} />
      </WidthContainer>
    </section>
  );
};
