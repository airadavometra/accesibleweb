import classnames from "classnames";
import { FC, ReactNode } from "react";
import s from "./Blob.module.css";

type BlobProps = {
  position: "left" | "middle" | "right";
  image: ReactNode;
  text: string;
  url: string;
};

const Blob: FC<BlobProps> = ({ position, image, text, url }) => {
  return (
    <div className={classnames(s.blobWrapper, s[position])}>
      <div className={s.translateBlob}>
        <div className={s.scaleBlob}>
          <div className={s.skewBlob}>
            <div className={s.rotateBlob}>{image}</div>
          </div>
        </div>
      </div>
      <a className={s.link} href={url}>
        {text}
      </a>
    </div>
  );
};

export default Blob;
