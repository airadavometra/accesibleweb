import { Bestsellers } from "@/components/challenge/Bestsellers/Bestsellers";
import { Hero } from "@/components/challenge/Hero/Hero";
import { useChallengeStore } from "@/state/useChallenge";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import s from "@/styles/challenge/Home.module.css";
import { Banner } from "@/components/challenge/Banner/Banner";
import { Categories } from "@/components/challenge/Categories/Categories";
import { Category } from "@/types/category";
import { Quote } from "@/components/challenge/Quote/Quote";
import { DayOffer } from "@/components/challenge/DayOffer/DayOffer";
import { products } from "@/data/challenge/products";
import { challengeMap } from "@/data/challenge/challenge";
import { Product } from "@/types/challenge/product";
import { Challenge } from "@/types/challenge/challenge";

export const categories: Category[] = [
  {
    imgSrc: "/fruits.png",
    title: "Fruits",
    path: "/challenge/category?category=fruits",
  },
  {
    imgSrc: "/vegetables.png",
    title: "Vegetables",
    path: "/challenge/category?category=vegetables",
  },
  {
    imgSrc: "/combos.png",
    title: "Combo",
    path: "/challenge/category?category=combo",
  },
];

const ChallengeHome = () => {
  const router = useRouter();
  const filter = useChallengeStore((state) => state.filter);

  const [challenge, setChallenge] = useState<Challenge>();
  const [bestsetters, setBestsellers] = useState<Product[]>([]);
  const [dayOffer, setDayOffer] = useState<Product>();

  useEffect(() => {
    if (filter === undefined) {
      router.push("/");
    }
  }, [filter, router]);

  useEffect(() => {
    if (filter) {
      const data = filter ? challengeMap[filter] : undefined;
      if (data) {
        setChallenge(data);
        setBestsellers(
          products.filter((p) => data?.bestsellerIds.includes(p.id))
        );
        setDayOffer(products.find((p) => data?.dayOfferId === p.id));
        return;
      }
    }
    setChallenge(undefined);
    setBestsellers([]);
    setDayOffer(undefined);
  }, [filter]);

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
        text={`${challenge?.discount}% off with ${challenge?.promocode}. Enjoy delicious groceries at discounted prices. Shop now!`}
      />
      {dayOffer && <DayOffer product={dayOffer} />}
    </main>
  );
};

export default ChallengeHome;
