import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";
import { Section, FONT_SIZES, NAV_ITEMS, ELDERLY_SUB_ITEMS } from "@/components/bridge/types";
import { HomePage, ElderlyPage, PhonePage, BankPage, GosuslugiPage, EverydayPage } from "@/components/bridge/section-pages";
import { YouthPage, AboutPage } from "@/components/bridge/youth-about-pages";

export default function Index() {
  const [active, setActive] = useState<Section>("home");
  const [fontIdx, setFontIdx] = useState(() => {
    const saved = localStorage.getItem("mg_font_size");
    return saved ? parseInt(saved) : 0;
  });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const scale = FONT_SIZES[fontIdx].scale;
    document.documentElement.style.setProperty("--font-size-scale", String(scale));
    localStorage.setItem("mg_font_size", String(fontIdx));
  }, [fontIdx]);

  const navigate = (s: Section) => {
    setActive(s);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-primary shadow-lg">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <button
            onClick={() => navigate("home")}
            className="flex items-center gap-3 text-primary-foreground hover:opacity-90 transition-opacity"
          >
            <span className="text-3xl">🌉</span>
            <div className="text-left">
              <div className="font-serif font-bold text-lg leading-tight text-white">Мост поколений</div>
              <div className="text-xs text-blue-200 hidden sm:block">Объясняем просто и с уважением</div>
            </div>
          </button>

          {/* Font size switcher */}
          <div className="flex items-center gap-1 bg-blue-900/50 rounded-xl p-1">
            {FONT_SIZES.map((fs, i) => (
              <button
                key={i}
                onClick={() => setFontIdx(i)}
                title={fs.title}
                style={{ fontSize: `${0.85 + i * 0.15}rem` }}
                className={`w-9 h-9 rounded-lg font-bold transition-all ${
                  fontIdx === i
                    ? "bg-secondary text-secondary-foreground"
                    : "text-blue-200 hover:text-white hover:bg-blue-700"
                }`}
              >
                А
              </button>
            ))}
          </div>

          {/* Burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
            aria-label="Меню"
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={26} />
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className={`nav-link px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                  active === item.id
                    ? "bg-secondary text-secondary-foreground"
                    : "text-blue-100 hover:text-white hover:bg-blue-700"
                }`}
              >
                {item.emoji} {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-blue-900 border-t border-blue-700 px-4 py-3 flex flex-col gap-1 animate-fade-in">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className={`text-left px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                  active === item.id
                    ? "bg-secondary text-secondary-foreground"
                    : "text-blue-100 hover:bg-blue-700 hover:text-white"
                }`}
              >
                {item.emoji} {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* MAIN */}
      <main className="max-w-5xl mx-auto px-4 py-8 animate-fade-in">
        {active === "home" && <HomePage navigate={navigate} elderlySubItems={ELDERLY_SUB_ITEMS} />}
        {active === "elderly" && <ElderlyPage navigate={navigate} elderlySubItems={ELDERLY_SUB_ITEMS} />}
        {active === "phone" && <PhonePage navigate={navigate} />}
        {active === "bank" && <BankPage navigate={navigate} />}
        {active === "gosuslugi" && <GosuslugiPage navigate={navigate} />}
        {active === "everyday" && <EverydayPage navigate={navigate} />}
        {active === "youth" && <YouthPage />}
        {active === "about" && <AboutPage navigate={navigate} />}
      </main>

      {/* FOOTER */}
      <footer className="bg-primary text-primary-foreground mt-16 py-8">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-2xl mb-2">🌉</p>
          <p className="font-serif font-bold text-lg text-white">Мост поколений</p>
          <p className="text-blue-200 text-sm mt-1">Создан с уважением для каждого, кто открывает этот сайт</p>
        </div>
      </footer>
    </div>
  );
}
