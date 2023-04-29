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

type LayoutProps = {
  children: ReactNode;
};

export const navigation: NavigationItem[] = [
  { id: 0, title: "Fruits", path: "/challenge/category?category=fruits" },
  {
    id: 1,
    title: "Vegetables",
    path: "/challenge/category?category=vegetables",
  },
  { id: 2, title: "Combo", path: "/challenge/category?category=combo" },
];

export const Layout = ({ children }: LayoutProps) => {
  const [remindTaskOpen, setRemindTaskOpen] = useState<boolean>(false);
  const [endChallengeOpen, setEndChallengeOpen] = useState<boolean>(false);
  const [isBlindnessMode, setIsBlindnessMode] = useState<boolean>(false);

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
          break;
        }
        case "dyslexia": {
          break;
        }
        case "tremor": {
          break;
        }
      }
    }
  }, [filter]);

  return (
    <>
      <PageHead />
      <StickyBanner
        onRemindTask={() => setRemindTaskOpen(true)}
        onEndChallenge={() => setEndChallengeOpen(true)}
      />
      <div id="layout" className={s.layout}>
        <Header navigation={navigation} />
        {children}
        <Footer navigation={navigation} />
        {isBlindnessMode && <div className={s.blindness} aria-hidden />}
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
    </>
  );
};
