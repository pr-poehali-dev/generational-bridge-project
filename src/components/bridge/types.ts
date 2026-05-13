export type Section = "home" | "elderly" | "youth" | "phone" | "bank" | "gosuslugi" | "everyday" | "about";

export const FONT_SIZES = [
  { label: "А", scale: 1, title: "Обычный" },
  { label: "А", scale: 1.2, title: "Крупный" },
  { label: "А", scale: 1.45, title: "Очень крупный" },
];

export const NAV_ITEMS: { id: Section; label: string; emoji: string }[] = [
  { id: "home", label: "Главная", emoji: "🏠" },
  { id: "elderly", label: "Пожилым 60+", emoji: "🟦" },
  { id: "youth", label: "Молодёжи", emoji: "⭐" },
  { id: "about", label: "О проекте", emoji: "🌉" },
];

export const ELDERLY_SUB_ITEMS: { id: Section; label: string; emoji: string; desc: string }[] = [
  { id: "phone", label: "Телефон и связь", emoji: "📱", desc: "Как звонить, писать СМС, отправлять фото" },
  { id: "bank", label: "Банки и безопасность", emoji: "💳", desc: "Как пользоваться банком и защититься от мошенников" },
  { id: "gosuslugi", label: "Госуслуги", emoji: "🏛", desc: "Как войти, записаться к врачу и получить справку" },
  { id: "everyday", label: "Бытовые ситуации", emoji: "🧩", desc: "Магазин, аптека, транспорт, больница, почта" },
];
