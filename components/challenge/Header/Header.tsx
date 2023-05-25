import { Cart } from "@/icons/Cart";
import { NavigationItem } from "@/types/navigationItem";
import WidthContainer from "../../WidthContainer/WidthContainer";
import s from "./Header.module.css";
import { useChallengeStore } from "@/state/useChallenge";
import { useMemo } from "react";
import { useRouter } from "next/router";

type HeaderProps = {
  navigation: NavigationItem[];
};

export const Header = ({ navigation }: HeaderProps) => {
  const router = useRouter();

  const cart = useChallengeStore((state) => state.cart);

  const cartCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart]
  );

  const onLogoClick = () => {
    router.push("/challenge");
  };

  const onCategoryClick = (path: string) => {
    router.push(path);
  };

  const onCartClick = () => {
    router.push("/challenge/cart");
  };

  return (
    <div className={s.header}>
      <WidthContainer className={s.widthContainer}>
        <div role="link" onClick={onLogoClick} className={s.logo}>
          fresh
        </div>
        <div className={s.navigation}>
          {navigation.map(({ id, title, path }) => (
            <div
              key={id}
              role="link"
              onClick={() => onCategoryClick(path)}
              className={s.link}
            >
              {title}
            </div>
          ))}
        </div>
        <div role="link" onClick={onCartClick} className={s.cartButton}>
          <div className={s.cartContainer}>
            <Cart />
            <div className={s.cartCount}>{cartCount}</div>
          </div>
        </div>
      </WidthContainer>
    </div>
  );
};
