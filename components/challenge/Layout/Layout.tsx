import { PageHead } from "@/components/PageHead/PageHead";
import { NavigationItem } from "@/types/navigationItem";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import { StickyBanner } from "../StickyBanner/StickyBanner";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import s from "./Layout.module.css";

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
  const router = useRouter();
  const [selectedMenuItemId, setSelectedMenuItemId] = useState<
    number | undefined
  >();

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
    const selectedMenuItem = navigation.find(
      (nav) => nav.path === router.pathname
    );
    if (selectedMenuItem) {
      setSelectedMenuItemId(selectedMenuItem.id);
    } else {
      setSelectedMenuItemId(undefined);
    }
  }, [router.pathname]);

  const onMenuItemClick = (newMenuItemId: number) => {
    setSelectedMenuItemId(newMenuItemId);
  };
  return (
    <>
      <PageHead />
      <StickyBanner />
      <div className={s.layout}>
        <Header navigation={navigation} onMenuItemClick={onMenuItemClick} />
        {children}
        <Footer navigation={navigation} onMenuItemClick={onMenuItemClick} />
      </div>
    </>
  );
};
