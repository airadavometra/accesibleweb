import WidthContainer from "@/components/common/WidthContainer/WidthContainer";
import type { NextPage } from "next";
import s from "@/styles/Result.module.css";
import { useSimulationStore } from "@/state/useSimulation";
import { Button } from "@/components/mainLanding/Button/Button";
import Link from "next/link";
import { Arrow } from "@/icons/Arrow";
import classnames from "classnames";

const SUCCESSFUL_RESULT =
  "Congratulations on successfully completing the challenge! We hope this experience gave you a deeper understanding of the difficulties individuals with different abilities face while navigating the web. Remember that for many, such obstacles are part of their everyday online experience.";

const UNSUCCESSFUL_RESULT =
  "Although the challenge wasn't successfully completed, it's designed not to rate you but to replicate the daily web navigation difficulties faced by individuals with different abilities. Your experience today proves the urgent need for a more accessible online environment.";

const ResultPage: NextPage = () => {
  const { isSuccessful, challengeErrors } = useSimulationStore((state) => ({
    isSuccessful: state.isSuccessful,
    challengeErrors: state.challengeErrors,
  }));

  return (
    <main className={s.main}>
      <WidthContainer className={s.widthContainer}>
        <h1 className={s.title}>Tremor result</h1>
        {challengeErrors?.length > 0 && (
          <section className={s.errors}>
            <h2 className={s.errorsTitle}>You&apos;ve made some mistakes:</h2>
            <ul>
              {challengeErrors.map((err, index) => (
                <li key={index}>
                  {err.message}
                  {err.items.length > 0 && (
                    <ol>
                      {err.items.map((item, index) => (
                        <li key={index} className={s.secondLevelListItem}>
                          {item}
                        </li>
                      ))}
                    </ol>
                  )}
                </li>
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
                href="/tremor/accessible/main"
              />
              <Button
                text={"Or try the broken one again"}
                type={"secondary"}
                href="/tremor/main"
              />
            </div>
          </div>
          <div className={s.group}>
            <h2>And try other challenges:</h2>
            <ul className={s.otherChallengesList}>
              <li key={"myopia"} className={s.listItem}>
                <Arrow className={s.arrow} />
                <Link href={"/myopia"} className={s.link}>
                  Myopia
                </Link>
              </li>
              <li key={"blindness"} className={s.listItem}>
                <Arrow className={s.arrow} />
                <Link href={"/blindness"} className={s.link}>
                  Blindness
                </Link>
              </li>
              <li key={"dyslexia"} className={s.listItem}>
                <Arrow className={s.arrow} />
                <Link href={"/dyslexia"} className={s.link}>
                  Dyslexia
                </Link>
              </li>
              <li key={"color-blindness"} className={s.listItem}>
                <Arrow className={s.arrow} />
                <Link href={"/color-blindness"} className={s.link}>
                  Color blindness
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </WidthContainer>
    </main>
  );
};

export default ResultPage;
