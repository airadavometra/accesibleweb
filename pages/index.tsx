import s from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <main className={s.main}>
        <section className={s.hero}>
          <span className={s.boldHeroText}>access</span>
          <div>
            <span>denied</span>
            <span>?</span>
          </div>
        </section>
      </main>
    </>
  );
}
