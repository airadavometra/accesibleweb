import { FC, ReactNode } from "react";
import s from "./BlobSmall.module.css";

type BlobSmallProps = {
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
  size: "s" | "m" | "l" | "xl";
  children: ReactNode;
};

const SIZES = {
  s: "clamp(32px, 7%, 56px)",
  m: "clamp(48px, 8%, 72px)",
  l: "clamp(56px, 10%, 96px)",
  xl: "clamp(72px, 13%, 120px)",
};

const BlobSmall: FC<BlobSmallProps> = ({
  top,
  left,
  bottom,
  right,
  size,
  children,
}) => {
  return (
    <div
      className={s.blob}
      style={{
        top: top,
        left: left,
        bottom: bottom,
        right: right,
        width: SIZES[size],
        height: SIZES[size],
      }}
    >
      {children}
    </div>
  );
};

export default BlobSmall;
