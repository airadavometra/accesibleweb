import { VisuallyHidden } from "@/components/VisuallyHidden/VisuallyHidden";
import { Cart } from "@/icons/Cart";
import { NavigationItem } from "@/types/navigationItem";
import Link from "next/link";
import WidthContainer from "../../WidthContainer/WidthContainer";
import s from "./Header.module.css";

type HeaderProps = {
  navigation: NavigationItem[];
  onMenuItemClick: (newMenuItemId: number) => void;
};

export const Header = ({ navigation, onMenuItemClick }: HeaderProps) => {
  return (
    <header className={s.header}>
      <div className={s.stickyHeader}>
        <button className={s.primaryButton}>
          Remind task
          <div aria-hidden="true" className={s.hidden}>
            Remind task
          </div>
        </button>
        <button className={s.secondaryButton}>
          Give up
          <div aria-hidden="true" className={s.hidden}>
            Give up
          </div>
        </button>
      </div>
      <WidthContainer className={s.widthContainer}>
        <Link href="/challenge" className={s.logo}>
          GreenUp
        </Link>
        <nav>
          <ul className={s.navigation}>
            {navigation.map(({ id, title, path }) => (
              <li className={s.linkContainer} key={id}>
                <Link
                  href={path}
                  onClick={() => onMenuItemClick(id)}
                  className={s.link}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link href={"/challenge/cart"} className={s.cartButton}>
          <Cart />
          <VisuallyHidden>Cart</VisuallyHidden>
        </Link>
      </WidthContainer>
    </header>
  );
};
