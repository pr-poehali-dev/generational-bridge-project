import Icon from "@/components/ui/icon";
import { Section } from "./types";
import { StepBlock, WarnBlock, InfoBlock } from "./shared-blocks";

/* ─── HOME PAGE ─── */
export function HomePage({
  navigate,
  elderlySubItems,
}: {
  navigate: (s: Section) => void;
  elderlySubItems: { id: Section; label: string; emoji: string; desc: string }[];
}) {
  return (
    <div className="space-y-12">
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

        {/* Hero illustration */}
        <div className="flex justify-center mb-8">
          <img
            src="https://cdn.poehali.dev/projects/dca81a1f-79e8-42d9-aa90-a134fc117a6d/files/4d0ff720-664f-454a-9894-7b5da6ada42b.jpg"
            alt="Мост поколений — пожилые и молодые люди"
            className="w-72 sm:w-96 rounded-3xl shadow-lg object-cover"
            style={{ aspectRatio: "1/1" }}
          />
        </div>

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

      {/* FAQ promo */}
      <section className="bg-primary/8 border-2 border-primary/25 rounded-3xl p-7 flex flex-col sm:flex-row items-center gap-6">
        <div className="text-5xl">❓</div>
        <div className="flex-1">
          <h2 className="font-serif font-bold text-xl text-foreground mb-2">Есть вопрос?</h2>
          <p className="text-muted-foreground text-base mb-4">Собрали ответы на самые частые трудности — с телефоном, банком и Госуслугами.</p>
          <button
            onClick={() => navigate("faq")}
            className="bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition-all"
          >
            ❓ Частые вопросы
          </button>
        </div>
      </section>
    </div>
  );
}

/* ─── ELDERLY PAGE ─── */
export function ElderlyPage({
  navigate,
  elderlySubItems,
}: {
  navigate: (s: Section) => void;
  elderlySubItems: { id: Section; label: string; emoji: string; desc: string }[];
}) {
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

/* ─── PHONE PAGE ─── */
export function PhonePage({ navigate }: { navigate: (s: Section) => void }) {
  return (
    <div className="space-y-8">
      <div>
        <button onClick={() => navigate("elderly")} className="text-primary hover:underline text-sm flex items-center gap-1 mb-4">
          <Icon name="ChevronLeft" size={16} /> Назад
        </button>
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-5xl">📱</span>
              <h1 className="font-serif font-black text-3xl sm:text-4xl text-foreground">Телефон и связь</h1>
            </div>
            <p className="text-muted-foreground text-lg">Как звонить, писать сообщения и пользоваться телефоном</p>
          </div>
          <img
            src="https://cdn.poehali.dev/projects/dca81a1f-79e8-42d9-aa90-a134fc117a6d/files/8a848929-842d-4c7e-a8ab-c90aa2d2166f.jpg"
            alt="Смартфон с иконкой звонка"
            className="w-36 sm:w-44 rounded-2xl shadow-md object-cover flex-shrink-0 mx-auto sm:mx-0"
            style={{ aspectRatio: "1/1" }}
          />
        </div>
        <div className="mt-6 bg-blue-50 border-2 border-primary/20 rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-5">
          <img
            src="https://cdn.poehali.dev/projects/dca81a1f-79e8-42d9-aa90-a134fc117a6d/files/69fbe449-437c-45d2-9987-f25df06a0a28.jpg"
            alt="Пожилая женщина с телефоном"
            className="w-32 rounded-2xl shadow object-cover flex-shrink-0"
            style={{ aspectRatio: "1/1" }}
          />
          <p className="text-foreground text-base leading-relaxed font-medium">
            Телефон — это просто инструмент. Как выучить новую дорогу: сначала страшно, потом привычно. Здесь всё объяснено по шагам — спокойно и без спешки.
          </p>
        </div>
      </div>
      {/* Screen illustration: call */}
      <div className="bg-card rounded-2xl border-2 border-border p-5">
        <p className="font-serif font-bold text-lg text-foreground mb-4">Так выглядит экран звонка:</p>
        <div className="flex flex-col sm:flex-row gap-5 items-center">
          <img
            src="https://cdn.poehali.dev/projects/dca81a1f-79e8-42d9-aa90-a134fc117a6d/files/f06ced1e-38e0-4315-b799-905eacc7cf93.jpg"
            alt="Экран звонилки на телефоне"
            className="w-48 sm:w-56 rounded-2xl shadow-md object-cover flex-shrink-0 mx-auto sm:mx-0"
            style={{ aspectRatio: "1/1" }}
          />
          <ul className="space-y-2 text-base text-foreground">
            <li className="flex gap-2"><span className="text-accent font-bold">✓</span> Зелёная трубка — позвонить</li>
            <li className="flex gap-2"><span className="text-accent font-bold">✓</span> Красная трубка — завершить звонок</li>
            <li className="flex gap-2"><span className="text-accent font-bold">✓</span> «Контакты» — список всех знакомых</li>
            <li className="flex gap-2"><span className="text-accent font-bold">✓</span> «Недавние» — кому вы звонили</li>
          </ul>
        </div>
      </div>

      <StepBlock title="Как позвонить" steps={[
        "Найдите зелёную трубку на экране и нажмите на неё",
        "Нажмите «Контакты» — это список ваших знакомых",
        "Найдите нужное имя и нажмите на него",
        "Нажмите зелёную кнопку вызова",
      ]} />

      {/* Screen illustration: SMS */}
      <div className="bg-card rounded-2xl border-2 border-border p-5">
        <p className="font-serif font-bold text-lg text-foreground mb-4">Так выглядит экран сообщений:</p>
        <div className="flex flex-col sm:flex-row gap-5 items-center">
          <img
            src="https://cdn.poehali.dev/projects/dca81a1f-79e8-42d9-aa90-a134fc117a6d/files/52bf3bdf-3af3-4535-b85f-f2b883a1f5ae.jpg"
            alt="Экран сообщений на телефоне"
            className="w-48 sm:w-56 rounded-2xl shadow-md object-cover flex-shrink-0 mx-auto sm:mx-0"
            style={{ aspectRatio: "1/1" }}
          />
          <ul className="space-y-2 text-base text-foreground">
            <li className="flex gap-2"><span className="text-accent font-bold">✓</span> Пузырьки — это сообщения</li>
            <li className="flex gap-2"><span className="text-accent font-bold">✓</span> Строка внизу — место для ввода текста</li>
            <li className="flex gap-2"><span className="text-accent font-bold">✓</span> Стрелочка — кнопка «Отправить»</li>
            <li className="flex gap-2"><span className="text-accent font-bold">✓</span> «+» рядом со строкой — прикрепить фото</li>
          </ul>
        </div>
      </div>

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
export function BankPage({ navigate }: { navigate: (s: Section) => void }) {
  return (
    <div className="space-y-8">
      <div>
        <button onClick={() => navigate("elderly")} className="text-primary hover:underline text-sm flex items-center gap-1 mb-4">
          <Icon name="ChevronLeft" size={16} /> Назад
        </button>
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-5xl">💳</span>
              <h1 className="font-serif font-black text-3xl sm:text-4xl text-foreground">Банки и безопасность</h1>
            </div>
            <p className="text-muted-foreground text-lg">Как пользоваться банком и защититься от мошенников</p>
          </div>
          <img
            src="https://cdn.poehali.dev/projects/dca81a1f-79e8-42d9-aa90-a134fc117a6d/files/52af9668-18ec-4a8f-a1e7-75693207fb4d.jpg"
            alt="Щит защищает от мошенников"
            className="w-36 sm:w-44 rounded-2xl shadow-md object-cover flex-shrink-0 mx-auto sm:mx-0"
            style={{ aspectRatio: "1/1" }}
          />
        </div>
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
      {/* Screen illustration: bank app */}
      <div className="bg-card rounded-2xl border-2 border-border p-5">
        <p className="font-serif font-bold text-lg text-foreground mb-4">Так выглядит настоящее приложение банка:</p>
        <div className="flex flex-col sm:flex-row gap-5 items-center">
          <img
            src="https://cdn.poehali.dev/projects/dca81a1f-79e8-42d9-aa90-a134fc117a6d/files/22fe156f-c57d-477f-89a8-e53deae5be55.jpg"
            alt="Экран банковского приложения"
            className="w-48 sm:w-56 rounded-2xl shadow-md object-cover flex-shrink-0 mx-auto sm:mx-0"
            style={{ aspectRatio: "1/1" }}
          />
          <ul className="space-y-2 text-base text-foreground">
            <li className="flex gap-2"><span className="text-accent font-bold">✓</span> Главный экран показывает баланс карты</li>
            <li className="flex gap-2"><span className="text-accent font-bold">✓</span> Кнопка «Переводы» — для отправки денег</li>
            <li className="flex gap-2"><span className="text-accent font-bold">✓</span> «История» — все ваши операции</li>
            <li className="flex gap-2"><span className="text-destructive font-bold">✗</span> Нет просьбы ввести карту при входе</li>
          </ul>
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
export function GosuslugiPage({ navigate }: { navigate: (s: Section) => void }) {
  return (
    <div className="space-y-8">
      <div>
        <button onClick={() => navigate("elderly")} className="text-primary hover:underline text-sm flex items-center gap-1 mb-4">
          <Icon name="ChevronLeft" size={16} /> Назад
        </button>
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-5xl">🏛</span>
              <h1 className="font-serif font-black text-3xl sm:text-4xl text-foreground">Госуслуги</h1>
            </div>
            <p className="text-muted-foreground text-lg">Запись к врачу, справки, документы — всё в одном месте</p>
          </div>
          <img
            src="https://cdn.poehali.dev/projects/dca81a1f-79e8-42d9-aa90-a134fc117a6d/files/5a93233d-ac1e-4786-85e4-813fa98c3094.jpg"
            alt="Иконка Госуслуг"
            className="w-36 sm:w-44 rounded-2xl shadow-md object-cover flex-shrink-0 mx-auto sm:mx-0"
            style={{ aspectRatio: "1/1" }}
          />
        </div>
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
      {/* Screen illustration: gosuslugi */}
      <div className="bg-card rounded-2xl border-2 border-border p-5">
        <p className="font-serif font-bold text-lg text-foreground mb-4">Так выглядит приложение Госуслуги:</p>
        <div className="flex flex-col sm:flex-row gap-5 items-center">
          <img
            src="https://cdn.poehali.dev/projects/dca81a1f-79e8-42d9-aa90-a134fc117a6d/files/608c806b-01d5-4b01-89d2-8a4ae8a62d89.jpg"
            alt="Экран приложения Госуслуги"
            className="w-48 sm:w-56 rounded-2xl shadow-md object-cover flex-shrink-0 mx-auto sm:mx-0"
            style={{ aspectRatio: "1/1" }}
          />
          <ul className="space-y-2 text-base text-foreground">
            <li className="flex gap-2"><span className="text-accent font-bold">✓</span> Синяя шапка — это настоящие Госуслуги</li>
            <li className="flex gap-2"><span className="text-accent font-bold">✓</span> «Моё здоровье» — запись к врачу</li>
            <li className="flex gap-2"><span className="text-accent font-bold">✓</span> «Документы» — ваши справки и документы</li>
            <li className="flex gap-2"><span className="text-destructive font-bold">✗</span> Нет рекламы и нет просьбы ввести карту</li>
          </ul>
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
export function EverydayPage({ navigate }: { navigate: (s: Section) => void }) {
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