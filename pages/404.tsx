import BlobAnimated from "@/components/BlobAnimated/BlobAnimated";
import { Blob1 } from "@/icons/Blob1";
import s from "@/styles/404.module.css";
import classNames from "classnames";
import type { NextPage } from "next";

const ErrorPage: NextPage = () => (
  <div className={s.blobContainer}>
    <BlobAnimated>
      <Blob1 />
    </BlobAnimated>
    <span className={s.notFoundText}>page not found</span>
  </div>
);

export default ErrorPage;
