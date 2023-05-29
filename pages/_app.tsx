import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { Layout as MainLayout } from "@/components/main/Layout/Layout";
import { Layout as ChallengeLayout } from "@/components/challenge/Layout/Layout";
import { Layout as ChallengeAccessibleLayout } from "@/components/challenge/accessible/Layout/Layout";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps, router }: AppProps) {
  const Layout = router.pathname.startsWith("/challenge/accessible")
    ? ChallengeAccessibleLayout
    : router.pathname.startsWith("/challenge")
    ? ChallengeLayout
    : MainLayout;
  return (
    <>
      <Layout>
        <Component {...pageProps} />
        <Toaster position="top-right" />
      </Layout>
      <Analytics />
    </>
  );
}
