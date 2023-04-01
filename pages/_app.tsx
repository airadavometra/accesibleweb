import "../styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "@/components/main/MainLayout/MainLayout";
import { ChallengeLayout } from "@/components/challenge/ChallengeLayout/ChallengeLayout";

export default function App({ Component, pageProps, router }: AppProps) {
  const Layout = router.pathname.startsWith("/challenge")
    ? ChallengeLayout
    : MainLayout;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
