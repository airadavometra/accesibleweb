import WidthContainer from "../../WidthContainer/WidthContainer";
import s from "./Description.module.css";

export default function Description() {
  return (
    <section className={s.description} id="about">
      <WidthContainer className={s.widthContainer}>
        <h2 className={s.descriptionHeading}>About the project</h2>
        <div className={s.descriptionContent}>
          <div className={s.descriptionColumn}>
            <p>
              This is a non-commercial project focused on web accessibility. Our
              goal is to create an engaging, interactive experience that allows
              to face the challenges that people with different abilities have
              in the web.
            </p>
            <p>
              By simulating various accessibility obstacles, we want to
              cultivate empathy and help people to understand the significance
              of inclusive websites.
            </p>
          </div>
          <div className={s.descriptionColumn}>
            <p>
              This project is an educational tool for both people involved in
              web development and the broader public. It helps to realise that
              accessibility is not a feature, websites should be accessible by
              default.
            </p>
            <p>
              Join us in our commitment to making the online world more
              accessible and inclusive for everyone.
            </p>
          </div>
        </div>
      </WidthContainer>
    </section>
  );
}
