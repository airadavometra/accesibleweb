import { PageHead } from "@/components/PageHead/PageHead";
import { NavigationItem } from "@/types/navigationItem";
import { ReactNode, useEffect, useState } from "react";
import { StickyBanner } from "@/components/main/StickyBanner/StickyBanner";
import { Footer } from "@/components/challenge/accessible/Footer/Footer";
import { Header } from "@/components/challenge/accessible/Header/Header";
import s from "./Layout.module.css";
import { RemindTaskModal } from "@/components/main/RemindTaskModal/RemindTaskModal";
import { EndChallengeModal } from "@/components/main/EndChallengeModal/EndChallengeModal";
import { useChallengeStore } from "@/state/useChallenge";
import classNames from "classnames";
import { colorBlindnessModes } from "@/filters/colorBlindnessModes";
import { simulateTremor } from "@/filters/tremorSimulator";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Cursor } from "@/icons/Cursor";
import { simulateDyslexia } from "@/filters/dyslexiaSimulator";

export const navigation: NavigationItem[] = [
  {
    id: 0,
    title: "Fruits",
    path: "/challenge/accessible/category?category=fruits",
  },
  {
    id: 1,
    title: "Vegetables",
    path: "/challenge/accessible/category?category=vegetables",
  },
  {
    id: 2,
    title: "Combo",
    path: "/challenge/accessible/category?category=combo",
  },
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

  const { filter, colourBlindnessFilter } = useChallengeStore((state) => ({
    filter: state.filter,
    colourBlindnessFilter: state.colourBlindnessFilter,
  }));

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
          const randomMode =
            colourBlindnessFilter ??
            colorBlindnessModes[
              Math.floor(Math.random() * colorBlindnessModes.length)
            ];

          document
            .getElementById("layout")
            ?.style.setProperty(
              "--colour-blindness-filter",
              `url(#${randomMode})`
            );

          setColorBlindnessMode(randomMode);
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
  }, [colourBlindnessFilter, filter]);

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
      <div
        id="layout"
        className={classNames(
          s.layout,
          s[`${filter}Layout`],
          s[`${colorBlindnessMode}Layout`]
        )}
      >
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
          <svg style={{ position: "absolute" }}>
            <defs>
              <filter id="protanopia">
                <feColorMatrix
                  in="SourceGraphic"
                  type="matrix"
                  values="0.567, 0.433, 0,     0, 0
              0.558, 0.442, 0,     0, 0
              0,     0.242, 0.758, 0, 0
              0,     0,     0,     1, 0"
                />
              </filter>
              <filter id="protanomaly">
                <feColorMatrix
                  in="SourceGraphic"
                  type="matrix"
                  values="0.817, 0.183, 0,     0, 0
              0.333, 0.667, 0,     0, 0
              0,     0.125, 0.875, 0, 0
              0,     0,     0,     1, 0"
                />
              </filter>
              <filter id="deuteranopia">
                <feColorMatrix
                  in="SourceGraphic"
                  type="matrix"
                  values="0.625, 0.375, 0,   0, 0
              0.7,   0.3,   0,   0, 0
              0,     0.3,   0.7, 0, 0
              0,     0,     0,   1, 0"
                />
              </filter>
              <filter id="deuteranomaly">
                <feColorMatrix
                  in="SourceGraphic"
                  type="matrix"
                  values="0.8,   0.2,   0,     0, 0
              0.258, 0.742, 0,     0, 0
              0,     0.142, 0.858, 0, 0
              0,     0,     0,     1, 0"
                />
              </filter>
              <filter id="tritanopia">
                <feColorMatrix
                  in="SourceGraphic"
                  type="matrix"
                  values="0.95, 0.05,  0,     0, 0
              0,    0.433, 0.567, 0, 0
              0,    0.475, 0.525, 0, 0
              0,    0,     0,     1, 0"
                />
              </filter>
              <filter id="tritanomaly">
                <feColorMatrix
                  in="SourceGraphic"
                  type="matrix"
                  values="0.967, 0.033, 0,     0, 0
              0,     0.733, 0.267, 0, 0
              0,     0.183, 0.817, 0, 0
              0,     0,     0,     1, 0"
                />
              </filter>
              <filter id="achromatopsia">
                <feColorMatrix
                  in="SourceGraphic"
                  type="matrix"
                  values="0.299, 0.587, 0.114, 0, 0
              0.299, 0.587, 0.114, 0, 0
              0.299, 0.587, 0.114, 0, 0
              0,     0,     0,     1, 0"
                />
              </filter>
              <filter id="achromatomaly">
                <feColorMatrix
                  in="SourceGraphic"
                  type="matrix"
                  values="0.618, 0.320, 0.062, 0, 0
              0.163, 0.775, 0.062, 0, 0
              0.163, 0.320, 0.516, 0, 0
              0,     0,     0,     1, 0"
                />
              </filter>
            </defs>
          </svg>
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
