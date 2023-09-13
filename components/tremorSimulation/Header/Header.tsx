import { VisuallyHidden } from "@/components/common/VisuallyHidden/VisuallyHidden";
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
        <div className={s.logo}>
          <Link
            aria-label="home page"
            href={isAccessible ? "/tremor/accessible/main" : "/tremor/main"}
          >
            fresh
          </Link>
        </div>
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
        <div className={s.cartLink}>
          <Cart />
          <Link
            aria-label={`Cart, ${cartCount} items`}
            href={isAccessible ? "/tremor/accessible/cart" : "/tremor/cart"}
          >
            <span>{isMobile ? cartCount : `Cart: ${cartCount}`}</span>
            {isMobile && <VisuallyHidden>Cart</VisuallyHidden>}
          </Link>
        </div>
      </WidthContainer>
    </header>
  );
};
