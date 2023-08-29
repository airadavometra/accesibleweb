import { Bestsellers } from "@/components/accessible/Bestsellers/Bestsellers";
import { Hero } from "@/components/accessible/Hero/Hero";
import { useSimulationStore } from "@/state/useSimulation";
import { useEffect } from "react";
import s from "@/styles/simulation/accessible/Home.module.css";
import { Banner } from "@/components/accessible/Banner/Banner";
import { Categories } from "@/components/accessible/Categories/Categories";
import { Category } from "@/types/category";
import { Quote } from "@/components/accessible/Quote/Quote";
import { DayOffer } from "@/components/accessible/DayOffer/DayOffer";
import { Product } from "@/types/simulation/product";
import { data } from "@/data/colorBlindness";
import { products } from "@/data/products";
export const categories: Category[] = [
  {
    imgSrc: "/fruits.png",
    title: "Fruits",
    path: "/color-blindness/accessible/category?category=fruits",
  },
  {
    imgSrc: "/vegetables.png",
    title: "Vegetables",
    path: "/color-blindness/accessible/category?category=vegetables",
  },
  {
    imgSrc: "/combos.png",
    title: "Combo",
    path: "/color-blindness/accessible/category?category=combo",
  },
];

const bestsetters: Product[] = products.filter((p) =>
  data.bestsellerIds.includes(p.id)
);

const dayOffer: Product | undefined = products.find(
  (p) => data.dayOfferId === p.id
);

const ChallengeHome = () => {
  const { setChallengeErrors } = useSimulationStore((state) => ({
    setChallengeErrors: state.setChallengeErrors,
  }));

  useEffect(() => setChallengeErrors([]), [setChallengeErrors]);

  return (
    <main className={s.main}>
      <Hero path="color-blindness" />
      <Bestsellers products={bestsetters} path="color-blindness" />
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
      {dayOffer && <DayOffer product={dayOffer} path="color-blindness" />}
    </main>
  );
};

export default ChallengeHome;
