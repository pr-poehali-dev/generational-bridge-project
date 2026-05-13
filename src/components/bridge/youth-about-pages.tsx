import Icon from "@/components/ui/icon";
import { Section } from "./types";

/* ─── YOUTH PAGE ─── */
export function YouthPage() {
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
      <div className="bg-secondary/20 border-2 border-secondary/40 rounded-3xl p-8 flex flex-col sm:flex-row items-center gap-6">
        <div className="flex-1">
          <div className="text-5xl mb-4">⭐</div>
          <h1 className="font-serif font-black text-3xl sm:text-4xl text-foreground mb-3">Для молодёжи и волонтёров</h1>
          <p className="text-muted-foreground text-lg max-w-xl">
            Как помогать старшим — уважительно, терпеливо и эффективно. Без давления и без спешки.
          </p>
        </div>
        <img
          src="https://cdn.poehali.dev/projects/dca81a1f-79e8-42d9-aa90-a134fc117a6d/files/acf9914b-85b8-4eb9-8f55-120ea78a2d72.jpg"
          alt="Молодой человек помогает пожилому разобраться с планшетом"
          className="w-44 sm:w-52 rounded-2xl shadow-lg object-cover flex-shrink-0 mx-auto sm:mx-0"
          style={{ aspectRatio: "1/1" }}
        />
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
export function AboutPage({ navigate }: { navigate: (s: Section) => void }) {
  return (
    <div className="space-y-8">
      <div className="text-center py-6">
        <img
          src="https://cdn.poehali.dev/projects/dca81a1f-79e8-42d9-aa90-a134fc117a6d/files/4d0ff720-664f-454a-9894-7b5da6ada42b.jpg"
          alt="Мост между поколениями"
          className="w-64 sm:w-80 rounded-3xl shadow-lg object-cover mx-auto mb-6"
          style={{ aspectRatio: "1/1" }}
        />
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