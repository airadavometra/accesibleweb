import classnames from "classnames";
import WidthContainer from "../WidthContainer/WidthContainer";
import s from "./Description.module.css";

export default function Description() {
  return (
    <section className={s.description}>
      <WidthContainer>
        <h2 className={s.descriptionHeading}>what is it about</h2>
        <div className={s.descriptionContent}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
            omnis ipsum distinctio, in minima ducimus provident dolorum at ex
            accusamus sunt ab eum, doloremque esse voluptatum corrupti tenetur
            totam dignissimos?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
            omnis ipsum distinctio, in minima ducimus provident dolorum at ex
            accusamus sunt ab eum, doloremque esse voluptatum corrupti tenetur
            totam dignissimos?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
            omnis ipsum distinctio, in minima ducimus provident dolorum at ex
            accusamus sunt ab eum, doloremque esse voluptatum corrupti tenetur
            totam dignissimos?
          </p>
        </div>
      </WidthContainer>
    </section>
  );
}
