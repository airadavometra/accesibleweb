import { Product as ProductType } from "@/types/simulation/product";
import Image from "next/image";
import s from "./ProductLink.module.css";
import { useRouter } from "next/router";

type ProductLinkProps = {
  product: ProductType;
};

export const ProductLink = ({ product }: ProductLinkProps) => {
  const router = useRouter();

  const onProductClick = () => {
    router.push(`/blindness/product?product=${product.id}`);
  };

  return (
    <div onClick={onProductClick} className={s.container}>
      <div className={s.imageContainer}>
        <Image
          aria-hidden
          className={s.image}
          fill
          src={product.imgSrc}
          alt=""
        />
      </div>
      <span className={s.name}>{product.name}</span>
      <span className={s.price}>
        ${product.price} / {product.unit}
      </span>
    </div>
  );
};
