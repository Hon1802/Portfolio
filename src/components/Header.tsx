import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Moon, Sun, Code2, Earth } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import I18nText from "@/common/components/I18nText";
import { useTranslation } from "react-i18next";
import { NAV_ITEMS } from "@/common/constants/nav-items.constant";

interface HeaderProps {
  activeSection: string;
}

const Header = ({ activeSection }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<"en" | "vi">("en");

  const navItems = NAV_ITEMS();

  const { theme, setTheme } = useTheme();
  const { i18n } = useTranslation();

  useEffect(() => {
    const normalize = (lng: string): "en" | "vi" =>
      lng.startsWith("vi") ? "vi" : "en";
    setLanguage(normalize(i18n.language));

    const onChanged = (lng: string) => setLanguage(normalize(lng));
    i18n.on("languageChanged", onChanged);
    return () => {
      i18n.off("languageChanged", onChanged);
    };
  }, [i18n]);

  const toggleLanguage = () => {
    const next = language === "en" ? "vi" : "en";
    i18n.changeLanguage(next);
    // setLanguage sẽ được gọi bởi listener "languageChanged"
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-white/10 backdrop-blur-md border-b border-white/20 dark:bg-slate-900/10 dark:border-slate-700/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-emerald-500" />
            <I18nText
              i18nKey="mainLeftText"
              className="text-sm font-bold text-white"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-colors hover:text-emerald-400 ${
                  activeSection === item.href.substring(1)
                    ? "text-emerald-400"
                    : "text-white/80"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-white hover:bg-white/10"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="text-white hover:bg-white/10 gap-0 sm:gap-2 px-2"
                aria-label={
                  language === "en"
                    ? "Switch to Vietnamese"
                    : "Chuyển sang tiếng Anh"
                }
                title={language === "en" ? "Tiếng Việt" : "English"}
              >
                <Earth className="h-4 w-4" />
                <span className="hidden sm:inline">
                  {language === "en" ? "English" : "Tiếng Việt"}
                </span>
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="md:hidden text-white"
                >
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-slate-900/95 backdrop-blur-md border-slate-700/20"
              >
                <nav className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className={`text-left text-lg font-medium transition-colors hover:text-emerald-400 ${
                        activeSection === item.href.substring(1)
                          ? "text-emerald-400"
                          : "text-white/80"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
