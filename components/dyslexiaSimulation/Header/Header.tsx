import { VisuallyHidden } from "@/components/common/VisuallyHidden/VisuallyHidden";
import { Cart } from "@/icons/Cart";
import { NavigationItem } from "@/types/navigationItem";
import Link from "next/link";
import WidthContainer from "@/components/common/WidthContainer/WidthContainer";
import s from "./Header.module.css";
import { useSimulationStore } from "@/state/useSimulation";
import { useEffect, useMemo, useState } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
import classNames from "classnames";
import { useRouter } from "next/router";
import { getCategoryValue } from "@/utils/getCategoryFromURL";
import { Category } from "@/types/simulation/category";

type HeaderProps = {
  navigation: NavigationItem[];
};

export const Header = ({ navigation }: HeaderProps) => {
  const router = useRouter();

  const { category: categoryUrl } = router.query;

  const [category, setCategory] = useState<Category>();

  useEffect(() => {
    if (router.isReady) {
      setCategory(getCategoryValue(categoryUrl));
    }
  }, [categoryUrl, router]);

  const cart = useSimulationStore((state) => state.cart);

  const isMobile = useMediaQuery("(max-width: 768px)");

  const cartCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart]
  );

  return (
    <header className={s.header}>
      <WidthContainer className={s.widthContainer}>
        <Link aria-label="home page" href={"/dyslexia/main"} className={s.logo}>
          fresh
        </Link>
        <nav>
          <ul className={s.navigation}>
            {navigation.map(({ id, title, path }) => (
              <li className={s.linkContainer} key={id}>
                <Link
                  href={path}
                  className={classNames(s.link, {
                    [s.selected]: category === title.toLowerCase(),
                  })}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          aria-label={`Cart, ${cartCount} items`}
          href={"/dyslexia/cart"}
          className={s.cartLink}
        >
          <Cart />
          <span>{isMobile ? cartCount : `Cart: ${cartCount}`}</span>
          {isMobile && <VisuallyHidden>Cart</VisuallyHidden>}
        </Link>
      </WidthContainer>
    </header>
  );
};
