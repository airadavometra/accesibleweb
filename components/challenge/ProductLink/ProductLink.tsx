import { Product as ProductType } from "@/types/challenge/product";
import Image from "next/image";
import Link from "next/link";
import s from "./ProductLink.module.css";

type ProductLinkProps = {
  product: ProductType;
};

export const ProductLink = ({ product }: ProductLinkProps) => {
  return (
    <Link
      href={`/challenge/product?product=${product.id}`}
      className={s.container}
    >
      <div className={s.imageContainer}>
        <Image
          className={s.image}
          fill
          src={product.imgSrc}
          alt={product.name}
        />
      </div>
      <span className={s.name}>{product.name}</span>
      <span className={s.price}>${product.price}</span>
    </Link>
  );
};
