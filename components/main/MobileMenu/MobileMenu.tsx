import { NavigationItem } from "@/types/navigationItem";
import classNames from "classnames";
import s from "./MobileMenu.module.css";
import { Close } from "@/icons/Close";
import Link from "next/link";
import { motion } from "framer-motion";
import { menuVariants } from "@/motions/mobileMenu";

type MobileMenuProps = {
  isOpen: boolean;
  navigation: NavigationItem[];
  onMenuItemClick: (newMenuItemId: number) => void;
  onCloseMenu: () => void;
};

const MobileMenu = ({
  isOpen,
  navigation,
  onCloseMenu,
  onMenuItemClick,
}: MobileMenuProps) => {
  return (
    <motion.div
      key={Number(isOpen)}
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={classNames(s.menuContainer)}
    >
      <button className={s.closeIconButton} onClick={onCloseMenu}>
        <Close className={s.closeIcon} />
      </button>
      <nav className={s.menu}>
        <ul className={s.linksList}>
          {navigation.map(({ id, title, path }) => (
            <li key={id}>
              <Link
                href={path}
                onClick={() => {
                  onCloseMenu();
                  onMenuItemClick(id);
                }}
                className={classNames(s.link)}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
};

export default MobileMenu;
