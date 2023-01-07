import classnames from "classnames";
import { FC, ReactNode } from "react";
import s from "./WidthContainer.module.css";

type WidthContainerProps = {
  children: ReactNode;
  className?: string;
};

const WidthContainer: FC<WidthContainerProps> = ({ children, className }) => {
  return (
    <div className={classnames(s.widthContainer, className)}>{children}</div>
  );
};

export default WidthContainer;
