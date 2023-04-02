import BlobAnimated from "@/components/main/BlobAnimated/BlobAnimated";
import WidthContainer from "@/components/WidthContainer/WidthContainer";
import { taskMap } from "@/data/task";
import { Blob1 } from "@/icons/Blob1";
import { useChallengeStore } from "@/state/useChallenge";
import { Filter } from "@/types/filter";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import s from "../styles/Task.module.css";

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
    problem: string;
    challenge: string;
  }>();
  const router = useRouter();
  const { filter } = router.query;

  const setFilter = useChallengeStore((state) => state.setFilter);

  useEffect(() => {
    if (router.isReady) {
      const filterValue = getFilterValue(filter);

      if (filterValue === undefined) {
        router.push("/");
        return;
      }
      setFilter(filterValue);
      const data = taskMap[filterValue];
      if (data === undefined) {
        router.push("/404");
        return;
      }
      setData(data);
    }
  }, [filter, setFilter, router]);

  return data ? (
    <WidthContainer>
      <main className={s.main}>
        <h1 className={s.title}>{data.title}</h1>
        <section className={s.description}>
          <p className={s.problem}>{data.problem}</p>
          <p className={s.challenge}>{data.challenge}</p>
        </section>
        <button className={s.button}>
          <BlobAnimated>
            <Blob1 />
          </BlobAnimated>
          <span className={s.buttonText}>
            GOT IT,
            <br /> LET&apos;S TRY
          </span>
        </button>
      </main>
    </WidthContainer>
  ) : null;
};

export default TaskPage;
