import { NavigationItem } from "@/types/navigationItem";
import classNames from "classnames";
import Link from "next/link";
import { FC } from "react";
import s from "./Header.module.css";

type HeaderProps = {
  navigation: NavigationItem[];
  selectedMenuItemId: number;
  onOpenMenu(): void;
};

const Header: FC<HeaderProps> = ({
  navigation,
  selectedMenuItemId,
  onOpenMenu,
}) => {
  return (
    <header className={s.header}>
      <nav className={s.navigation}>
        {navigation.map(({ id, title, path }) => (
          <Link
            key={id}
            href={path}
            className={classNames(s.link, {
              [s.selected]: id === selectedMenuItemId,
            })}
          >
            {title}
          </Link>
        ))}
      </nav>
      <button className={s.menuButton} onClick={onOpenMenu}>
        {/* <Burger className={s.menuIcon} /> */}
      </button>
    </header>
  );
};

export default Header;
