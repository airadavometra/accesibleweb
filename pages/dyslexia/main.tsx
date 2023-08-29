import { Bestsellers } from "@/components/dyslexiaSimulation/Bestsellers/Bestsellers";
import { Hero } from "@/components/dyslexiaSimulation/Hero/Hero";
import { useSimulationStore } from "@/state/useSimulation";
import { useEffect } from "react";
import s from "@/styles/simulation/Home.module.css";
import { Banner } from "@/components/dyslexiaSimulation/Banner/Banner";
import { Categories } from "@/components/dyslexiaSimulation/Categories/Categories";
import { Category } from "@/types/category";
import { Quote } from "@/components/dyslexiaSimulation/Quote/Quote";
import { DayOffer } from "@/components/dyslexiaSimulation/DayOffer/DayOffer";
import { products } from "@/data/products";
import { Product } from "@/types/simulation/product";
import { data } from "@/data/dyslexia";

export const categories: Category[] = [
  {
    imgSrc: "/fruits.png",
    title: "Fruits",
    path: "/dyslexia/category?category=fruits",
  },
  {
    imgSrc: "/vegetables.png",
    title: "Vegetables",
    path: "/dyslexia/category?category=vegetables",
  },
  {
    imgSrc: "/combos.png",
    title: "Combo",
    path: "/dyslexia/category?category=combo",
  },
];

const bestsetters: Product[] = products.filter((p) =>
  data.bestsellerIds.includes(p.id)
);

const dayOffer: Product | undefined = products.find(
  (p) => data.dayOfferId === p.id
);

const MainPage = () => {
  const { setChallengeErrors } = useSimulationStore((state) => ({
    setChallengeErrors: state.setChallengeErrors,
  }));

  useEffect(() => setChallengeErrors([]), [setChallengeErrors]);

  return (
    <main className={s.main}>
      <Hero />
      <Bestsellers products={bestsetters} />
      <Banner
        imgSrc="/salad.png"
        text="Fruits and veggies that taste as good as they make you feel."
      />
      <Categories categories={categories} />
      <Quote
        imgSrc="/quote.png"
        text="These fruits and veggies kickstart my day and energise my life with unbeatable freshness and flavour!"
        author="Jane S."
      />
      <Banner
        imgSrc="/apple.png"
        text={`${data.discount}% off with ${data.promocode}. Enjoy delicious groceries at discounted prices. Shop now!`}
      />
      {dayOffer && <DayOffer product={dayOffer} />}
    </main>
  );
};

export default MainPage;
