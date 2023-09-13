import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import s from "@/styles/simulation/blindness/Category.module.css";
import { Category } from "@/types/simulation/category";
import { products } from "@/data/products";
import { Product } from "@/types/simulation/product";
import WidthContainer from "@/components/common/WidthContainer/WidthContainer";
import { ProductsGrid } from "@/components/blindnessSimulation/ProductsGrid/ProductsGrid";
import { data } from "@/data/blindness";
import { getCategoryValue } from "@/utils/getCategoryFromURL";

const CategoryPage: NextPage = () => {
  const router = useRouter();

  const { category: categoryUrl } = router.query;

  const [category, setCategory] = useState<Category>();
  const [categoryProducts, setCategoryProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (router.isReady) {
      const categoryValue = getCategoryValue(categoryUrl);

      if (categoryValue === undefined) {
        router.push("/404");
        return;
      }

      const filteredProducts = products.filter(
        (item) =>
          item.category === categoryValue && data.productIds.includes(item.id)
      );

      setCategory(categoryValue);
      setCategoryProducts(filteredProducts);
    }
  }, [categoryUrl, router]);

  return (
    <div className={s.main}>
      <WidthContainer className={s.widthContainer}>
        <div className={s.title}>{category}</div>
        <div className={s.categoryInfoContainer}>
          <span>Organic, non-GMO, local.</span>
          <span>{categoryProducts.length} products</span>
        </div>
        <ProductsGrid products={categoryProducts} />
      </WidthContainer>
    </div>
  );
};

export default CategoryPage;
