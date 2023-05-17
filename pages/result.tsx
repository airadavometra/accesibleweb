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
import { Arrow } from "@/icons/Arrow";
import classnames from "classnames";

const SUCCESSFUL_RESULT =
  "Congratulations on successfully completing the challenge! We hope this experience gave you a deeper understanding of the difficulties individuals with different abilities face while navigating the web. Remember that for many, such obstacles are part of their everyday online experience.";

const UNSUCCESSFUL_RESULT =
  "Although the challenge wasn't successfully completed, it's designed not to rate you but to replicate the daily web navigation difficulties faced by individuals with different abilities. Your experience today proves the urgent need for a more accessible online environment.";

const ResultPage: NextPage = () => {
  const [data, setData] = useState<{
    title: string;
  }>();

  const router = useRouter();
  const { filter, isSuccessful, challengeErrors } = useChallengeStore(
    (state) => ({
      filter: state.filter,
      isSuccessful: state.isSuccessful,
      challengeErrors: state.challengeErrors,
    })
  );

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
        {challengeErrors?.length > 0 && (
          <section className={s.errors}>
            <h2 className={s.errorsTitle}>You&apos;ve made some mistakes:</h2>
            <ul>
              {challengeErrors.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
        )}
        <section className={s.gridSection}>
          <p className={s.text}>
            {isSuccessful ? SUCCESSFUL_RESULT : UNSUCCESSFUL_RESULT}
          </p>
          <p className={s.text}>
            By designing websites with inclusivity and adaptability in mind, we
            can create a more equitable digital space. This not only benefits
            individuals with chronic or temporary disabilities but also ensures
            a comfortable and effective browsing experience for all users.
          </p>
        </section>
        <section className={classnames(s.gridSection, s.otherChallenges)}>
          <div className={classnames(s.group, s.accessibleGroup)}>
            <div className={s.group}>
              <h2>Also check this out</h2>
              <p className={s.text}>
                Try a similar challenge, but with one key difference: this
                version is more accessible than the one you visited before. You
                can experience how an accessible website can be a gamechanger
                and make the web more inclusive and user-friendly.
              </p>
            </div>
            <div className={s.group}>
              <Button
                text={"Try accessible version"}
                type={"primary"}
                href="/challenge/accessible/"
              />
              <Button
                text={"Or try the broken one again"}
                type={"secondary"}
                href="/challenge"
              />
            </div>
          </div>
          <div className={s.group}>
            <h2>And try other challenges:</h2>
            <ul className={s.otherChallengesList}>
              {challenges
                .filter((c) => c.id !== filter)
                .map((c) => (
                  <li key={c.id} className={s.listItem}>
                    <Arrow className={s.arrow} />
                    <Link href={c.link} className={s.link}>
                      {c.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </section>
      </WidthContainer>
    </main>
  ) : null;
};

export default ResultPage;
