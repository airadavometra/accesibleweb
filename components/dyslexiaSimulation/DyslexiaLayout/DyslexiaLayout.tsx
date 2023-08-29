import { ReactNode, useEffect } from "react";
import { Layout } from "@/components/common/SimulationLayout/SimulationLayout";
import { simulateDyslexia } from "@/filters/dyslexiaSimulator";
import { data } from "@/data/dyslexia";
import { getSimulationNavigation } from "@/utils/getSimulationNavigation";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

type DyslexiaLayoutProps = {
  isAccessible: boolean;
  children: ReactNode;
};

export const DyslexiaLayout = ({
  isAccessible,
  children,
}: DyslexiaLayoutProps) => {
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

  useEffect(() => {
    const stopDyslexiaSimulation = simulateDyslexia();
    return () => stopDyslexiaSimulation();
  }, []);

  return (
    <>
      <Layout data={data}>
        <Header navigation={navigation} isAccessible={isAccessible} />
        {children}
        <Footer navigation={navigation} />
      </Layout>
    </>
  );
};
