import Blobs from "@/components/Blobs/Blobs";
import Description from "@/components/Description/Description";
import Hero from "@/components/Hero/Hero";
import WidthContainer from "@/components/WidthContainer/WidthContainer";
import s from "../styles/Home.module.css";

export default function Home() {
  return (
    <main className={s.main}>
      <Hero />
      <Description />
      <Blobs />
      <section className={s.libraryLinkSection}>
        <WidthContainer>
          <span className={s.libraryLink}>
            check out <br />
            our accessibility library
          </span>
        </WidthContainer>
      </section>
    </main>
  );
}
