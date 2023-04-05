import { Bestsellers } from "@/components/challenge/Bestsellers/Bestsellers";
import { Hero } from "@/components/challenge/Hero/Hero";
import { useChallengeStore } from "@/state/useChallenge";
import { useRouter } from "next/router";
import { useEffect } from "react";
import s from "@/styles/ChallengeLanding.module.css";
import { Banner } from "@/components/challenge/Banner/Banner";
import { Categories } from "@/components/challenge/Categories/Categories";
import { Product } from "@/types/product";
import { Category } from "@/types/category";

const products: Product[] = [
  {
    imgSrc: "/test.webp",
    name: "Genius",
    price: "$4.25 per 1 kilo",
  },
  {
    imgSrc: "/test.webp",
    name: "Genius",
    price: "$4.25 per 1 kilo",
  },
  {
    imgSrc: "/test.webp",
    name: "Genius",
    price: "$4.25 per 1 kilo",
  },
  {
    imgSrc: "/test.webp",
    name: "Genius",
    price: "$4.25 per 1 kilo",
  },
];

export const categories: Category[] = [
  {
    imgSrc: "/test2.png",
    title: "Fruits",
    path: "/challenge/category/fruits",
  },
  {
    imgSrc: "/test2.png",
    title: "Vegetables",
    path: "/challenge/category/vegetables",
  },
  {
    imgSrc: "/test2.png",
    title: "Combo",
    path: "/challenge/category/combo",
  },
];

const ChallengeHome = () => {
  const router = useRouter();
  const filter = useChallengeStore((state) => state.filter);

  useEffect(() => {
    if (filter === undefined) {
      router.push("/#try");
    }
  }, [filter, router]);

  return (
    <main className={s.main}>
      <Hero />
      <Bestsellers products={products} />
      <Banner
        imgSrc={"/test.png"}
        text={"Drinks that taste as good as they make you feel."}
      />
      <Categories categories={categories} />
    </main>
  );
};

export default ChallengeHome;
