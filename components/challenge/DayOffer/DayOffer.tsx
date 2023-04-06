import WidthContainer from "@/components/WidthContainer/WidthContainer";
import { SendArrow } from "@/icons/SendArrow";
import { Product } from "@/types/product";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../Button/Button";
import s from "./DayOffer.module.css";

type DayOfferProps = {
  product: Product;
};

export const DayOffer = ({ product }: DayOfferProps) => {
  return (
    <section className={s.main}>
      <WidthContainer className={s.widthContainer}>
        <h2 className={s.title}>Best deal today</h2>
        <div className={s.content}>
          <div className={classNames(s.section, s.imageContainer)}>
            <Image
              className={s.image}
              src={product.imgSrc}
              alt={product.name}
              fill
            />
          </div>
          <div className={classNames(s.section, s.descriptionSection)}>
            <h3 className={s.name}>{product.name}</h3>
            <span className={s.price}>{product.price}</span>
            <Button
              text="Add to cart"
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
              type="secondary"
            />
            <Button
              text="Buy it now"
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
              type="primary"
            />
            <Link className={s.link} href={`/challenge/product/${product.id}`}>
              <span>View full details</span>
              <SendArrow className={s.arrow} />
            </Link>
          </div>
        </div>
      </WidthContainer>
    </section>
  );
};
