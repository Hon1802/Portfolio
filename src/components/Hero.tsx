import I18nText from "@/common/components/I18nText";
import { HERO_DATA } from "@/common/moc";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20 animate-gradient-x"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Avatar */}
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 p-1 animate-pulse">
              <img
                src={HERO_DATA.profileImage}
                alt="Developer"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full animate-bounce"></div>
          </div>

          {/* Text */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up leading-tight text-center">
            {t("hero.greeting")}{" "}
            <I18nText
              as="span"
              i18nKey="mainLeftText"
              className="inline-block bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x"
            />
          </h1>

          <p className="text-xl sm:text-2xl text-white/80 mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            {t("hero.description")}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animation-delay-400">
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 transition-all transform hover:scale-105"
              onClick={() => scrollTo("projects")}
            >
              {t("hero.buttons.work")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-3 transition-all transform hover:scale-105"
              onClick={() => scrollTo("contact")}
            >
              {t("hero.buttons.contact")}
            </Button>
          </div>

          {/* Socials */}
          <div className="flex justify-center space-x-6 mb-12 animate-fade-in-up animation-delay-600">
            {HERO_DATA.socials.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-emerald-400 transition-colors transform hover:scale-110"
                >
                  <Icon className="h-6 w-6" />
                </a>
              );
            })}
          </div>

          {/* Scroll down */}
          <button
            onClick={() => scrollTo("about")}
            className="animate-bounce text-white/70 hover:text-emerald-400 transition-colors"
          >
            <ArrowDown className="h-8 w-8 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
