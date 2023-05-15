import WidthContainer from "@/components/WidthContainer/WidthContainer";
import { challengeMap } from "@/data/challenge/challenge";
import { useChallengeStore } from "@/state/useChallenge";
import { Filter } from "@/types/filter";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import s from "../styles/Task.module.css";
import { Button } from "@/components/main/Button/Button";

const getFilterValue = (filter?: string | string[]): Filter | undefined => {
  if (filter && typeof filter === "string") {
    switch (filter) {
      case "blurredvision":
        return "blurredvision";
      case "tremor":
        return "tremor";
      case "blindness":
        return "blindness";
      case "dyslexia":
        return "dyslexia";
      case "colourblindness":
        return "colourblindness";
      default:
        return undefined;
    }
  }
  return undefined;
};

const TaskPage: NextPage = () => {
  const [data, setData] = useState<{
    title: string;
    problem: string[];
    challengeSteps: string[];
    disclaimer?: string;
  }>();
  const router = useRouter();
  const { filter } = router.query;

  const { setFilter } = useChallengeStore((state) => ({
    setFilter: state.setFilter,
  }));

  useEffect(() => {
    if (router.isReady) {
      const filterValue = getFilterValue(filter);

      if (filterValue === undefined) {
        router.push("/");
        return;
      }
      setFilter(filterValue);
      const data = challengeMap[filterValue];
      if (data === undefined) {
        router.push("/404");
        return;
      }
      setData(data);
    }
  }, [filter, setFilter, router]);

  return data ? (
    <main className={s.main}>
      <WidthContainer className={s.widthContainer}>
        <h1 className={s.title}>{data.title}</h1>
        {data.disclaimer && (
          <section className={s.disclaimer}>
            <h2 className={s.disclaimerTitle}>Please note:</h2>
            <p>{data.disclaimer}</p>
          </section>
        )}
        <section className={s.problemSection}>
          {data.problem.map((p, index) => (
            <p key={index} className={s.text}>
              {p}
            </p>
          ))}
        </section>
        <section className={s.descriptionSection}>
          <h2 className={s.subtitle}>What you should do</h2>
          <p className={s.text}>
            You will see a simulation of a grocery store with some common
            accessibility mistakes. We applied a special filter on this shop to
            help your imagination and make you feel like if you had this
            disability. And you simply need to do shopping:
          </p>
          <ul>
            {data.challengeSteps.map((step, index) => (
              <li key={index} className={s.text}>
                {step}
              </li>
            ))}
          </ul>
          <p className={s.text}>
            Your task is to fill your cart with the items on your shopping list.
            Feel free to add additional items to your order, but remember to
            include the required items and stay within the set budget. Next,
            you&apos;ll need to enter some delivery information. Once
            you&apos;re ready, hit the &quot;Pay&quot; button. Your cart
            contents and delivery information will be validated at this stage.
          </p>
        </section>
        <Button
          text={"OK, let's try"}
          type={"primary"}
          href="/challenge"
          className={s.button}
        />
      </WidthContainer>
    </main>
  ) : null;
};

export default TaskPage;
