import Blobs from "@/components/Blobs/Blobs";
import Description from "@/components/Description/Description";
import FooterLink from "@/components/FooterLink/FooterLink";
import Hero from "@/components/Hero/Hero";
import WidthContainer from "@/components/WidthContainer/WidthContainer";
import Link from "next/link";
import s from "../styles/Home.module.css";

export default function Home() {
  return (
    <main className={s.main}>
      <Hero />
      <Description />
      <Blobs />
      <FooterLink />
    </main>
  );
}
