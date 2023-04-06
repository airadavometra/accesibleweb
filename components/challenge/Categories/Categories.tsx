import WidthContainer from "@/components/WidthContainer/WidthContainer";
import { SendArrow } from "@/icons/SendArrow";
import { Category } from "@/types/category";
import Image from "next/image";
import Link from "next/link";
import s from "./Categories.module.css";

type CategoriesProps = { categories: Category[] };

export const Categories = ({ categories }: CategoriesProps) => {
  return (
    <section className={s.categories}>
      <WidthContainer className={s.widthContainer}>
        {categories.map((category) => (
          <Link key={category.title} href={category.path} className={s.item}>
            <div className={s.imageContainer}>
              <Image
                className={s.image}
                src={category.imgSrc}
                alt={category.title}
                fill
              />
            </div>
            <div className={s.link}>
              <span>{category.title}</span>
              <SendArrow className={s.arrow} />
            </div>
          </Link>
        ))}
      </WidthContainer>
    </section>
  );
};
