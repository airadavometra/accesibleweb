import WidthContainer from "@/components/common/WidthContainer/WidthContainer";
import { SendArrow } from "@/icons/SendArrow";
import { Product } from "@/types/simulation/product";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../Button/Button";
import s from "./DayOffer.module.css";
import { useSimulationStore } from "@/state/useSimulation";
import { useRouter } from "next/router";
import { showAccessibleAddToCartNotification } from "@/utils/showAddToCartNotification";

type DayOfferProps = {
  product: Product;
};

export const DayOffer = ({ product }: DayOfferProps) => {
  const router = useRouter();
  const { addProduct, setCheckoutCart } = useSimulationStore((state) => ({
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
                showAccessibleAddToCartNotification(product.name, 1);
              }}
              type="secondary"
            />
            <Button
              text="Buy it now"
              onClick={() => {
                setCheckoutCart([{ ...product, quantity: 1 }]);
                router.push("/dyslexia/checkout");
              }}
              type="primary"
            />
            <Link
              className={s.link}
              href={`/dyslexia/product?product=${product.id}`}
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
