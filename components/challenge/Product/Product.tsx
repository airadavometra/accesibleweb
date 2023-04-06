import { Product as ProductType } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import s from "./Product.module.css";

type ProductProps = {
  product: ProductType;
};

export const Product = ({ product }: ProductProps) => {
  return (
    <Link href={`/challenge/product/${product.id}`} className={s.container}>
      <div className={s.imageContainer}>
        <Image
          className={s.image}
          fill
          src={product.imgSrc}
          alt={product.name}
        />
      </div>
      <span className={s.name}>{product.name}</span>
      <span className={s.price}>{product.price}</span>
    </Link>
  );
};
