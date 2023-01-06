import { useRouter } from "next/router";
import { FC, ReactNode } from "react";
import { PageHead } from "../PageHead/PageHead";
import s from "./Layout.module.css";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <PageHead />
      <div className={s.layout}>
        <div className={s.pageContainer} key={router.pathname}>
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
