import { VisuallyHidden } from "@/components/VisuallyHidden/VisuallyHidden";
import { Cart } from "@/icons/Cart";
import { NavigationItem } from "@/types/navigationItem";
import Link from "next/link";
import WidthContainer from "../../WidthContainer/WidthContainer";
import s from "./Header.module.css";
import { useChallengeStore } from "@/state/useChallenge";
import { useMemo } from "react";

type HeaderProps = {
  navigation: NavigationItem[];
};

export const Header = ({ navigation }: HeaderProps) => {
  const cart = useChallengeStore((state) => state.cart);

  const cartCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart]
  );

  return (
    <div className={s.header}>
      <WidthContainer className={s.widthContainer}>
        <Link href="/challenge" className={s.logo}>
          fresh
        </Link>
        <div className={s.navigation}>
          {navigation.map(({ id, title, path }) => (
            <Link key={id} href={path} className={s.link}>
              {title}
            </Link>
          ))}
        </div>
        <Link href={"/challenge/cart"} className={s.cartButton}>
          <div className={s.cartContainer}>
            <Cart />
            <div className={s.cartCount}>{cartCount}</div>
          </div>
        </Link>
      </WidthContainer>
    </div>
  );
};
