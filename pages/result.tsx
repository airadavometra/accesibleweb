import WidthContainer from "@/components/WidthContainer/WidthContainer";
import { BlobButton } from "@/components/main/BlobButton/BlobButton";
import type { NextPage } from "next";
import s from "../styles/Result.module.css";
import { useChallengeStore } from "@/state/useChallenge";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { challengeMap } from "@/data/challenge/challenge";

const ResultPage: NextPage = () => {
  const [data, setData] = useState<{
    title: string;
  }>();

  const router = useRouter();
  const filter = useChallengeStore((state) => state.filter);

  useEffect(() => {
    if (router.isReady) {
      if (filter === undefined) {
        router.push("/");
        return;
      }
      const data = challengeMap[filter];
      if (data === undefined) {
        router.push("/404");
        return;
      }
      setData(data);
    }
  }, [filter, router]);

  const onButtonClick = () => {
    router.push("/#try");
  };

  return data ? (
    <WidthContainer>
      <main className={s.main}>
        <h1 className={s.title}>{data.title} result</h1>
        <section className={s.description}>
          <p className={s.problem}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
            nisi, ipsam impedit non sint saepe quis optio eius repudiandae
            dolores sed voluptate maiores labore ab repellat autem minus totam
            praesentium?
          </p>
          <p className={s.challenge}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
            nisi, ipsam impedit non sint saepe quis optio eius repudiandae
            dolores sed voluptate maiores labore ab repellat autem minus totam
            praesentium?
          </p>
        </section>
        <BlobButton
          text={
            <>
              Other
              <br /> challenges
            </>
          }
          onClick={onButtonClick}
        />
      </main>
    </WidthContainer>
  ) : null;
};

export default ResultPage;
