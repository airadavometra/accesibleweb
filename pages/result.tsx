import WidthContainer from "@/components/WidthContainer/WidthContainer";
import type { NextPage } from "next";
import s from "../styles/Result.module.css";
import { useChallengeStore } from "@/state/useChallenge";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { challengeMap } from "@/data/challenge/challenge";
import { Button } from "@/components/main/Button/Button";
import { challenges } from "@/data/challenges";
import Link from "next/link";

const ResultPage: NextPage = () => {
  const [data, setData] = useState<{
    title: string;
  }>();

  const router = useRouter();
  const { filter, isSuccessful } = useChallengeStore((state) => ({
    filter: state.filter,
    isSuccessful: state.isSuccessful,
  }));

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
    router.push("/#challenges");
  };

  return data ? (
    <main className={s.main}>
      <WidthContainer className={s.widthContainer}>
        <h1 className={s.title}>{data.title} result</h1>
        <section>
          <p className={s.text}>
            {isSuccessful ? "Well done!" : "Sorry, but this is the wrong order"}
          </p>
        </section>
        <section>
          <p className={s.text}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
            nisi, ipsam impedit non sint saepe quis optio eius repudiandae
            dolores sed voluptate maiores labore ab repellat autem minus totam
            praesentium?
          </p>
        </section>
        <section className={s.buttons}>
          <Button
            text={"Try accessible version"}
            type={"primary"}
            onClick={onButtonClick}
          />
          <Button
            text={"Or try again"}
            type={"secondary"}
            onClick={onButtonClick}
          />
        </section>
        <section className={s.otherChallenges}>
          <h2>Check out other challenges:</h2>
          <ul className={s.otherChallengesList}>
            {challenges
              .filter((c) => c.id !== filter)
              .map((c) => (
                <li key={c.id}>
                  <Link href={c.link} className={s.link}>
                    {c.name}
                  </Link>
                </li>
              ))}
          </ul>
        </section>
      </WidthContainer>
    </main>
  ) : null;
};

export default ResultPage;
