import WidthContainer from "@/components/common/WidthContainer/WidthContainer";
import s from "./ExtensionAds.module.css";
import classNames from "classnames";
import Image from "next/image";
import { Button } from "../Button/Button";
import { Chrome } from "@/icons/Chrome";
import { Card } from "../Card/Card";
import { Star } from "@/icons/Star";

export default function ExtensionAds() {
  return (
    <section id="extension">
      <WidthContainer className={s.widthContainer}>
        <div className={s.descriptionColumn}>
          <h2 className={s.title}>
            Apply visual filters on your website <br />
            <span className={s.titleBigger}>
              with our{" "}
              <span className={s.titleBold}>
                <span className={s.titleColored}>Chrome</span> extension!
              </span>
            </span>
          </h2>
          <span className={s.description}>
            With this extension you can check if your website is accessible.
            Also useful as an argument for the colleagues and management.
          </span>
          <Button
            href="https://chrome.google.com/webstore/detail/simulator-of-visual-impai/imohhjdbajiihdogpnphgbocfodbofip?hl=en-GB&authuser=0"
            text="Get the extension"
            type="primary"
            iconRight={<Chrome />}
          />
        </div>
        <Card style="border">
          <div className={s.cardContent}>
            <div className={s.imageContainer}>
              <Image
                className={s.image}
                src="/logo.png"
                alt="Chrome extension logo"
                fill
              />
            </div>

            <span className={s.extensionName}>
              <span className={s.extensionNameBold}>AllSight:</span> simulator
              <br /> of visual impairments
            </span>
            <div className={s.rating}>
              <Star className={s.starIcon} />
              <Star className={s.starIcon} />
              <Star className={s.starIcon} />
              <Star className={s.starIcon} />
              <Star className={s.starIcon} />
            </div>
          </div>
        </Card>
      </WidthContainer>
    </section>
  );
}
