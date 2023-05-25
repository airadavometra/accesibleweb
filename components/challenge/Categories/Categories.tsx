import WidthContainer from "@/components/WidthContainer/WidthContainer";
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
          <div key={category.title} className={s.item}>
            <div className={s.imageContainer}>
              <Image className={s.image} src={category.imgSrc} alt="" fill />
            </div>
            <div className={s.link}>
              <div role="link" onClick={() => onCategoryClick(category.path)}>
                {category.title}
              </div>
              <SendArrow className={s.arrow} />
            </div>
          </div>
        ))}
      </WidthContainer>
    </div>
  );
};
