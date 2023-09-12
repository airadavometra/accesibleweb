import { ReactNode, useEffect, useState } from "react";
import s from "./ColorBlindnessLayout.module.css";
import { Layout } from "@/components/common/SimulationLayout/SimulationLayout";
import { colorBlindnessModes } from "@/filters/colorBlindnessModes";
import { data } from "@/data/colorBlindness";
import { getSimulationNavigation } from "@/utils/getSimulationNavigation";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

type ColorBlindnessLayoutProps = {
  isAccessible: boolean;
  children: ReactNode;
};

export const ColorBlindnessLayout = ({
  isAccessible,
  children,
}: ColorBlindnessLayoutProps) => {
  const [colorBlindnessMode, setColorBlindnessMode] = useState<string>();

  const navigation = getSimulationNavigation(data.path, isAccessible);

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    if (body) {
      body.style.backgroundColor = "white";
    }

    const randomMode =
      colorBlindnessModes[
        Math.floor(Math.random() * colorBlindnessModes.length)
      ];

    document
      .getElementById("layout")
      ?.style.setProperty("--color-blindness-filter", `url(#${randomMode})`);

    setColorBlindnessMode(randomMode);
    return () => {
      body.style.backgroundColor = "var(--color)";
    };
  }, []);

  return (
    <>
      <Layout className={s[`${colorBlindnessMode}Layout`]} data={data}>
        <Header navigation={navigation} isAccessible={isAccessible} />
        {children}
        <Footer navigation={navigation} />
      </Layout>
      <svg style={{ width: 0, height: 0, position: "absolute" }}>
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
        </defs>
      </svg>
    </>
  );
};