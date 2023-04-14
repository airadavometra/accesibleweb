import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import s from "@/styles/challenge/Category.module.css";
import { Category } from "@/types/challenge/category";
import { Bestsellers } from "@/components/challenge/Bestsellers/Bestsellers";
import { products } from "@/data/challenge/products";
import { ProductInfo } from "@/components/challenge/ProductInfo/ProductInfo";
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
  const [products, setProducts] = useState<Product[]>([]);

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
      setProducts(filteredProducts);
    }
  }, [categoryUrl, router, products]);

  return (
    <main className={s.main}>
      <WidthContainer>
        <ProductsGrid products={products} />
      </WidthContainer>
    </main>
  );
};

export default CategoryPage;
