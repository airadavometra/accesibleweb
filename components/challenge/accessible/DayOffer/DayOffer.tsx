import WidthContainer from "@/components/WidthContainer/WidthContainer";
import { SendArrow } from "@/icons/SendArrow";
import { Product } from "@/types/challenge/product";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../Button/Button";
import s from "./DayOffer.module.css";
import { useChallengeStore } from "@/state/useChallenge";
import { useRouter } from "next/router";
import { showAddToCartNotification } from "@/utils/showAddToCartNotification";

type DayOfferProps = {
  product: Product;
};

export const DayOffer = ({ product }: DayOfferProps) => {
  const router = useRouter();
  const { addProduct, setCheckoutCart } = useChallengeStore((state) => ({
    addProduct: state.addProduct,
    setCheckoutCart: state.setCheckoutCart,
  }));

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
            <span className={s.price}>
              ${product.price} / {product.unit}
            </span>
            <Button
              text="Add to cart"
              onClick={() => {
                addProduct(product, 1);
                showAddToCartNotification(product.name, 1);
              }}
              type="secondary"
            />
            <Button
              text="Buy it now"
              onClick={() => {
                setCheckoutCart([{ ...product, quantity: 1 }]);
                router.push("/challenge/accessible/checkout");
              }}
              type="primary"
            />
            <Link
              className={s.link}
              href={`/challenge/accessible/product?product=${product.id}`}
            >
              <span>View full details</span>
              <SendArrow className={s.arrow} />
            </Link>
          </div>
        </div>
      </WidthContainer>
    </section>
  );
};
