import { Product as ProductType } from "@/types/simulation/product";
import Image from "next/image";
import Link from "next/link";
import s from "./ProductLink.module.css";

type ProductLinkProps = {
  product: ProductType;
};

export const ProductLink = ({ product }: ProductLinkProps) => {
  return (
    <div className={s.container}>
      <div className={s.imageContainer}>
        <Image
          aria-hidden
          className={s.image}
          fill
          src={product.imgSrc}
          alt={product.name}
        />
      </div>
      <Link href={`/tremor/product?product=${product.id}`} className={s.name}>
        {product.name}
      </Link>
      <span className={s.price}>
        ${product.price} / {product.unit}
      </span>
    </div>
  );
};
