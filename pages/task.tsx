import BlobAnimated from "@/components/main/BlobAnimated/BlobAnimated";
import BlobSmall from "@/components/main/BlobSmall/BlobSmall";
import WidthContainer from "@/components/WidthContainer/WidthContainer";
import { taskMap } from "@/data/task";
import { Blob1 } from "@/icons/Blob1";
import { Blob5 } from "@/icons/Blob5";
import { Blob6 } from "@/icons/Blob6";
import { Blob7 } from "@/icons/Blob7";
import { Blob8 } from "@/icons/Blob8";
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
        <div className={s.blobGroup}>
          <button className={s.button}>
            <BlobAnimated>
              <Blob1 />
            </BlobAnimated>
            <span className={s.buttonText}>
              OK,
              <br /> LET&apos;S TRY
            </span>
          </button>
          <BlobSmall top={"-12%"} right={"30%"} size={"s"}>
            <Blob6 />
          </BlobSmall>
          <BlobSmall bottom={"9%"} left={"-12%"} size={"m"}>
            <Blob8 />
          </BlobSmall>
          <BlobSmall bottom={"-2%"} right={"9%"} size={"s"}>
            <Blob5 />
          </BlobSmall>
          <BlobSmall bottom={"12%"} right={"-10%"} size={"m"}>
            <Blob7 />
          </BlobSmall>
        </div>
      </main>
    </WidthContainer>
  ) : null;
};

export default TaskPage;
