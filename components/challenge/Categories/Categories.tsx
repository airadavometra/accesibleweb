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
          <div className={s.item} key={category.title}>
            <div className={s.imageContainer}>
              <Image
                className={s.image}
                src={category.imgSrc}
                alt={category.title}
                fill
              />
            </div>
            <Link className={s.link} href={category.path}>
              {category.title}
              <SendArrow className={s.arrow} />
            </Link>
          </div>
        ))}
      </WidthContainer>
    </section>
  );
};
