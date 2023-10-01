import Blobs from "@/components/mainLanding/Blobs/Blobs";
import ChecklistAds from "@/components/mainLanding/ChecklistAds/ChecklistAds";
import Description from "@/components/mainLanding/Description/Description";
import FactsGrid from "@/components/mainLanding/FactsGrid/FactsGrid";
import Hero from "@/components/mainLanding/Hero/Hero";
import Quote from "@/components/mainLanding/Quote/Quote";
import s from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <main className={s.main}>
        <Hero />
        <FactsGrid />
        <Quote />
        <Description />
        <Blobs />
        <ChecklistAds />
      </main>
    </>
  );
}
