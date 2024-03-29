import { navLinkVariants } from "@/motions/homePage";
import { NavigationItem } from "@/types/navigationItem";
import classNames from "classnames";
import { motion } from "framer-motion";
import Link from "next/link";
import WidthContainer from "@/components/common/WidthContainer/WidthContainer";
import s from "./Header.module.css";
import { AccessibilityMan } from "@/icons/AccessibilityMan";
import { HeaderWave } from "@/icons/HeaderWave";
import { VisuallyHidden } from "@/components/common/VisuallyHidden/VisuallyHidden";
import useMediaQuery from "@/hooks/useMediaQuery";

type HeaderProps = {
  navigation: NavigationItem[];
  onOpenMenu(): void;
  onMenuItemClick: (newMenuItemId: number) => void;
};

const Header = ({ navigation, onOpenMenu, onMenuItemClick }: HeaderProps) => {
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduced)");

  return (
    <header className={s.header}>
      {reducedMotion ? (
        <HeaderWave className={s.headerWave} />
      ) : (
        <HeaderWave className={s.headerWave} />
      )}
      <WidthContainer className={s.widthContainer}>
        <Link className={s.logo} href={"/"}>
          <AccessibilityMan />
          <VisuallyHidden>Home</VisuallyHidden>
        </Link>
        <nav>
          <ul className={s.navigation}>
            {navigation.map(({ id, title, path }) => (
              <motion.li
                className={s.linkContainer}
                key={id}
                variants={navLinkVariants}
                whileHover="hover"
              >
                <Link
                  href={path}
                  onClick={() => onMenuItemClick(id)}
                  className={classNames(s.link)}
                >
                  {title}
                </Link>
                <div aria-hidden="true" className={s.hidden}>
                  {title}
                </div>
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
