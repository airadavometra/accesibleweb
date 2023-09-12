import { Cart } from "@/icons/Cart";
import { NavigationItem } from "@/types/navigationItem";
import Link from "next/link";
import WidthContainer from "@/components/common/WidthContainer/WidthContainer";
import s from "./Header.module.css";
import { useSimulationStore } from "@/state/useSimulation";
import { useMemo } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";

type HeaderProps = {
  isAccessible: boolean;
  navigation: NavigationItem[];
};

export const Header = ({ isAccessible, navigation }: HeaderProps) => {
  const cart = useSimulationStore((state) => state.cart);

  const isMobile = useMediaQuery("(max-width: 768px)");

  const cartCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart]
  );

  return (
    <header className={s.header}>
      <WidthContainer className={s.widthContainer}>
        <Link
          href={isAccessible ? "/myopia/accessible/main" : "/myopia/main"}
          className={s.logo}
        >
          fresh
        </Link>
        <nav>
          <ul className={s.navigation}>
            {navigation.map(({ id, title, path }) => (
              <li className={s.linkContainer} key={id}>
                <Link href={path} className={s.link}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          href={isAccessible ? "/myopia/accessible/cart" : "/myopia/cart"}
          className={s.cartLink}
        >
          <Cart />
          <span>{isMobile ? cartCount : `Cart: ${cartCount}`}</span>
        </Link>
      </WidthContainer>
    </header>
  );
};
