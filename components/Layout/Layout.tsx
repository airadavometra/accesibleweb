import { NavigationItem } from "@/types/navigationItem";
import { toggleFreezePage } from "@/utils/toggleFreezePage";
import { useRouter } from "next/router";
import { FC, ReactNode, useEffect, useState } from "react";
import Header from "../Header/Header";
import MobileMenu from "../MobileMenu/MobileMenu";
import { PageHead } from "../PageHead/PageHead";
import s from "./Layout.module.css";

const navigation: NavigationItem[] = [
  { id: 0, title: "about", path: "/#about" },
  { id: 1, title: "try yourself", path: "/#try" },
  { id: 2, title: "library", path: "/library" },
];

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const [selectedMenuItemId, setSelectedMenuItemId] = useState<
    number | undefined
  >();
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    //TODO fix for urls with ids - id is not in pathname
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
    setMenuOpen(false);
  };

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
          onMenuItemClick={onMenuItemClick}
          selectedMenuItemId={selectedMenuItemId}
        />
        {children}
      </div>
      {isMenuOpen && (
        <MobileMenu
          isOpen={isMenuOpen}
          navigation={navigation}
          onMenuItemClick={onMenuItemClick}
          onCloseMenu={closeMenu}
          selectedMenuItemId={selectedMenuItemId}
        ></MobileMenu>
      )}
    </>
  );
};

export default Layout;
