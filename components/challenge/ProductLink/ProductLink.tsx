import { Product as ProductType } from "@/types/challenge/product";
import Image from "next/image";
import { useRouter } from "next/router";
import s from "./ProductLink.module.css";

type ProductLinkProps = {
  product: ProductType;
};

export const ProductLink = ({ product }: ProductLinkProps) => {
  const router = useRouter();

  const onProductClick = () => {
    router.push(`/challenge/product?product=${product.id}`);
  };

  return (
    <div className={s.container}>
      <div className={s.imageContainer}>
        <Image className={s.image} fill src={product.imgSrc} alt="" />
      </div>
      <div role="link" onClick={onProductClick} className={s.name}>
        {product.name}
      </div>
      <div className={s.price}>
        ${product.price} / {product.unit}
      </div>
    </div>
  );
};
