import WidthContainer from "@/components/WidthContainer/WidthContainer";
import classnames from "classnames";
import s from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <main className={s.main}>
        <section className={s.hero}>
          <div className={s.runningTextContainer}>
            <div className={classnames(s.boldHeroText, s.runningText)}>
              <span>access&nbsp;&nbsp;&nbsp;</span>
              <span>access&nbsp;&nbsp;&nbsp;</span>
              <span>access&nbsp;&nbsp;&nbsp;</span>
              <span>access&nbsp;&nbsp;&nbsp;</span>
              <span>access&nbsp;&nbsp;&nbsp;</span>
              <span>access&nbsp;&nbsp;&nbsp;</span>
              <span>access&nbsp;&nbsp;&nbsp;</span>
              <span>access&nbsp;&nbsp;&nbsp;</span>
            </div>
          </div>
          <div className={s.runningTextContainer}>
            <div className={classnames(s.runningText, s.runningLeft)}>
              <span>denied?&nbsp;&nbsp;&nbsp;</span>
              <span>denied?&nbsp;&nbsp;&nbsp;</span>
              <span>denied?&nbsp;&nbsp;&nbsp;</span>
              <span>denied?&nbsp;&nbsp;&nbsp;</span>
              <span>denied?&nbsp;&nbsp;&nbsp;</span>
              <span>denied?&nbsp;&nbsp;&nbsp;</span>
              <span>denied?&nbsp;&nbsp;&nbsp;</span>
              <span>denied?&nbsp;&nbsp;&nbsp;</span>
            </div>
          </div>
        </section>

        <section className={s.description}>
          <WidthContainer>
            <h2 className={s.descriptionHeading}>what is it about</h2>
            <div className={s.descriptionContent}>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Recusandae omnis ipsum distinctio, in minima ducimus provident
                dolorum at ex accusamus sunt ab eum, doloremque esse voluptatum
                corrupti tenetur totam dignissimos?
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Recusandae omnis ipsum distinctio, in minima ducimus provident
                dolorum at ex accusamus sunt ab eum, doloremque esse voluptatum
                corrupti tenetur totam dignissimos?
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Recusandae omnis ipsum distinctio, in minima ducimus provident
                dolorum at ex accusamus sunt ab eum, doloremque esse voluptatum
                corrupti tenetur totam dignissimos?
              </p>
            </div>
          </WidthContainer>
        </section>

        <section></section>

        <section className={s.libraryLinkSection}>
          <WidthContainer>
            <span className={s.libraryLink}>
              check out <br />
              our accessibility library
            </span>
          </WidthContainer>
        </section>
      </main>
    </>
  );
}
