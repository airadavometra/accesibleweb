import { ReactNode, useEffect } from "react";
import { Layout } from "@/components/common/SimulationLayout/SimulationLayout";
import { simulateDyslexia } from "@/filters/dyslexiaSimulator";
import { data } from "@/data/dyslexia";
import { getSimulationNavigation } from "@/utils/getSimulationNavigation";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { AccessibleHeader } from "@/components/accessible/Header/Header";
import { AccessibleFooter } from "@/components/accessible/Footer/Footer";
import { useBackground } from "@/hooks/useBackground";

type DyslexiaLayoutProps = {
  isAccessible: boolean;
  children: ReactNode;
};

export const DyslexiaLayout = ({
  isAccessible,
  children,
}: DyslexiaLayoutProps) => {
  const navigation = getSimulationNavigation(data.path, isAccessible);

  useBackground();

  useEffect(() => {
    const stopDyslexiaSimulation = simulateDyslexia();
    return () => stopDyslexiaSimulation();
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
    </>
  );
};
