import Image from "next/image";
import s from "./Product.module.css";

type ProductProps = {
  imgSrc: string;
  name: string;
  price: string;
};

export const Product = ({ imgSrc, name, price }: ProductProps) => {
  return (
    <div className={s.container}>
      <div className={s.imageContainer}>
        <Image className={s.image} fill src={imgSrc} alt={name} />
      </div>
      <span className={s.name}>{name}</span>
      <span className={s.price}>{price}</span>
    </div>
  );
};
