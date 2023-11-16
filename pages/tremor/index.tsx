import WidthContainer from "@/components/common/WidthContainer/WidthContainer";
import type { NextPage } from "next";
import s from "@/styles/Task.module.css";
import classNames from "classnames";
import { data } from "@/data/tremor";
import { Button } from "@/components/mainLanding/Button/Button";
import { Blob4 } from "@/icons/Blob4";
import { Users } from "@/icons/Users";
import { Tool } from "@/icons/Tool";
import { UserPlus } from "@/icons/UserPlus";
import { Lock } from "@/icons/Lock";
import { Card } from "@/components/mainLanding/Card/Card";
import { Warning } from "@/icons/Warning";
import { EyeClosed } from "@/icons/EyeClosed";
import { EyeOpen } from "@/icons/EyeOpen";

const TaskPage: NextPage = () => {
  return (
    <main className={s.main}>
      <WidthContainer className={s.widthContainer}>
        <h1 className={s.title}>{data.title}</h1>
        <div className={s.contentContainer}>
          <section className={s.problemSection}>
            <ul className={s.problemsList}>
              <li className={s.problemItem}>
                <div className={s.problemIconContainer}>
                  <Users className={s.problemIcon} />
                  <Blob4 className={s.problemIconBlob} />
                </div>
                <span>
                  Around <span className={s.bold}>39 million people</span> are
                  affected by blindness
                </span>
              </li>
              <li className={s.problemItem}>
                <div className={s.problemIconContainer}>
                  <Tool className={s.problemIcon} />
                  <Blob4
                    className={classNames(
                      s.problemIconBlob,
                      s.problemIconBlobRotated45
                    )}
                  />
                </div>
                <span>
                  People with low vision use{" "}
                  <span className={s.bold}>screen readers</span> for web
                  navigation
                </span>
              </li>
              <li className={s.problemItem}>
                <div className={s.problemIconContainer}>
                  <UserPlus className={s.problemIcon} />
                  <Blob4
                    className={classNames(
                      s.problemIconBlob,
                      s.problemIconBlobRotated90
                    )}
                  />
                </div>
                <span>
                  Screen readers are also helpful in case of eye strain or if
                  you prefer auditory information
                </span>
              </li>
              <li className={s.problemItem}>
                <div className={s.problemIconContainer}>
                  <Lock className={s.problemIcon} />
                  <Blob4
                    className={classNames(
                      s.problemIconBlob,
                      s.problemIconBlobRotated135
                    )}
                  />
                </div>
                <span>
                  Many websites are not labeled for screen readers and important
                  content is only conveyed visually
                </span>
              </li>
            </ul>
          </section>
          <section>
            <Card style={"border"}>
              <div className={s.disclaimerContainer}>
                <h2 className={s.disclaimerTitle}>
                  <Warning className={s.warningIcon} />
                  Please note:
                </h2>
                <p className={s.disclaimer}>
                  To successfully complete the challenge and gain the intended
                  experience, you need to use a computer, not mobile device.
                  Good luck with the challenge!
                </p>
              </div>
            </Card>
          </section>
          <section className={s.descriptionSection}>
            <h2 className={s.subtitle}>How does it feel like?</h2>
            <p className={s.text}>
              To better understand the problems people with tremor face every
              day while browsing Internet, we want to offer you an interactive
              experience.
            </p>
            <div className={s.stepsContainer}>
              <p className={s.text}>
                Just <span className={s.big}>2</span> steps -{" "}
                <span className={s.big}>2</span> different simulations of the
                same online grocery shop:
              </p>
              <ul className={s.problemsList}>
                <li className={s.problemItem}>
                  <div className={s.problemIconContainer}>
                    <EyeClosed className={s.problemIcon} />
                    <Blob4 className={s.problemIconBlob} />
                  </div>
                  <span>
                    First one is deliberately{" "}
                    <span className={s.bold}>inaccessible,</span> we&apos;ve
                    made some very common mistakes here
                  </span>
                </li>
                <li className={s.problemItem}>
                  <div className={s.problemIconContainer}>
                    <EyeOpen className={s.problemIcon} />
                    <Blob4
                      className={classNames(
                        s.problemIconBlob,
                        s.problemIconBlobRotated45
                      )}
                    />
                  </div>
                  <span>
                    Second one provides{" "}
                    <span className={s.bold}>better accessibility</span>
                  </span>
                </li>
              </ul>
            </div>
            <p className={s.text}>
              No need to stress!{" "}
              <span className={s.highlighted}>We will guide you</span> through
              these simulations, you only need to trust us and focus on gaining
              the experience.
            </p>
          </section>
          <Button
            text={"OK, let's try"}
            type={"primary"}
            href="/tremor/main"
            className={s.button}
          />
        </div>
        <section className={s.checklist}>
          <span className={s.checklistText}>
            See how to{" "}
            <span className={s.highlighted}>improve accessibility</span> in
          </span>
          <span className={s.checklistLink}>our accessibility checklist</span>
        </section>
      </WidthContainer>
    </main>
  );
};

export default TaskPage;
