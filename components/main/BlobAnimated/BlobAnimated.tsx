import { ReactNode } from "react";
import s from "./BlobAnimated.module.css";

type BlobAnimatedProps = {
  children: ReactNode;
};

const BlobAnimated = ({ children }: BlobAnimatedProps) => {
  return (
    <div className={s.translateBlob}>
      <div className={s.scaleBlob}>
        <div className={s.skewBlob}>
          <div className={s.rotateBlob}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default BlobAnimated;
