import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import s from "@/styles/simulation/Product.module.css";
import { Bestsellers } from "@/components/dyslexiaSimulation/Bestsellers/Bestsellers";
import { products } from "@/data/products";
import { ProductInfo } from "@/components/dyslexiaSimulation/ProductInfo/ProductInfo";
import { Product } from "@/types/simulation/product";
import { data } from "@/data/dyslexia";

const getProductIdValue = (
  productId?: string | string[]
): number | undefined => {
  if (productId && typeof productId === "string") {
    const productIdNumber = Number.parseInt(productId);
    return Number.isNaN(productIdNumber) ? undefined : productIdNumber;
  }
  return undefined;
};

const bestsetters: Product[] = products.filter((p) =>
  data.bestsellerIds.includes(p.id)
);

const ProductPage: NextPage = () => {
  const router = useRouter();

  const { product: productUrl } = router.query;
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    if (router.isReady) {
      const productId = getProductIdValue(productUrl);

      if (productId === undefined) {
        router.push("/404");
        return;
      }

      const foundProduct = products.find((item) => item.id === productId);

      setProduct(foundProduct);
    }
  }, [productUrl, router]);

  return (
    <main className={s.main}>
      {product ? <ProductInfo product={product} /> : "oops"}
      <Bestsellers products={bestsetters} />
    </main>
  );
};

export default ProductPage;
