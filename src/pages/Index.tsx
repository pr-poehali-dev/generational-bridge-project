import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

type Section = "home" | "elderly" | "youth" | "phone" | "bank" | "gosuslugi" | "everyday" | "about";

const FONT_SIZES = [
  { label: "А", scale: 1, title: "Обычный" },
  { label: "А", scale: 1.2, title: "Крупный" },
  { label: "А", scale: 1.45, title: "Очень крупный" },
];

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

  const navItems: { id: Section; label: string; emoji: string }[] = [
    { id: "home", label: "Главная", emoji: "🏠" },
    { id: "elderly", label: "Пожилым 60+", emoji: "🟦" },
    { id: "youth", label: "Молодёжи", emoji: "⭐" },
    { id: "about", label: "О проекте", emoji: "🌉" },
  ];

  const elderlySubItems: { id: Section; label: string; emoji: string; desc: string }[] = [
    { id: "phone", label: "Телефон и связь", emoji: "📱", desc: "Как звонить, писать СМС, отправлять фото" },
    { id: "bank", label: "Банки и безопасность", emoji: "💳", desc: "Как пользоваться банком и защититься от мошенников" },
    { id: "gosuslugi", label: "Госуслуги", emoji: "🏛", desc: "Как войти, записаться к врачу и получить справку" },
    { id: "everyday", label: "Бытовые ситуации", emoji: "🧩", desc: "Магазин, аптека, транспорт, больница, почта" },
  ];

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
            {navItems.map((item) => (
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
            {navItems.map((item) => (
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
        {active === "home" && <HomePage navigate={navigate} elderlySubItems={elderlySubItems} />}
        {active === "elderly" && <ElderlyPage navigate={navigate} elderlySubItems={elderlySubItems} />}
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

/* ─── HOME PAGE ─── */
function HomePage({ navigate, elderlySubItems }: { navigate: (s: Section) => void; elderlySubItems: { id: Section; label: string; emoji: string; desc: string }[] }) {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="text-center py-10 px-4">
        <div className="inline-flex items-center gap-2 bg-secondary/20 text-foreground border border-secondary/40 rounded-full px-5 py-2 text-sm font-semibold mb-6">
          <span>🌉</span> Тёплый ресурс для двух поколений
        </div>
        <h1 className="font-serif font-black text-4xl sm:text-5xl text-foreground mb-5 leading-tight">
          Мост поколений
        </h1>
        <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-8">
          Помогаем пожилым людям уверенно разбираться в повседневных делах, а молодёжи — поддерживать старших без спешки и давления
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate("elderly")}
            className="bg-primary text-white font-bold text-lg px-8 py-4 rounded-2xl hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
          >
            🟦 Я пожилой человек
          </button>
          <button
            onClick={() => navigate("youth")}
            className="bg-secondary text-secondary-foreground font-bold text-lg px-8 py-4 rounded-2xl hover:bg-secondary/90 transition-all hover:scale-105 shadow-lg"
          >
            ⭐ Я помогаю старшим
          </button>
        </div>
      </section>

      <div className="h-1 w-24 bg-secondary rounded-full mx-auto" />

      {/* Cards for elderly */}
      <section>
        <h2 className="font-serif font-bold text-2xl sm:text-3xl text-foreground mb-6 flex items-center gap-3">
          <span className="text-3xl">🟦</span> Разделы для пожилых
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {elderlySubItems.map((item) => (
            <button
              key={item.id}
              onClick={() => navigate(item.id)}
              className="card-hover text-left bg-white rounded-2xl p-6 border-2 border-border hover:border-primary transition-all shadow-sm"
            >
              <div className="text-4xl mb-3">{item.emoji}</div>
              <h3 className="font-serif font-bold text-xl text-foreground mb-2">{item.label}</h3>
              <p className="text-muted-foreground text-base">{item.desc}</p>
              <div className="mt-4 flex items-center gap-1 text-primary font-semibold text-sm">
                Читать <Icon name="ArrowRight" size={16} />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-accent/10 border-2 border-accent/30 rounded-3xl p-7">
        <h2 className="font-serif font-bold text-2xl text-foreground mb-5 flex items-center gap-3">
          <span>🛡</span> Наши принципы
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            ["Уважение", "Здесь нет глупых вопросов. Каждый шаг важен."],
            ["Спокойствие", "Никуда не торопимся. Всё можно перечитать."],
            ["Понятность", "Простые слова, понятные шаги, никакого жаргона."],
            ["Безопасность", "Учим распознавать мошенников и защищать себя."],
          ].map(([title, desc]) => (
            <div key={title} className="flex gap-3 items-start">
              <div className="w-3 h-3 rounded-full bg-accent mt-2 flex-shrink-0" />
              <div>
                <div className="font-bold text-foreground text-base">{title}</div>
                <div className="text-muted-foreground text-sm">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

/* ─── ELDERLY PAGE ─── */
function ElderlyPage({ navigate, elderlySubItems }: { navigate: (s: Section) => void; elderlySubItems: { id: Section; label: string; emoji: string; desc: string }[] }) {
  return (
    <div className="space-y-8">
      <button onClick={() => navigate("home")} className="text-primary hover:underline text-sm flex items-center gap-1 mb-4">
        <Icon name="ChevronLeft" size={16} /> Главная
      </button>
      <div className="bg-primary rounded-3xl p-8 text-primary-foreground">
        <div className="text-5xl mb-4">🟦</div>
        <h1 className="font-serif font-black text-3xl sm:text-4xl text-white mb-3">Для пожилых людей 60+</h1>
        <p className="text-blue-200 text-lg max-w-xl">
          Здесь всё объяснено простым языком, по шагам, с уважением. Выберите нужный раздел.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        {elderlySubItems.map((item) => (
          <button
            key={item.id}
            onClick={() => navigate(item.id)}
            className="card-hover text-left bg-white rounded-2xl p-6 border-2 border-border hover:border-primary transition-all shadow-sm"
          >
            <div className="text-4xl mb-3">{item.emoji}</div>
            <h3 className="font-serif font-bold text-xl text-foreground mb-2">{item.label}</h3>
            <p className="text-muted-foreground text-base">{item.desc}</p>
            <div className="mt-4 flex items-center gap-1 text-primary font-semibold text-sm">
              Читать <Icon name="ArrowRight" size={16} />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ─── STEP COMPONENT ─── */
function Step({ num, text }: { num: number; text: string }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg flex-shrink-0">
        {num}
      </div>
      <div className="text-foreground text-lg leading-relaxed pt-1">{text}</div>
    </div>
  );
}

function StepBlock({ title, steps }: { title: string; steps: string[] }) {
  return (
    <div className="bg-white rounded-2xl border-2 border-border p-6 space-y-4">
      <h3 className="font-serif font-bold text-xl text-foreground">{title}</h3>
      <div className="space-y-3">
        {steps.map((s, i) => <Step key={i} num={i + 1} text={s} />)}
      </div>
    </div>
  );
}

function WarnBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-destructive/10 border-2 border-destructive/40 rounded-2xl p-6">
      <h3 className="font-serif font-bold text-xl text-destructive mb-4 flex items-center gap-2">
        <Icon name="AlertTriangle" size={22} /> {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 items-start text-foreground text-base">
            <span className="text-destructive font-bold mt-0.5">—</span> {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function InfoBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-accent/10 border-2 border-accent/30 rounded-2xl p-6">
      <h3 className="font-serif font-bold text-xl text-foreground mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 items-start text-foreground text-base">
            <span className="text-accent font-bold mt-0.5">✓</span> {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─── PHONE PAGE ─── */
function PhonePage({ navigate }: { navigate: (s: Section) => void }) {
  return (
    <div className="space-y-8">
      <div>
        <button onClick={() => navigate("elderly")} className="text-primary hover:underline text-sm flex items-center gap-1 mb-4">
          <Icon name="ChevronLeft" size={16} /> Назад
        </button>
        <div className="flex items-center gap-4 mb-2">
          <span className="text-5xl">📱</span>
          <h1 className="font-serif font-black text-3xl sm:text-4xl text-foreground">Телефон и связь</h1>
        </div>
        <p className="text-muted-foreground text-lg">Как звонить, писать сообщения и пользоваться телефоном</p>
      </div>
      <StepBlock title="Как позвонить" steps={[
        "Найдите зелёную трубку на экране и нажмите на неё",
        "Нажмите «Контакты» — это список ваших знакомых",
        "Найдите нужное имя и нажмите на него",
        "Нажмите зелёную кнопку вызова",
      ]} />
      <StepBlock title="Как отправить СМС (сообщение)" steps={[
        "Найдите «Сообщения» на экране и откройте",
        "Нажмите «+» или значок карандаша",
        "Выберите контакт из списка",
        "Напечатайте текст в строке внизу экрана",
        "Нажмите «Отправить» или стрелочку",
      ]} />
      <StepBlock title="Как сфотографировать" steps={[
        "Найдите «Камера» на экране телефона",
        "Направьте телефон на то, что хотите сфотографировать",
        "Нажмите большую круглую кнопку в центре экрана",
      ]} />
      <StepBlock title="Как отправить фото" steps={[
        "Откройте «Сообщения»",
        "Выберите человека, которому хотите отправить",
        "Нажмите «+» рядом с полем ввода",
        "Выберите «Фотография» из галереи",
        "Нажмите «Отправить»",
      ]} />
      <InfoBlock title="Полезные советы" items={[
        "Увеличить текст: «Настройки» → «Экран» → «Размер текста»",
        "Громкость регулируется кнопками сбоку телефона",
        "Если пропало приложение — проведите пальцем вверх по экрану",
      ]} />
    </div>
  );
}

/* ─── BANK PAGE ─── */
function BankPage({ navigate }: { navigate: (s: Section) => void }) {
  return (
    <div className="space-y-8">
      <div>
        <button onClick={() => navigate("elderly")} className="text-primary hover:underline text-sm flex items-center gap-1 mb-4">
          <Icon name="ChevronLeft" size={16} /> Назад
        </button>
        <div className="flex items-center gap-4 mb-2">
          <span className="text-5xl">💳</span>
          <h1 className="font-serif font-black text-3xl sm:text-4xl text-foreground">Банки и безопасность</h1>
        </div>
        <p className="text-muted-foreground text-lg">Как пользоваться банком и защититься от мошенников</p>
      </div>
      <div className="bg-white rounded-2xl border-2 border-border p-6 space-y-4">
        <h3 className="font-serif font-bold text-xl text-foreground">Как отличить настоящее приложение банка</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-accent/10 rounded-xl p-4 border border-accent/30">
            <div className="font-bold text-accent mb-2 flex items-center gap-2"><Icon name="CheckCircle" size={18} /> Настоящее</div>
            <ul className="space-y-1 text-sm text-foreground">
              <li>✓ Скачано из Play Market или App Store</li>
              <li>✓ Аккуратный значок без ошибок</li>
              <li>✓ Не просит данные карты при входе</li>
              <li>✓ Не требует PIN-код посторонним</li>
            </ul>
          </div>
          <div className="bg-destructive/10 rounded-xl p-4 border border-destructive/30">
            <div className="font-bold text-destructive mb-2 flex items-center gap-2"><Icon name="XCircle" size={18} /> Фальшивое</div>
            <ul className="space-y-1 text-sm text-foreground">
              <li>— Пугает и торопит вас</li>
              <li>— Требует номер карты</li>
              <li>— Просит назвать PIN или код из СМС</li>
              <li>— Не из официального магазина</li>
            </ul>
          </div>
        </div>
      </div>
      <StepBlock title="Как проверить баланс" steps={[
        "Откройте приложение банка",
        "Войдите с вашим паролем",
        "На главной странице или в разделе «Карты» увидите баланс",
      ]} />
      <StepBlock title="Как сделать перевод" steps={[
        "Откройте приложение банка",
        "Найдите раздел «Переводы»",
        "Выберите «По номеру телефона»",
        "Введите номер телефона получателя",
        "Укажите сумму и нажмите «Перевести»",
        "Проверьте все данные и подтвердите",
      ]} />
      <WarnBlock title="Мошенники — будьте осторожны!" items={[
        "Звонки «из банка, полиции или соцслужбы» — банк не звонит первым",
        "СМС «карта заблокирована» или «подтвердите операцию» — не верьте",
        "Сайты с ошибками, которые просят ввести номер карты",
        "«Соцработники» без удостоверений у вашей двери",
        "Если пугают или торопят — это точно мошенники. Положите трубку.",
      ]} />
      <div className="bg-primary/10 border-2 border-primary/30 rounded-2xl p-6">
        <h3 className="font-serif font-bold text-xl text-foreground mb-3 flex items-center gap-2">
          <Icon name="Phone" size={20} /> Если что-то случилось
        </h3>
        <p className="text-foreground text-base">
          Позвоните по номеру на обратной стороне вашей банковской карты. Там всегда есть телефон горячей линии банка.
        </p>
      </div>
    </div>
  );
}

/* ─── GOSUSLUGI PAGE ─── */
function GosuslugiPage({ navigate }: { navigate: (s: Section) => void }) {
  return (
    <div className="space-y-8">
      <div>
        <button onClick={() => navigate("elderly")} className="text-primary hover:underline text-sm flex items-center gap-1 mb-4">
          <Icon name="ChevronLeft" size={16} /> Назад
        </button>
        <div className="flex items-center gap-4 mb-2">
          <span className="text-5xl">🏛</span>
          <h1 className="font-serif font-black text-3xl sm:text-4xl text-foreground">Госуслуги</h1>
        </div>
        <p className="text-muted-foreground text-lg">Запись к врачу, справки, документы — всё в одном месте</p>
      </div>
      <div className="bg-white rounded-2xl border-2 border-border p-6">
        <h3 className="font-serif font-bold text-xl text-foreground mb-4">Что такое Госуслуги?</h3>
        <p className="text-foreground text-base leading-relaxed mb-4">
          Это официальный сайт и приложение правительства России. Здесь можно записаться к врачу, получить справки и документы, записаться в МФЦ — всё без похода в очередь.
        </p>
        <div className="mt-4 grid sm:grid-cols-2 gap-3">
          <div className="bg-muted rounded-xl p-3 text-sm">
            <div className="font-bold text-foreground mb-1">Как выглядит сайт</div>
            <div className="text-muted-foreground">Синий верхний бар, кнопка «Войти» справа, большая строка поиска</div>
          </div>
          <div className="bg-muted rounded-xl p-3 text-sm">
            <div className="font-bold text-foreground mb-1">Как выглядит приложение</div>
            <div className="text-muted-foreground">Синяя иконка, белая строка поиска, разделы «Услуги», «Документы», «Моё здоровье»</div>
          </div>
        </div>
      </div>
      <StepBlock title="Как войти в Госуслуги" steps={[
        "Откройте приложение или сайт gosuslugi.ru",
        "Нажмите «Войти»",
        "Введите ваш номер телефона",
        "На телефон придёт код из СМС — введите его",
      ]} />
      <StepBlock title="Как установить приложение" steps={[
        "Откройте Play Market на телефоне",
        "В строке поиска напечатайте «Госуслуги»",
        "Найдите приложение с синей иконкой",
        "Нажмите «Установить» и дождитесь загрузки",
      ]} />
      <StepBlock title="Как записаться к врачу" steps={[
        "Откройте приложение Госуслуги",
        "Найдите раздел «Моё здоровье» (красное сердечко)",
        "Нажмите «Запись к врачу»",
        "Выберите специальность врача",
        "Выберите удобную дату и время",
        "Подтвердите запись",
      ]} />
      <StepBlock title="Как получить справку" steps={[
        "Откройте приложение Госуслуги",
        "Перейдите в раздел «Услуги»",
        "В строке поиска напечатайте «Справка»",
        "Выберите нужный вид справки",
        "Нажмите «Получить»",
      ]} />
      <WarnBlock title="Осторожно — поддельные сайты!" items={[
        "У настоящего приложения — синяя иконка",
        "На поддельных сайтах есть реклама и они требуют номер карты",
        "Госуслуги никогда не просят данные банковской карты",
      ]} />
    </div>
  );
}

/* ─── EVERYDAY PAGE ─── */
function EverydayPage({ navigate }: { navigate: (s: Section) => void }) {
  const situations = [
    {
      emoji: "🛒",
      title: "Магазин",
      items: ["Тележка — это большая корзина на колёсах у входа", "Корзина — маленькая, для небольших покупок", "Оплатить: нажмите зелёную кнопку «Оплатить» на кассе", "Терминал — это экран с цифрами, куда вставляют карту"],
    },
    {
      emoji: "💊",
      title: "Аптека",
      items: ["Рецепт — это бумага от врача с названием лекарства", "Касса — как в обычном магазине", "Можно попросить фармацевта найти нужное лекарство"],
    },
    {
      emoji: "🚌",
      title: "Транспорт",
      items: ["Номер автобуса — на табличке спереди и сбоку", "Цена маршрутки — написана на стекле или у водителя", "Остановка — место, где автобус останавливается"],
    },
    {
      emoji: "🏥",
      title: "Больница",
      items: ["Регистратура — окно или стойка при входе, там записывают", "Кабинет — комната врача, номер написан на двери", "Если не знаете куда идти — спросите на регистратуре"],
    },
    {
      emoji: "📮",
      title: "Почта",
      items: ["Возьмите талон — белый чек у входа или в автомате", "На табло появится ваш номер", "Подойдите к окну с вашим номером"],
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <button onClick={() => navigate("elderly")} className="text-primary hover:underline text-sm flex items-center gap-1 mb-4">
          <Icon name="ChevronLeft" size={16} /> Назад
        </button>
        <div className="flex items-center gap-4 mb-2">
          <span className="text-5xl">🧩</span>
          <h1 className="font-serif font-black text-3xl sm:text-4xl text-foreground">Бытовые ситуации</h1>
        </div>
        <p className="text-muted-foreground text-lg">Магазин, аптека, транспорт, больница, почта</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        {situations.map((sit) => (
          <div key={sit.title} className="bg-white rounded-2xl border-2 border-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">{sit.emoji}</span>
              <h3 className="font-serif font-bold text-xl text-foreground">{sit.title}</h3>
            </div>
            <ul className="space-y-2">
              {sit.items.map((item, i) => (
                <li key={i} className="flex gap-3 items-start text-foreground text-base">
                  <span className="text-primary font-bold mt-0.5">•</span> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <InfoBlock title="Если не знаете что делать" items={[
        "Попросите сотрудника о помощи — они обязаны помочь",
        "Не стесняйтесь переспросить — это нормально",
        "Никуда не торопитесь — берите столько времени, сколько нужно",
      ]} />
    </div>
  );
}

/* ─── YOUTH PAGE ─── */
function YouthPage() {
  const tips = [
    {
      emoji: "💬",
      title: "Как говорить",
      items: ["Спокойно, коротко, без спешки", "Показывайте пальцем на экране что и куда нажать", "Не говорите «это же просто» — для вас просто, для них новое"],
    },
    {
      emoji: "📖",
      title: "Как объяснять",
      items: ["Сначала покажите значок или кнопку", "Затем покажите действие сами", "Дайте человеку повторить самостоятельно", "Хвалите за каждый шаг — это важно"],
    },
    {
      emoji: "🤝",
      title: "Как поддерживать",
      items: [
        "Говорите: «Мы вместе», «Это нормально», «Вы хорошо справляетесь»",
        "Не говорите: «Я же объяснял», «Опять забыли?»",
        "Один раз забыть — это нормально. Повторите спокойно.",
      ],
    },
    {
      emoji: "🚶",
      title: "Как сопровождать",
      items: [
        "Объясняйте заранее, что будет происходить",
        "Делите задачу на маленькие шаги — не больше одного за раз",
        "Следите за тем, не устал ли человек",
      ],
    },
    {
      emoji: "🔇",
      title: "Если человек нервничает",
      items: [
        "Замедлитесь. Сделайте паузу.",
        "Скажите: «Мы никуда не торопимся»",
        "Предложите попробовать в другой раз, если совсем тяжело",
      ],
    },
    {
      emoji: "👁",
      title: "Если плохо слышит или видит",
      items: [
        "Говорите чётко, смотрите в лицо",
        "Увеличьте текст на экране телефона",
        "Включите яркость на максимум",
        "Напишите инструкцию на бумаге крупными буквами",
      ],
    },
  ];

  return (
    <div className="space-y-8">
      <div className="bg-secondary/20 border-2 border-secondary/40 rounded-3xl p-8">
        <div className="text-5xl mb-4">⭐</div>
        <h1 className="font-serif font-black text-3xl sm:text-4xl text-foreground mb-3">Для молодёжи и волонтёров</h1>
        <p className="text-muted-foreground text-lg max-w-xl">
          Как помогать старшим — уважительно, терпеливо и эффективно. Без давления и без спешки.
        </p>
      </div>

      <div className="bg-primary/10 border-2 border-primary/30 rounded-2xl p-6">
        <h2 className="font-serif font-bold text-xl text-foreground mb-3 flex items-center gap-2">
          <Icon name="Shield" size={20} /> Главное правило о безопасности
        </h2>
        <p className="text-foreground text-base leading-relaxed">
          Объясните старшим три простых правила: <strong>«Если пугают — мошенники. Если торопят — мошенники. Если просят данные карты — мошенники».</strong> Повторяйте это регулярно.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {tips.map((tip) => (
          <div key={tip.title} className="bg-white rounded-2xl border-2 border-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">{tip.emoji}</span>
              <h3 className="font-serif font-bold text-xl text-foreground">{tip.title}</h3>
            </div>
            <ul className="space-y-2">
              {tip.items.map((item, i) => (
                <li key={i} className="flex gap-3 items-start text-foreground text-base">
                  <span className="text-secondary font-bold mt-0.5">★</span> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── ABOUT PAGE ─── */
function AboutPage({ navigate }: { navigate: (s: Section) => void }) {
  return (
    <div className="space-y-8">
      <div className="text-center py-6">
        <div className="text-6xl mb-4">🌉</div>
        <h1 className="font-serif font-black text-3xl sm:text-4xl text-foreground mb-3">О проекте</h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          «Мост поколений» — тёплый и спокойный ресурс для двух поколений
        </p>
      </div>

      <div className="bg-white rounded-2xl border-2 border-border p-7">
        <h2 className="font-serif font-bold text-2xl text-foreground mb-4">Наша цель</h2>
        <p className="text-foreground text-base leading-relaxed mb-4">
          Мы создали этот сайт, чтобы пожилым людям было проще и спокойнее пользоваться телефоном, банком, Госуслугами и разбираться в бытовых ситуациях.
        </p>
        <p className="text-foreground text-base leading-relaxed">
          А молодёжи — легче и уважительнее помогать старшим. Каждый раздел можно читать отдельно. Каждый шаг можно повторять сколько нужно.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {[
          { emoji: "🫂", title: "Уважение", desc: "Здесь нет глупых вопросов. Мы обращаемся к каждому с уважением и вниманием." },
          { emoji: "🕊", title: "Спокойствие", desc: "Никакой спешки. Можно читать медленно, возвращаться и перечитывать." },
          { emoji: "💡", title: "Понятность", desc: "Только простые слова. Никакого жаргона, аббревиатур и технических терминов." },
          { emoji: "🛡", title: "Безопасность", desc: "Учим распознавать мошенников и защищать себя от обмана." },
        ].map((v) => (
          <div key={v.title} className="bg-white rounded-2xl border-2 border-border p-6">
            <div className="text-4xl mb-3">{v.emoji}</div>
            <h3 className="font-serif font-bold text-xl text-foreground mb-2">{v.title}</h3>
            <p className="text-muted-foreground text-base">{v.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-primary rounded-2xl p-7 text-center">
        <p className="font-serif font-bold text-xl text-white mb-2">Наша миссия</p>
        <p className="text-blue-200 text-base leading-relaxed">
          Сделать жизнь чуть удобнее каждому, кто открывает этот сайт
        </p>
        <button
          onClick={() => navigate("home")}
          className="mt-5 bg-secondary text-secondary-foreground font-bold px-6 py-3 rounded-xl hover:bg-secondary/90 transition-all"
        >
          На главную
        </button>
      </div>
    </div>
  );
}
