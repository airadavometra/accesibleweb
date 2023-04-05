import { Bestsellers } from "@/components/challenge/Bestsellers/Bestsellers";
import { Hero } from "@/components/challenge/Hero/Hero";
import { useChallengeStore } from "@/state/useChallenge";
import { useRouter } from "next/router";
import { useEffect } from "react";
import s from "@/styles/ChallengeLanding.module.css";
import { Banner } from "@/components/challenge/Banner/Banner";

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
      <Bestsellers />
      <Banner
        imgSrc={"/test.png"}
        text={"Drinks that taste as good as they make you feel."}
      />
    </main>
  );
};

export default ChallengeHome;
