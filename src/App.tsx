import { useState, useEffect } from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/sonner';
import { useTranslation } from "react-i18next";
function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
     const { t, i18n } = useTranslation();
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 dark:from-slate-950 dark:via-blue-950 dark:to-slate-900">
        <Header activeSection={activeSection} />
        <main>
          <Hero />
          <h1>{t("welcome")}</h1>
          <p>{t("hello", { name: "Hon" })}</p>

          <button onClick={() => i18n.changeLanguage("en")}>English</button>
          <button onClick={() => i18n.changeLanguage("vi")}>Tiếng Việt</button>
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;