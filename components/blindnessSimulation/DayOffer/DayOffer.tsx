import WidthContainer from "@/components/common/WidthContainer/WidthContainer";
import { SendArrow } from "@/icons/SendArrow";
import { Product } from "@/types/simulation/product";
import classNames from "classnames";
import Image from "next/image";
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

  const onViewDetailsClick = () => {
    router.push(`/blindness/product?product=${product.id}`);
  };

  const onAddToCartClick = () => {
    addProduct(product, 1);
    showAccessibleAddToCartNotification(product.name, 1);
  };

  const onBuyNowClick = () => {
    setCheckoutCart([{ ...product, quantity: 1 }]);
    router.push("/blindness/checkout");
  };

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
            <span className={s.price}>
              ${product.price} / {product.unit}
            </span>
            <Button
              text="Add to cart"
              onClick={onAddToCartClick}
              type="secondary"
            />
            <Button text="Buy it now" onClick={onBuyNowClick} type="primary" />
            <div className={s.link} onClick={onViewDetailsClick}>
              <span>View full details</span>
              <SendArrow className={s.arrow} />
            </div>
          </div>
        </div>
      </WidthContainer>
    </div>
  );
};
