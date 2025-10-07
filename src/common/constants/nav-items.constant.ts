import { useTranslation } from "react-i18next";
import { INavItem } from "../interfaces/nav-items.interface";
export const NAV_ITEMS = (): INavItem[] => {
  const { t } = useTranslation();
  return [
    { href: "#home", label: t('navItems.home') },
    { href: "#about", label: t('navItems.about') },
    { href: "#skills", label: t('navItems.skills') },
    { href: "#projects", label: t('navItems.projects') },
    { href: "#contact", label: t('navItems.contact') },
  ];
};