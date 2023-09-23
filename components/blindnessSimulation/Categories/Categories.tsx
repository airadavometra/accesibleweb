import WidthContainer from "@/components/common/WidthContainer/WidthContainer";
import { SendArrow } from "@/icons/SendArrow";
import { Category } from "@/types/category";
import Image from "next/image";
import s from "./Categories.module.css";
import { useRouter } from "next/router";

type CategoriesProps = { categories: Category[] };

export const Categories = ({ categories }: CategoriesProps) => {
  const router = useRouter();

  const onCategoryClick = (path: string) => {
    router.push(path);
  };

  return (
    <div className={s.categories}>
      <WidthContainer className={s.widthContainer}>
        {categories.map((category) => (
          <div
            key={category.title}
            onClick={() => onCategoryClick(category.path)}
            className={s.item}
          >
            <div className={s.imageContainer}>
              <Image
                aria-hidden
                className={s.image}
                src={category.imgSrc}
                alt=""
                fill
              />
            </div>
            <div className={s.link}>
              <span>{category.title}</span>
              <SendArrow className={s.arrow} />
            </div>
          </div>
        ))}
      </WidthContainer>
    </div>
  );
};
