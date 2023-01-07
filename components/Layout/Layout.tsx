import { NavigationItem } from "@/types/navigationItem";
import { toggleFreezePage } from "@/utils/toggleFreezePage";
import { useRouter } from "next/router";
import { FC, ReactNode, useEffect, useState } from "react";
import Header from "../Header/Header";
import { PageHead } from "../PageHead/PageHead";
import s from "./Layout.module.css";

const navigation: NavigationItem[] = [
  { id: 0, title: "about", path: "/" },
  { id: 1, title: "play", path: "#play" },
  { id: 2, title: "library", path: "/library" },
];

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const [selectedMenuItemId, setSelectedMenuItemId] = useState<number>(0);
  const [isMenuOpen, setMenuOpen] = useState(false);

  // TODO fix this effect for # link
  useEffect(() => {
    const selectedMenuItem = navigation.find(
      (nav) => nav.path === router.pathname
    );
    if (selectedMenuItem) {
      setSelectedMenuItemId(selectedMenuItem.id);
    } else {
      setSelectedMenuItemId(0);
    }
  }, [router.pathname]);

  const openMenu = () => {
    setMenuOpen(true);
    toggleFreezePage();
  };
  const closeMenu = () => {
    setMenuOpen(false);
    toggleFreezePage();
  };

  return (
    <>
      <PageHead />
      <div className={s.layout}>
        <Header
          navigation={navigation}
          onOpenMenu={openMenu}
          selectedMenuItemId={selectedMenuItemId}
        />
        {children}
      </div>
    </>
  );
};

export default Layout;
