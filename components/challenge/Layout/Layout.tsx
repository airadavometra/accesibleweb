import { PageHead } from "@/components/PageHead/PageHead";
import { NavigationItem } from "@/types/navigationItem";
import { ReactNode, useEffect, useState } from "react";
import { StickyBanner } from "../StickyBanner/StickyBanner";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import s from "./Layout.module.css";
import { RemindTaskModal } from "../RemindTaskModal/RemindTaskModal";
import { EndChallengeModal } from "../EndChallengeModal/EndChallengeModal";
import { useChallengeStore } from "@/state/useChallenge";
import classNames from "classnames";
import { colorBlindnessModes } from "@/filters/colorBlindnessModes";
import { simulateTremor } from "@/filters/tremorSimulator";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Cursor } from "@/icons/Cursor";
import { simulateDyslexia } from "@/filters/dyslexiaSimulator";

export const navigation: NavigationItem[] = [
  { id: 0, title: "Fruits", path: "/challenge/category?category=fruits" },
  {
    id: 1,
    title: "Vegetables",
    path: "/challenge/category?category=vegetables",
  },
  { id: 2, title: "Combo", path: "/challenge/category?category=combo" },
];

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const [remindTaskOpen, setRemindTaskOpen] = useState<boolean>(false);
  const [endChallengeOpen, setEndChallengeOpen] = useState<boolean>(false);

  const [isBlurredVisionMode, setIsBlurredVisionMode] =
    useState<boolean>(false);
  const [isBlindnessMode, setIsBlindnessMode] = useState<boolean>(false);
  const [colorBlindnessMode, setColorBlindnessMode] = useState<string>();
  const [isTremorMode, setIsTremorMode] = useState<boolean>(false);
  const [isDyslexiaMode, setIsDyslexiaMode] = useState<boolean>(false);

  const isMobileTouchScreen = useMediaQuery(
    "(hover: none) and (pointer: coarse)"
  );

  const filter = useChallengeStore((state) => state.filter);

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
    const layout = document.getElementById("layout");
    if (layout) {
      switch (filter) {
        case "blurredvision": {
          setIsBlurredVisionMode(true);
          break;
        }
        case "blindness": {
          setIsBlindnessMode(true);
          break;
        }
        case "colourblindness": {
          setColorBlindnessMode(
            colorBlindnessModes[
              Math.floor(Math.random() * colorBlindnessModes.length)
            ]
          );
          break;
        }
        case "dyslexia": {
          setIsDyslexiaMode(true);
          break;
        }
        case "tremor": {
          setIsTremorMode(true);
          break;
        }
      }
    }
  }, [filter]);

  useEffect(() => {
    if (isTremorMode) {
      const stopTremorSimulation = simulateTremor();
      return () => stopTremorSimulation();
    }
  }, [isTremorMode]);

  useEffect(() => {
    if (isDyslexiaMode) {
      const stopDyslexiaSimulation = simulateDyslexia();
      return () => stopDyslexiaSimulation();
    }
  }, [isDyslexiaMode]);

  return (
    <>
      <PageHead />
      <StickyBanner
        onRemindTask={() => setRemindTaskOpen(true)}
        onEndChallenge={() => setEndChallengeOpen(true)}
      />
      <div id="layout" className={classNames(s.layout, s[`${filter}Layout`])}>
        <Header navigation={navigation} />
        {children}
        <Footer navigation={navigation} />
        {isBlurredVisionMode && (
          <div className={classNames(s.filter, s.blurred)} aria-hidden />
        )}
        {isBlindnessMode && (
          <div className={classNames(s.filter, s.blindness)} aria-hidden />
        )}
        {colorBlindnessMode && (
          <div
            className={classNames(s.filter, s[colorBlindnessMode])}
            aria-hidden
          />
        )}
      </div>
      {remindTaskOpen && (
        <RemindTaskModal
          isOpen={remindTaskOpen}
          onClose={() => setRemindTaskOpen(false)}
        />
      )}
      {endChallengeOpen && (
        <EndChallengeModal
          isOpen={endChallengeOpen}
          onClose={() => setEndChallengeOpen(false)}
        />
      )}
      {isTremorMode && !isMobileTouchScreen && (
        <Cursor className={classNames(s.cursor, "cursor")} aria-hidden />
      )}
    </>
  );
};
