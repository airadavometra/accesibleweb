import { Cart } from "@/icons/Cart";
import { NavigationItem } from "@/types/navigationItem";
import s from "./Header.module.css";
import { useSimulationStore } from "@/state/useSimulation";
import { useMemo } from "react";
import { useRouter } from "next/router";
import WidthContainer from "@/components/common/WidthContainer/WidthContainer";

type HeaderProps = {
  isAccessible: boolean;
  navigation: NavigationItem[];
};

export const Header = ({ isAccessible, navigation }: HeaderProps) => {
  const router = useRouter();

  const cart = useSimulationStore((state) => state.cart);

  const cartCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart]
  );

  const onLogoClick = () => {
    router.push(
      isAccessible
        ? "/color-blindness/accessible/cart"
        : "/color-blindness/cart"
    );
  };

  const onCategoryClick = (path: string) => {
    router.push(path);
  };

  const onCartClick = () => {
    router.push(
      isAccessible
        ? "/color-blindness/accessible/cart"
        : "/color-blindness/cart"
    );
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
