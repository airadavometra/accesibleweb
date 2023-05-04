import Blobs from "@/components/main/Blobs/Blobs";
import Description from "@/components/main/Description/Description";
import Footer from "@/components/main/Footer/Footer";
import Hero from "@/components/main/Hero/Hero";
import s from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <main className={s.main}>
        <Hero />
        <Description />
        <Blobs />
      </main>
      <Footer />
    </>
  );
}
