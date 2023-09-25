import { ReactNode, useEffect } from "react";
import s from "./MyopiaLayout.module.css";
import { Layout } from "@/components/common/SimulationLayout/SimulationLayout";
import { data } from "@/data/myopia";
import { getSimulationNavigation } from "@/utils/getSimulationNavigation";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { AccessibleHeader } from "@/components/accessible/Header/Header";
import { AccessibleFooter } from "@/components/accessible/Footer/Footer";

type MyopiaLayoutProps = {
  isAccessible: boolean;
  children: ReactNode;
};

export const MyopiaLayout = ({ isAccessible, children }: MyopiaLayoutProps) => {
  const navigation = getSimulationNavigation(data.path, isAccessible);

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    if (body) {
      body.style.backgroundColor = "white";
    }
    return () => {
      body.style.backgroundColor = "var(--accent-color)";
    };
  }, []);

  return (
    <>
      <Layout data={data}>
        {isAccessible ? (
          <AccessibleHeader path={data.path} navigation={navigation} />
        ) : (
          <Header navigation={navigation} />
        )}
        {children}
        {isAccessible ? (
          <AccessibleFooter navigation={navigation} />
        ) : (
          <Footer navigation={navigation} />
        )}
      </Layout>
      <div className={s.myopia} aria-hidden />
    </>
  );
};
