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

const SUCCESSFUL_RESULT =
  "Congratulations on successfully completing the challenge! We hope this experience has provided you with a deeper understanding of the difficulties individuals with disabilities face while navigating the web. While you've triumphed over this task, remember that for many, such obstacles are part of their everyday online experience.";

const UNSUCCESSFUL_RESULT =
  "Although the challenge wasn't successfully completed, it's designed not to rate you but to replicate the daily web navigation difficulties faced by individuals with disabilities. This challenge is not easy, mirroring the complexities these individuals often face. Your experience today underscores the urgent need for a more accessible online environment.";

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

  return data ? (
    <main className={s.main}>
      <WidthContainer className={s.widthContainer}>
        <h1 className={s.title}>{data.title} result</h1>
        <section className={s.resultSection}>
          <p className={s.text}>
            {isSuccessful ? SUCCESSFUL_RESULT : SUCCESSFUL_RESULT}
          </p>
          <p className={s.text}>
            By designing websites with inclusivity and adaptability in mind, we
            can create a more equitable digital space. This not only benefits
            individuals with chronic or temporary disabilities but also ensures
            a comfortable and effective browsing experience for all users.
          </p>
        </section>
        <section className={s.buttons}>
          <Button
            text={"Try accessible version"}
            type={"primary"}
            href="/challenge/accessible/"
          />
          <Button text={"Or try again"} type={"secondary"} href="/challenge" />
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
