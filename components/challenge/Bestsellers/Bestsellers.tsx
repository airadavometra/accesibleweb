import WidthContainer from "@/components/WidthContainer/WidthContainer";
import { Product as ProductType } from "@/types/product";
import { Product } from "../Product/Product";
import s from "./Bestsellers.module.css";

type BestsellersProps = {
  products: ProductType[];
};

export const Bestsellers = ({ products }: BestsellersProps) => {
  return (
    <section className={s.bestsellers}>
      <WidthContainer className={s.widthContainer}>
        <h2 className={s.title}>Meet our bestsellers</h2>
        <div className={s.grid}>
          {products.map((product) => (
            <Product key={product.name} product={product} />
          ))}
        </div>
      </WidthContainer>
    </section>
  );
};
