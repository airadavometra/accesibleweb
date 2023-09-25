import { ReactNode, useEffect } from "react";
import s from "./TremorLayout.module.css";
import classNames from "classnames";
import { simulateTremor } from "@/filters/tremorSimulator";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Cursor } from "@/icons/Cursor";
import { data } from "@/data/tremor";
import { getSimulationNavigation } from "@/utils/getSimulationNavigation";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Layout } from "@/components/common/SimulationLayout/SimulationLayout";
import { AccessibleHeader } from "@/components/accessible/Header/Header";
import { AccessibleFooter } from "@/components/accessible/Footer/Footer";

type TremorLayoutProps = {
  isAccessible: boolean;
  children: ReactNode;
};

export const TremorLayout = ({ isAccessible, children }: TremorLayoutProps) => {
  const isMobileTouchScreen = useMediaQuery(
    "(hover: none) and (pointer: coarse)"
  );

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

  useEffect(() => {
    const stopTremorSimulation = simulateTremor();
    return () => stopTremorSimulation();
  }, []);

  return (
    <>
      <Layout data={data} className={s.tremorLayout}>
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
      {!isMobileTouchScreen && (
        <Cursor className={classNames(s.cursor, "cursor")} aria-hidden />
      )}
    </>
  );
};
