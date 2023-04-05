import WidthContainer from "@/components/WidthContainer/WidthContainer";
import { Product } from "../Product/Product";
import s from "./Bestsellers.module.css";

const products = [
  {
    imgScr: "/test.webp",
    name: "Genius",
    price: "$4.25 per 1 kilo",
  },
  {
    imgScr: "/test.webp",
    name: "Genius",
    price: "$4.25 per 1 kilo",
  },
  {
    imgScr: "/test.webp",
    name: "Genius",
    price: "$4.25 per 1 kilo",
  },
  {
    imgScr: "/test.webp",
    name: "Genius",
    price: "$4.25 per 1 kilo",
  },
];

export const Bestsellers = () => {
  return (
    <section className={s.bestsellers}>
      <WidthContainer className={s.widthContainer}>
        <h2 className={s.title}>Meet our bestsellers</h2>
        <div className={s.grid}>
          {products.map((product) => (
            <Product
              key={product.name}
              imgSrc={product.imgScr}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </WidthContainer>
    </section>
  );
};
