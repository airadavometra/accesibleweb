import { Blob1 } from "@/icons/Blob1";
import BlobAnimated from "../BlobAnimated/BlobAnimated";
import s from "./BlobButton.module.css";
import BlobSmall from "../BlobSmall/BlobSmall";
import { Blob6 } from "@/icons/Blob6";
import { Blob8 } from "@/icons/Blob8";
import { Blob5 } from "@/icons/Blob5";
import { Blob7 } from "@/icons/Blob7";
import { ReactNode } from "react";

type BlobButtonProps = {
  text: ReactNode;
  onClick: () => void;
};

export const BlobButton = ({ text, onClick }: BlobButtonProps) => {
  return (
    <div className={s.blobGroup}>
      <button className={s.button} onClick={onClick}>
        <BlobAnimated>
          <Blob1 />
        </BlobAnimated>
        <span className={s.buttonText}>{text}</span>
      </button>
      <BlobSmall top={"-12%"} right={"30%"} size={"s"}>
        <Blob6 />
      </BlobSmall>
      <BlobSmall bottom={"9%"} left={"-12%"} size={"m"}>
        <Blob8 />
      </BlobSmall>
      <BlobSmall bottom={"-2%"} right={"9%"} size={"s"}>
        <Blob5 />
      </BlobSmall>
      <BlobSmall bottom={"12%"} right={"-10%"} size={"m"}>
        <Blob7 />
      </BlobSmall>
    </div>
  );
};
