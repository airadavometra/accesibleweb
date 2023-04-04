import { PageHead } from "@/components/PageHead/PageHead";
import { NavigationItem } from "@/types/navigationItem";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import { ChallengeHeader } from "../ChallengeHeader/ChallengeHeader";
import s from "./ChallengeLayout.module.css";

type ChallengeLayoutProps = {
  children: ReactNode;
};

const navigation: NavigationItem[] = [
  { id: 0, title: "Fruits", path: "/challenge/category/fruits" },
  { id: 1, title: "Vegetables", path: "/challenge/category/vegetables" },
  { id: 2, title: "Combo", path: "/challenge/category/combo" },
];

export const ChallengeLayout = ({ children }: ChallengeLayoutProps) => {
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
      <div className={s.layout}>
        <ChallengeHeader
          navigation={navigation}
          onMenuItemClick={onMenuItemClick}
        />
        {children}
      </div>
      {children}
    </>
  );
};
