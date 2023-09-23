import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { Layout as MainLayout } from "@/components/mainLanding/Layout/Layout";
import { TremorLayout } from "@/components/tremorSimulation/TremorLayout/TremorLayout";
import { BlindnessLayout } from "@/components/blindnessSimulation/BlindnessLayout/BlindnessLayout";
import { MyopiaLayout } from "@/components/myopiaSimulation/MyopiaLayout/MyopiaLayout";
import { DyslexiaLayout } from "@/components/dyslexiaSimulation/DyslexiaLayout/DyslexiaLayout";
import { ColorBlindnessLayout } from "@/components/colorBlindnessSimulation/ColorBlindnessLayout/ColorBlindnessLayout";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps, router }: AppProps) {
  let Layout;

  if (!router.pathname.includes("/result")) {
    if (router.pathname.startsWith("/tremor/")) {
      Layout = TremorLayout;
    } else if (router.pathname.startsWith("/dyslexia/")) {
      Layout = DyslexiaLayout;
    } else if (router.pathname.startsWith("/blindness/")) {
      Layout = BlindnessLayout;
    } else if (router.pathname.startsWith("/color-blindness/")) {
      Layout = ColorBlindnessLayout;
    } else if (router.pathname.startsWith("/myopia/")) {
      Layout = MyopiaLayout;
    } else {
      Layout = MainLayout;
    }
  } else {
    Layout = MainLayout;
  }

  return (
    <>
      <Layout isAccessible={router.pathname.includes("/accessible")}>
        <Component {...pageProps} />
        <Toaster
          position="top-right"
          containerStyle={{
            position: "absolute",
            zIndex: "unset",
            filter: "blur(0)",
          }}
        />
      </Layout>
      <Analytics />
    </>
  );
}
