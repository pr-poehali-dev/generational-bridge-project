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
        <div className="flex items-center gap-4 mb-2">
          <span className="text-5xl">📱</span>
          <h1 className="font-serif font-black text-3xl sm:text-4xl text-foreground">Телефон и связь</h1>
        </div>
        <p className="text-muted-foreground text-lg">Как звонить, писать сообщения и пользоваться телефоном</p>
      </div>

      {/* Реальный скриншот — приложение звонков Android */}
      <div className="bg-white rounded-2xl border-2 border-border p-5">
        <p className="font-serif font-bold text-lg text-foreground mb-1">Так выглядит приложение «Телефон»:</p>
        <p className="text-muted-foreground text-sm mb-4">Именно такой экран вы увидите при нажатии на зелёную трубку</p>
        <div className="flex flex-col sm:flex-row gap-5 items-start">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Android_lollipop_phone_app.jpg"
            alt="Реальный скриншот приложения Телефон на Android"
            className="w-44 rounded-2xl shadow-md object-cover flex-shrink-0 mx-auto sm:mx-0 border border-border"
          />
          <ul className="space-y-3 text-base text-foreground pt-1">
            <li className="flex gap-2 items-start"><span className="text-green-600 font-bold text-lg leading-none mt-0.5">●</span><span>Зелёная кнопка внизу — позвонить</span></li>
            <li className="flex gap-2 items-start"><span className="text-red-500 font-bold text-lg leading-none mt-0.5">●</span><span>Красная кнопка — завершить звонок</span></li>
            <li className="flex gap-2 items-start"><span className="text-blue-500 font-bold text-lg leading-none mt-0.5">●</span><span>«Контакты» — ваш список знакомых</span></li>
            <li className="flex gap-2 items-start"><span className="text-blue-500 font-bold text-lg leading-none mt-0.5">●</span><span>«Набор номера» — ввести цифры вручную</span></li>
          </ul>
        </div>
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
export function BankPage({ navigate }: { navigate: (s: Section) => void }) {
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
      {/* Реальный скриншот Android — домашний экран */}
      <div className="bg-white rounded-2xl border-2 border-border p-5">
        <p className="font-serif font-bold text-lg text-foreground mb-1">Как выглядит главный экран Android:</p>
        <p className="text-muted-foreground text-sm mb-4">Приложение банка находится среди значков — ищите его название</p>
        <div className="flex flex-col sm:flex-row gap-5 items-start">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/58/Android_Lollipop_screenshot.png"
            alt="Реальный скриншот главного экрана Android"
            className="w-44 rounded-2xl shadow-md object-contain flex-shrink-0 mx-auto sm:mx-0 border border-border bg-gray-50"
            style={{ maxHeight: "220px" }}
          />
          <ul className="space-y-3 text-base text-foreground pt-1">
            <li className="flex gap-2 items-start"><span className="text-blue-500 font-bold text-lg leading-none mt-0.5">●</span><span>Значки приложений — на главном экране</span></li>
            <li className="flex gap-2 items-start"><span className="text-blue-500 font-bold text-lg leading-none mt-0.5">●</span><span>Нажмите один раз на значок банка, чтобы открыть</span></li>
            <li className="flex gap-2 items-start"><span className="text-green-600 font-bold text-lg leading-none mt-0.5">●</span><span>Если не видите — проведите пальцем вверх</span></li>
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
      {/* Реальный скриншот Play Market */}
      <div className="bg-white rounded-2xl border-2 border-border p-5">
        <p className="font-serif font-bold text-lg text-foreground mb-1">Как выглядит Google Play (Плэй Маркет):</p>
        <p className="text-muted-foreground text-sm mb-4">Именно здесь нужно найти и скачать приложение «Госуслуги»</p>
        <div className="flex flex-col sm:flex-row gap-5 items-start">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/59/Google_Play_App_Download.png"
            alt="Реальный скриншот Google Play Market"
            className="w-44 rounded-2xl shadow-md object-contain flex-shrink-0 mx-auto sm:mx-0 border border-border bg-gray-50"
            style={{ maxHeight: "220px" }}
          />
          <ul className="space-y-3 text-base text-foreground pt-1">
            <li className="flex gap-2 items-start"><span className="text-blue-500 font-bold text-lg leading-none mt-0.5">●</span><span>Строка поиска вверху — введите «Госуслуги»</span></li>
            <li className="flex gap-2 items-start"><span className="text-green-600 font-bold text-lg leading-none mt-0.5">●</span><span>Зелёная кнопка «Установить» — нажмите её</span></li>
            <li className="flex gap-2 items-start"><span className="text-blue-500 font-bold text-lg leading-none mt-0.5">●</span><span>Иконка с синим цветом — это настоящее приложение</span></li>
            <li className="flex gap-2 items-start"><span className="text-red-500 font-bold text-lg leading-none mt-0.5">⚠</span><span>Скачивайте только из Play Market или App Store</span></li>
          </ul>
        </div>
      </div>

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