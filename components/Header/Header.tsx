import { navLinkVariants } from "@/motions/homePage";
import { NavigationItem } from "@/types/navigationItem";
import classNames from "classnames";
import { motion } from "framer-motion";
import Link from "next/link";
import { FC } from "react";
import WidthContainer from "../WidthContainer/WidthContainer";
import s from "./Header.module.css";

type HeaderProps = {
  navigation: NavigationItem[];
  selectedMenuItemId?: number;
  onOpenMenu(): void;
  onMenuItemClick: (newMenuItemId: number) => void;
};

const Header: FC<HeaderProps> = ({
  navigation,
  onOpenMenu,
  onMenuItemClick,
}) => {
  return (
    <header className={s.header}>
      <WidthContainer className={s.widthContainer}>
        <nav>
          <ul className={s.navigation}>
            {navigation.map(({ id, title, path }) => (
              <motion.li key={id} variants={navLinkVariants} whileHover="hover">
                <Link
                  data-text={title}
                  href={path}
                  onClick={() => onMenuItemClick(id)}
                  className={classNames(s.link)}
                >
                  {title}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
        <button className={s.menuButton} onClick={onOpenMenu}>
          Menu
        </button>
      </WidthContainer>
    </header>
  );
};

export default Header;
