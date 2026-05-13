import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Section } from "./types";

const FAQ_ITEMS = [
  {
    category: "📱 Телефон",
    questions: [
      {
        q: "Телефон завис и не реагирует на нажатия — что делать?",
        a: "Зажмите кнопку включения сбоку телефона на 10 секунд. Телефон выключится и включится заново. Это безопасно — ничего не удалится.",
      },
      {
        q: "Куда пропало приложение с экрана?",
        a: "Проведите пальцем снизу вверх по экрану — откроется список всех приложений. Там найдёте любое. Можно снова вынести его на главный экран — удерживайте значок и перетащите.",
      },
      {
        q: "Телефон звонит, но я не успеваю принять — как быть?",
        a: "Проведите пальцем по зелёной трубке вправо (или нажмите зелёную кнопку). Если не успели — перезвоните: откройте приложение звонков, там будет пропущенный вызов красного цвета.",
      },
      {
        q: "Экран потемнел и не включается — что случилось?",
        a: "Скорее всего, телефон просто заблокировался. Нажмите кнопку сбоку один раз — экран загорится. Затем проведите пальцем вверх и введите PIN-код или нажмите на отпечаток пальца.",
      },
      {
        q: "Как увеличить буквы, чтобы лучше видеть?",
        a: "Откройте «Настройки» → найдите «Экран» или «Дисплей» → нажмите «Размер текста» → передвиньте ползунок вправо. Изменения видны сразу.",
      },
    ],
  },
  {
    category: "💳 Банк и деньги",
    questions: [
      {
        q: "Забыл пароль от приложения банка — что делать?",
        a: "Нажмите «Забыли пароль?» на экране входа. Банк пришлёт СМС с кодом на ваш номер телефона. Введите код и придумайте новый пароль.",
      },
      {
        q: "Пришло СМС «ваша карта заблокирована» — что делать?",
        a: "Не перезванивайте на номер из СМС и не переходите по ссылкам. Это мошенники. Позвоните на номер, написанный на обратной стороне вашей банковской карты — там настоящая горячая линия.",
      },
      {
        q: "Перевёл деньги не тому человеку — можно вернуть?",
        a: "Позвоните на горячую линию банка немедленно (номер на карте). Если деньги ещё не дошли — банк может отменить перевод. Чем быстрее позвонить, тем больше шансов.",
      },
      {
        q: "Как понять, что приложение банка настоящее?",
        a: "Настоящее приложение: скачано из Play Market или App Store, аккуратный значок, не просит данные карты при входе. Если приложение пугает или требует номер карты — закройте его немедленно.",
      },
    ],
  },
  {
    category: "🏛 Госуслуги",
    questions: [
      {
        q: "Не помню пароль от Госуслуг — как восстановить?",
        a: "На странице входа нажмите «Я не помню пароль». Введите номер телефона — придёт СМС с кодом. Введите код и создайте новый пароль. Если это не помогло, обратитесь в МФЦ с паспортом.",
      },
      {
        q: "Запись к врачу через Госуслуги — это удобно?",
        a: "Да! Откройте приложение → «Моё здоровье» (красное сердечко) → «Запись к врачу». Выберите поликлинику, врача, день и время. Подтверждение придёт в СМС. Никаких очередей.",
      },
      {
        q: "Сайт Госуслуг выглядит странно и просит карту — это нормально?",
        a: "Нет! Настоящий сайт gosuslugi.ru никогда не просит данные карты. Закройте этот сайт — это подделка. Настоящий сайт: синяя шапка, кнопка «Войти» в правом углу, нет рекламы.",
      },
      {
        q: "Как получить справку через Госуслуги?",
        a: "Откройте приложение → раздел «Услуги» → в строке поиска напишите название справки (например «справка о регистрации») → выберите нужную → нажмите «Получить». Справка придёт в личный кабинет.",
      },
    ],
  },
  {
    category: "🛡 Безопасность",
    questions: [
      {
        q: "Как понять, что мне звонят мошенники?",
        a: "Три признака мошенников: пугают («ваша карта взломана»), торопят («срочно переведите деньги»), просят данные карты или коды из СМС. Настоящий банк никогда не просит коды. Положите трубку и перезвоните в банк сами.",
      },
      {
        q: "Случайно нажал на подозрительную ссылку — что делать?",
        a: "Закройте браузер сразу. Не вводите никаких данных. Если успели ввести данные карты — немедленно позвоните в банк на номер с обратной стороны карты и скажите о возможном мошенничестве.",
      },
      {
        q: "Незнакомец хочет помочь с телефоном в общественном месте — доверять?",
        a: "Будьте осторожны. Не передавайте телефон незнакомым людям, особенно если они предлагают помощь первыми. Для помощи лучше обратитесь к знакомым или в официальный сервисный центр.",
      },
    ],
  },
];

export function FaqPage({ navigate }: { navigate: (s: Section) => void }) {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggle = (key: string) => setOpenItem(openItem === key ? null : key);

  return (
    <div className="space-y-8">
      <div>
        <button
          onClick={() => navigate("home")}
          className="text-primary hover:underline text-sm flex items-center gap-1 mb-4"
        >
          <Icon name="ChevronLeft" size={16} /> Главная
        </button>
        <div className="bg-primary rounded-3xl p-8 text-primary-foreground flex flex-col sm:flex-row items-center gap-6">
          <div className="flex-1">
            <div className="text-5xl mb-4">❓</div>
            <h1 className="font-serif font-black text-3xl sm:text-4xl text-white mb-3">
              Частые вопросы
            </h1>
            <p className="text-blue-200 text-lg max-w-xl">
              Ответы на самые распространённые трудности. Найдите свой вопрос и прочитайте простой ответ.
            </p>
          </div>
        </div>
      </div>

      {/* Search hint */}
      <div className="bg-secondary/15 border-2 border-secondary/40 rounded-2xl p-5 flex gap-3 items-start">
        <span className="text-2xl flex-shrink-0">💡</span>
        <p className="text-foreground text-base">
          Не нашли ответ? Попробуйте заглянуть в нужный раздел — там всё объяснено по шагам.
        </p>
      </div>

      {/* FAQ sections */}
      {FAQ_ITEMS.map((section) => (
        <div key={section.category} className="space-y-3">
          <h2 className="font-serif font-bold text-xl text-foreground flex items-center gap-2">
            {section.category}
          </h2>
          <div className="space-y-2">
            {section.questions.map((item, qi) => {
              const key = `${section.category}-${qi}`;
              const isOpen = openItem === key;
              return (
                <div
                  key={key}
                  className={`bg-card rounded-2xl border-2 transition-all overflow-hidden ${
                    isOpen ? "border-primary shadow-md" : "border-border hover:border-primary/40"
                  }`}
                >
                  <button
                    onClick={() => toggle(key)}
                    className="w-full text-left px-6 py-4 flex items-center justify-between gap-4"
                  >
                    <span className="font-semibold text-foreground text-base leading-snug">
                      {item.q}
                    </span>
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                        isOpen ? "bg-primary text-white rotate-180" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <Icon name="ChevronDown" size={18} />
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 animate-fade-in">
                      <div className="h-px bg-border mb-4" />
                      <p className="text-foreground text-base leading-relaxed">{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* CTA */}
      <div className="bg-accent/10 border-2 border-accent/30 rounded-2xl p-6 text-center">
        <p className="font-serif font-bold text-xl text-foreground mb-2">Нужна помощь рядом?</p>
        <p className="text-muted-foreground text-base mb-4">
          Попросите близкого человека прочитать раздел «Молодёжи» — там написано, как помочь без давления и спешки.
        </p>
        <button
          onClick={() => navigate("youth")}
          className="bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition-all"
        >
          ⭐ Раздел для помощников
        </button>
      </div>
    </div>
  );
}
