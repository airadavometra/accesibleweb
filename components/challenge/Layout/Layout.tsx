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

  const [isBlindnessMode, setIsBlindnessMode] = useState<boolean>(false);
  const [colorBlindnessMode, setColorBlindnessMode] = useState<string>();
  const [isTremorMode, setIsTremorMode] = useState<boolean>(false);

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
          layout.style.filter = "blur(2px)";
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
      const layout = document.getElementById("layout");
      if (layout) {
        // layout.style.cursor = "none";
        // const allElements = layout.querySelectorAll("*");
        // allElements.forEach(
        //   (element) => ((element as HTMLElement).style.cursor = "none")
        // );
        simulateTremor();
      }
    }
  }, [isTremorMode]);

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
      {isTremorMode && (
        <img
          className={classNames(s.cursor, "cursor")}
          src="http://i.stack.imgur.com/KwMGA.png"
          alt=""
          aria-hidden="true"
          role="presentation"
        />
      )}
    </>
  );
};
