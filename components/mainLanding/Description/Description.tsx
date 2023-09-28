import WidthContainer from "@/components/common/WidthContainer/WidthContainer";
import s from "./Description.module.css";

export default function Description() {
  return (
    <section className={s.description} id="description">
      <WidthContainer className={s.widthContainer}></WidthContainer>
    </section>
  );
}
