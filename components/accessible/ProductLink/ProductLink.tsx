import { Product as ProductType } from "@/types/simulation/product";
import Image from "next/image";
import Link from "next/link";
import s from "./ProductLink.module.css";

type ProductLinkProps = {
  product: ProductType;
  path: string;
};

export const ProductLink = ({ product, path }: ProductLinkProps) => {
  return (
    <Link
      href={`/${path}/accessible/product?product=${product.id}`}
      className={s.container}
    >
      <div className={s.imageContainer}>
        <Image
          aria-hidden
          className={s.image}
          fill
          src={product.imgSrc}
          alt={product.accessibleName}
        />
      </div>
      <span className={s.name}>{product.accessibleName}</span>
      <span className={s.price}>
        ${product.price} / {product.unit}
      </span>
    </Link>
  );
};
