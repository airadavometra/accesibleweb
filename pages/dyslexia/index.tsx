import WidthContainer from "@/components/common/WidthContainer/WidthContainer";
import type { NextPage } from "next";
import s from "@/styles/Task.module.css";
import { ButtonOld } from "@/components/mainLanding/ButtonOld/ButtonOld";
import { data } from "@/data/dyslexia";

const TaskPage: NextPage = () => {
  return (
    <main className={s.main}>
      <WidthContainer className={s.widthContainer}>
        <h1 className={s.title}>{data.title}</h1>
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
          <p className={s.text}>
            Your task is to fill your cart with the items on your shopping list.
            Feel free to add additional items to your order, but remember to
            include the required items and stay within the set budget. Next,
            you&apos;ll need to enter some delivery information. Once
            you&apos;re ready, hit the &quot;Pay&quot; button. Your cart
            contents and delivery information will be validated at this stage.
          </p>
        </section>
        <ButtonOld
          text={"OK, let's try"}
          type={"primary"}
          href="/dyslexia/main"
          className={s.button}
        />
      </WidthContainer>
    </main>
  );
};

export default TaskPage;
