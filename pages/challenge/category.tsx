import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import s from "@/styles/challenge/Category.module.css";
import { Category } from "@/types/challenge/category";
import { products } from "@/data/challenge/products";
import { Product } from "@/types/challenge/product";
import WidthContainer from "@/components/WidthContainer/WidthContainer";
import { ProductsGrid } from "@/components/challenge/ProductsGrid/ProductsGrid";

const getCategoryValue = (
  category?: string | string[]
): Category | undefined => {
  if (category && typeof category === "string") {
    switch (category) {
      case "fruits":
        return "fruits";
      case "vegetables":
        return "vegetables";
      case "combo":
        return "combo";
      default:
        return undefined;
    }
  }
  return undefined;
};

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
        (item) => item.category === categoryValue
      );

      setCategory(categoryValue);
      setCategoryProducts(filteredProducts);
    }
  }, [categoryUrl, router]);

  return (
    <main className={s.main}>
      <WidthContainer className={s.widthContainer}>
        <h1 className={s.title}>{category}</h1>
        <div className={s.categoryInfoContainer}>
          <span>Organic, non-GMO, local.</span>
          <span>{categoryProducts.length} products</span>
        </div>
        <ProductsGrid products={categoryProducts} />
      </WidthContainer>
    </main>
  );
};

export default CategoryPage;