import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import s from "@/styles/challenge/Product.module.css";
import { Bestsellers } from "@/components/challenge/Bestsellers/Bestsellers";
import { products } from "@/data/challenge/products";
import { ProductInfo } from "@/components/challenge/ProductInfo/ProductInfo";
import { Product } from "@/types/challenge/product";
import { challengeMap } from "@/data/challenge/challenge";
import { useChallengeStore } from "@/state/useChallenge";

const getProductIdValue = (
  productId?: string | string[]
): number | undefined => {
  if (productId && typeof productId === "string") {
    const productIdNumber = Number.parseInt(productId);
    return Number.isNaN(productIdNumber) ? undefined : productIdNumber;
  }
  return undefined;
};

const ProductPage: NextPage = () => {
  const router = useRouter();
  const filter = useChallengeStore((state) => state.filter);

  const { product: productUrl } = router.query;
  const [product, setProduct] = useState<Product>();
  const [bestsetters, setBestsellers] = useState<Product[]>([]);

  useEffect(() => {
    if (filter === undefined) {
      router.push("/");
    }
  }, [filter, router]);

  useEffect(() => {
    if (router.isReady) {
      const productId = getProductIdValue(productUrl);

      if (productId === undefined) {
        router.push("/404");
        return;
      }

      const foundProduct = products.find((item) => item.id === productId);

      setProduct(foundProduct);

      const data = filter ? challengeMap[filter] : undefined;
      if (data) {
        setBestsellers(
          products.filter((p) => data?.bestsellerIds.includes(p.id))
        );
      }
    }
  }, [filter, productUrl, router]);

  return (
    <main className={s.main}>
      {product ? <ProductInfo product={product} /> : "oops"}
      <Bestsellers products={bestsetters} />
    </main>
  );
};

export default ProductPage;
