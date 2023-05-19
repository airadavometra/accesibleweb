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
    <div className={s.main}>
      <WidthContainer className={s.widthContainer}>
        <div className={s.title}>Best deal today</div>
        <div className={s.content}>
          <div className={classNames(s.section, s.imageContainer)}>
            <Image className={s.image} src={product.imgSrc} alt="" fill />
          </div>
          <div className={classNames(s.section, s.descriptionSection)}>
            <div className={s.name}>{product.name}</div>
            <div className={s.price}>
              ${product.price} / {product.unit}
            </div>
            <Button
              text="Add to cart"
              onClick={() => {
                addProduct(product, 1);
                router.push("/challenge/cart");
              }}
              type="secondary"
            />
            <Button
              text="Buy it now"
              onClick={() => {
                setCheckoutCart([{ ...product, quantity: 1 }]);
                router.push("/challenge/checkout");
              }}
              type="primary"
            />
            <Link
              className={s.link}
              href={`/challenge/product?product=${product.id}`}
            >
              <div>View full details</div>
              <SendArrow className={s.arrow} />
            </Link>
          </div>
        </div>
      </WidthContainer>
    </div>
  );
};
