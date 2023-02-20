import BlobAnimated from "@/components/BlobAnimated/BlobAnimated";
import BlobSmall from "@/components/BlobSmall/BlobSmall";
import { Blob1 } from "@/icons/Blob1";
import { Blob5 } from "@/icons/Blob5";
import { Blob7 } from "@/icons/Blob7";
import { Blob8 } from "@/icons/Blob8";
import s from "@/styles/404.module.css";
import type { NextPage } from "next";

const ErrorPage: NextPage = () => (
  <div className={s.blobContainer}>
    <BlobAnimated>
      <Blob1 />
    </BlobAnimated>
    <span className={s.notFoundText}>page not found</span>
    <BlobSmall top={"3%"} right={"13%"} size={"s"}>
      <Blob5 />
    </BlobSmall>
    <BlobSmall top={"5%"} right={"0%"} size={"l"}>
      <Blob7 />
    </BlobSmall>
    <BlobSmall top={"-5%"} right={"4%"} size={"m"}>
      <Blob8 />
    </BlobSmall>
    <BlobSmall bottom={"5%"} right={"5%"} size={"s"}>
      <Blob1 />
    </BlobSmall>
    <BlobSmall top={"25%"} left={"-10%"} size={"s"}>
      <Blob8 />
    </BlobSmall>
    <BlobSmall top={"15%"} left={"-5%"} size={"m"}>
      <Blob5 />
    </BlobSmall>
    <BlobSmall bottom={"15%"} left={"-8%"} size={"xl"}>
      <Blob7 />
    </BlobSmall>
  </div>
);

export default ErrorPage;
