import { NavigationItem } from "@/types/navigationItem";

export const getSimulationNavigation = (
  path: string,
  isAccessible: boolean
): NavigationItem[] => [
  {
    id: 0,
    title: "Fruits",
    path: isAccessible
      ? `/${path}/accessible/category?category=fruits`
      : `/${path}/category?category=fruits`,
  },
  {
    id: 1,
    title: "Vegetables",
    path: isAccessible
      ? `/${path}/accessible/category?category=vegetables`
      : `/${path}/category?category=vegetables`,
  },
  {
    id: 2,
    title: "Combo",
    path: isAccessible
      ? `/${path}/accessible/category?category=combo`
      : `/${path}/category?category=combo`,
  },
];
