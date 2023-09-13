import { Cart } from "@/icons/Cart";
import { NavigationItem } from "@/types/navigationItem";
import WidthContainer from "@/components/common/WidthContainer/WidthContainer";
import s from "./Header.module.css";
import { useSimulationStore } from "@/state/useSimulation";
import { useMemo } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useRouter } from "next/router";

type HeaderProps = {
  navigation: NavigationItem[];
};

export const Header = ({ navigation }: HeaderProps) => {
  const router = useRouter();

  const cart = useSimulationStore((state) => state.cart);

  const isMobile = useMediaQuery("(max-width: 48rem)");

  const cartCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart]
  );
  const onLogoClick = () => {
    router.push("/blindness/main");
  };

  const onCategoryClick = (path: string) => {
    router.push(path);
  };

  const onCartClick = () => {
    router.push("/blindness/cart");
  };

  return (
    <div className={s.header}>
      <WidthContainer className={s.widthContainer}>
        <div onClick={onLogoClick} className={s.logo}>
          fresh
        </div>
        <div>
          <div className={s.navigation}>
            {navigation.map(({ id, title, path }) => (
              <div className={s.linkContainer} key={id}>
                <div onClick={() => onCategoryClick(path)} className={s.link}>
                  {title}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div onClick={onCartClick} className={s.cartLink}>
          <Cart />
          <span>{isMobile ? cartCount : `Cart: ${cartCount}`}</span>
        </div>
      </WidthContainer>
    </div>
  );
};
