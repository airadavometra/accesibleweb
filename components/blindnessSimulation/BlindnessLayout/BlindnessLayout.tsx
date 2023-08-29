import { ReactNode, useEffect } from "react";
import s from "./BlindnessLayout.module.css";
import { Layout } from "@/components/common/SimulationLayout/SimulationLayout";
import { data } from "@/data/blindness";
import { getSimulationNavigation } from "@/utils/getSimulationNavigation";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

type BlindnessLayoutProps = {
  isAccessible: boolean;
  children: ReactNode;
};

export const BlindnessLayout = ({
  isAccessible,
  children,
}: BlindnessLayoutProps) => {
  const navigation = getSimulationNavigation(data.path, isAccessible);

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    if (body) {
      body.style.backgroundColor = "white";
    }
    return () => {
      body.style.backgroundColor = "var(--color)";
    };
  }, []);

  return (
    <>
      <Layout data={data}>
        <Header navigation={navigation} isAccessible={isAccessible} />
        {children}
        <Footer navigation={navigation} />
      </Layout>
      <div className={s.blindness} aria-hidden />
    </>
  );
};
