import WidthContainer from "@/components/WidthContainer/WidthContainer";
import s from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <main className={s.main}>
        <WidthContainer className={s.height100}>
          <section className={s.hero}>
            <span className={s.boldHeroText}>access</span>
            <div>
              <span>denied</span>
              <span>?</span>
            </div>
          </section>
        </WidthContainer>
        <WidthContainer>
          <section className={s.description}>
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
          </section>
        </WidthContainer>
        <section></section>
        <WidthContainer>
          <section className={s.libraryLinkSection}>
            <span className={s.libraryLink}>
              check out <br />
              our accessibility library
            </span>
          </section>
        </WidthContainer>
      </main>
    </>
  );
}
