import { Bestsellers } from "@/components/myopiaSimulation/Bestsellers/Bestsellers";
import { Hero } from "@/components/myopiaSimulation/Hero/Hero";
import { useSimulationStore } from "@/state/useSimulation";
import { useEffect } from "react";
import s from "@/styles/simulation/Home.module.css";
import { Banner } from "@/components/myopiaSimulation/Banner/Banner";
import { Categories } from "@/components/myopiaSimulation/Categories/Categories";
import { Category } from "@/types/category";
import { Quote } from "@/components/myopiaSimulation/Quote/Quote";
import { DayOffer } from "@/components/myopiaSimulation/DayOffer/DayOffer";
import { products } from "@/data/products";
import { Product } from "@/types/simulation/product";
import { data } from "@/data/myopia";

export const categories: Category[] = [
  {
    imgSrc: "/fruits.png",
    title: "Fruits",
    path: "/myopia/category?category=fruits",
  },
  {
    imgSrc: "/vegetables.png",
    title: "Vegetables",
    path: "/myopia/category?category=vegetables",
  },
  {
    imgSrc: "/combos.png",
    title: "Combo",
    path: "/myopia/category?category=combo",
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
