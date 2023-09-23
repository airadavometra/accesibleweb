import { Bestsellers } from "@/components/accessible/Bestsellers/Bestsellers";
import { Hero } from "@/components/accessible/Hero/Hero";
import s from "@/styles/simulation/accessible/Home.module.css";
import { Banner } from "@/components/accessible/Banner/Banner";
import { Categories } from "@/components/accessible/Categories/Categories";
import { Category } from "@/types/category";
import { Quote } from "@/components/accessible/Quote/Quote";
import { DayOffer } from "@/components/accessible/DayOffer/DayOffer";
import { Product } from "@/types/simulation/product";
import { data } from "@/data/blindness";
import { products } from "@/data/products";
export const categories: Category[] = [
  {
    imgSrc: "/fruits.png",
    title: "Fruits",
    path: "/blindness/accessible/category?category=fruits",
  },
  {
    imgSrc: "/vegetables.png",
    title: "Vegetables",
    path: "/blindness/accessible/category?category=vegetables",
  },
  {
    imgSrc: "/combos.png",
    title: "Combo",
    path: "/blindness/accessible/category?category=combo",
  },
];

const bestsetters: Product[] = products.filter((p) =>
  data.bestsellerIds.includes(p.id)
);

const dayOffer: Product | undefined = products.find(
  (p) => data.dayOfferId === p.id
);

const ChallengeHome = () => {
  return (
    <main className={s.main}>
      <Hero path="blindness" />
      <Bestsellers products={bestsetters} path="blindness" />
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
      {dayOffer && <DayOffer product={dayOffer} path="blindness" />}
    </main>
  );
};

export default ChallengeHome;
