import { NavigationItem } from "@/types/navigationItem";
import classNames from "classnames";
import { FC } from "react";
import s from "./MobileMenu.module.css";
import { motion } from "framer-motion";
import { Close } from "@/icons/Close";
import Link from "next/link";

type MobileMenuProps = {
  isOpen: boolean;
  navigation: NavigationItem[];
  onMenuItemClick: (newMenuItemId: number) => void;
  onCloseMenu: () => void;
  selectedMenuItemId?: number;
};

const MobileMenu: FC<MobileMenuProps> = ({
  isOpen,
  navigation,
  selectedMenuItemId,
  onCloseMenu,
  onMenuItemClick,
}) => {
  return (
    <div className={classNames(s.menuContainer)}>
      <button className={s.closeIconButton} onClick={onCloseMenu}>
        <Close className={s.closeIcon} />
      </button>
      <nav className={s.menu}>
        <ul className={s.linksList}>
          {navigation.map(({ id, title, path }) => (
            <li key={id}>
              <Link
                href={path}
                onClick={() => onMenuItemClick(id)}
                className={classNames(s.link, {
                  [s.selected]: selectedMenuItemId === id,
                })}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
