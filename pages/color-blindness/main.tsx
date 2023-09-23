import { Bestsellers } from "@/components/colorBlindnessSimulation/Bestsellers/Bestsellers";
import { Hero } from "@/components/colorBlindnessSimulation/Hero/Hero";
import s from "@/styles/simulation/color-blindness/Home.module.css";
import { Banner } from "@/components/colorBlindnessSimulation/Banner/Banner";
import { Categories } from "@/components/colorBlindnessSimulation/Categories/Categories";
import { Category } from "@/types/category";
import { Quote } from "@/components/colorBlindnessSimulation/Quote/Quote";
import { DayOffer } from "@/components/colorBlindnessSimulation/DayOffer/DayOffer";
import { products } from "@/data/products";
import { Product } from "@/types/simulation/product";
import { data } from "@/data/colorBlindness";

export const categories: Category[] = [
  {
    imgSrc: "/fruits.png",
    title: "Fruits",
    path: "/color-blindness/category?category=fruits",
  },
  {
    imgSrc: "/vegetables.png",
    title: "Vegetables",
    path: "/color-blindness/category?category=vegetables",
  },
  {
    imgSrc: "/combos.png",
    title: "Combo",
    path: "/color-blindness/category?category=combo",
  },
];

const bestsetters: Product[] = products.filter((p) =>
  data.bestsellerIds.includes(p.id)
);

const dayOffer: Product | undefined = products.find(
  (p) => data.dayOfferId === p.id
);

const MainPage = () => {
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
