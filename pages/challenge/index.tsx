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
import { Quote } from "@/components/challenge/Quote/Quote";
import { DayOffer } from "@/components/challenge/DayOffer/DayOffer";

const products: Product[] = [
  {
    id: 1,
    imgSrc: "/test2.png",
    name: "Genius",
    price: "$4.25 per 1 kilo",
  },
  {
    id: 1,
    imgSrc: "/test2.png",
    name: "Genius",
    price: "$4.25 per 1 kilo",
  },
  {
    id: 1,
    imgSrc: "/test2.png",
    name: "Genius",
    price: "$4.25 per 1 kilo",
  },
  {
    id: 1,
    imgSrc: "/test2.png",
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
        imgSrc="/test.png"
        text="Fruits and veggies that taste as good as they make you feel."
      />
      <Categories categories={categories} />
      <Quote
        imgSrc="/test2.png"
        text="These fruits and veggies kickstart my day and energise my life with unbeatable freshness and flavour!"
        author="Jane S."
      />
      <DayOffer product={products[0]} />
    </main>
  );
};

export default ChallengeHome;
