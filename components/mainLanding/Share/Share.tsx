import WidthContainer from "@/components/common/WidthContainer/WidthContainer";
import s from "./Share.module.css";
import { Button } from "@/components/mainLanding/Button/Button";
import { Sharing } from "@/icons/Sharing";
import { useState } from "react";

export default function Share() {
  const [showCoppiedLinkMessage, setShowCoppiedLinkMessage] =
    useState<boolean>(false);

  return (
    <section id="share">
      <WidthContainer className={s.widthContainer}>
        <h2 className={s.title}>
          Like this project? <br />
          <span className={s.highlighted}>
            Share with your friends and colleagues
          </span>
        </h2>
        <span className={s.text}>
          Let&apos;s make the online world more{" "}
          <span className={s.boldText}>
            accessible and inclusive for everyone!
          </span>
          <br /> Together we can do better than on our own.
        </span>
        <Button
          text={showCoppiedLinkMessage ? "Coppied!" : "Copy link"}
          iconRight={<Sharing />}
          type={"secondary"}
          className={s.button}
          onClick={() => {
            setShowCoppiedLinkMessage(true);
            navigator.clipboard.writeText(window.location.origin);
            setTimeout(() => setShowCoppiedLinkMessage(false), 3000);
          }}
        />
      </WidthContainer>
    </section>
  );
}
