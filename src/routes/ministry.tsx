import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { useState } from "react";
import AnimateHeight from "react-animate-height";
import graseMedia from "@/assets/grasemedia.JPG";
import graseHome from "@/assets/grasehome.JPG";
import graseWorship from "@/assets/graseworship.JPG";
import graseCreative from "@/assets/grasecreative.JPG";
import graseChoir from "@/assets/grasechoir.JPG";
import graseKids from "@/assets/grasekids.JPG";
import graseTeensWorship from "@/assets/graseteensworship.JPG";
import graseCafe from "@/assets/grasecafe.JPG";
import graseWelcomeTeam from "@/assets/grasewelcometeam.JPG";
import shortLogo from "@/assets/shortlogo.svg";
import { getMinistries } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";
import type { Ministry } from "@/lib/sanity/types";

export const Route = createFileRoute("/ministry")({
  head: () => ({
    meta: [
      { title: "Служіння — Церква Благодать" },
      {
        name: "description",
        content:
          "Служіння у церкві «Благодать»: медіа, домашні групи, прославлення, творчість, хор, недільна школа, підліткове прославлення, кафе.",
      },
      { property: "og:title", content: "Служіння — Церква Благодать" },
      { property: "og:description", content: "Всі служіння церкви Благодать." },
    ],
    links: [{ rel: "icon", type: "image/svg+xml", href: shortLogo }],
  }),
  component: MinistryPage,
  loader: async () => {
    const ministries = await getMinistries();
    return { ministries };
  },
});

const fallbackMinistries = [
  {
    _id: "media",
    tag: "GRASE MEDIA",
    title: "Керівник: Іван",
    image: null,
    _fallbackImage: graseMedia,
    content: `Медіаслужіння (GRASE MEDIA) — це голос і обличчя церкви у сучасному світі. Ми допомагаємо доносити Євангеліє через технології, створюючи простір, де люди можуть побачити, почути і пережити Божу присутність навіть на відстані.

Ми проводимо онлайн-трансляції богослужінь, забезпечуємо якісний звук і візуальний супровід, створюємо фото та відео з подій церкви, готуємо презентації для служінь та розвиваємо соцмережі й онлайн-присутність церкви.

Якщо ти любиш творчість, техніку або хочеш навчитися чомусь новому — це місце для тебе! Навіть без досвіду ти можеш стати частиною команди. Звертайся до Івана — будемо раді служити разом!`,
    order: 1,
  },
  {
    _id: "home",
    tag: "GRASE HOME",
    title: "Домашні групи",
    image: null,
    _fallbackImage: graseHome,
    content: `Домашні групи (GRASE HOME) — це місце, де велика церква стає сім'єю. Саме тут формуються глибокі стосунки, приходить підтримка та відбувається справжнє духовне зростання.

Якщо ти хочеш бути частиною живої спільноти — приєднуйся до домашньої групи!`,
    order: 2,
  },
  {
    _id: "worship",
    tag: "GRASE WORSHIP",
    title: "Лідер музичного служіння: Зоряна",
    image: null,
    _fallbackImage: graseWorship,
    content: `Група прославлення церкви "Благодать" (GRASE WORSHIP)

Ми віримо, що Господь кожну людину обдарував талантами і вміннями, які ми можемо у житті використовувати для слави Божої та розширення Його Царства!`,
    order: 3,
  },
  {
    _id: "creative",
    tag: "GRASE CREATIVE",
    title: "Режисер-постановник: Оксана",
    image: null,
    _fallbackImage: graseCreative,
    content: `Театральне служіння церкви "Благодать" (GRASE CREATIVE)

Ми розповідаємо Біблійні сюжети, переносячи їх на сьогодення простою і зрозумілою мовою.`,
    order: 4,
  },
  {
    _id: "choir",
    tag: "GRASE CHOIR",
    title: "Регент хору: Вікторія",
    image: null,
    _fallbackImage: graseChoir,
    content: `Хор ц. Благодать (GRASE CHOIR)

Хорове церковне служіння спрямоване на виховання духовності та емоційного сприйняття і ведуть християн до спільного прославлення Господа.`,
    order: 5,
  },
  {
    _id: "kids",
    tag: "GRASE KIDS",
    title: "Керівник: Вікторія",
    image: null,
    _fallbackImage: graseKids,
    content: `Недільна школа (GRASE KIDS)

Наша місія: Допомагати дітям пізнавати Бога, формувати християнські цінності та розвивати особисті стосунки з Ним у любові та підтримці.`,
    order: 6,
  },
  {
    _id: "teens",
    tag: "GRASE TEENS WORSHIP",
    title: "Лідер: Анастасія",
    image: null,
    _fallbackImage: graseTeensWorship,
    content: `Підліткова група прославлення (GRASE TEENS WORSHIP)

Дитяче та підліткове музичне служіння — це простір, де діти та підлітки можуть відкривати свої таланти і вчитися прославляти Бога через музику.`,
    order: 7,
  },
  {
    _id: "cafe",
    tag: "GRASE CAFE",
    title: "Кафе церкви «БЛАГОДАТЬ»",
    image: null,
    _fallbackImage: graseCafe,
    content: `«Кафе церкви «БЛАГОДАТЬ» (GRASE CAFE) — це місце, де кава поєднується з теплими розмовами.

Ми створили цей простір, щоб кожен міг відчути себе як вдома, знайти нових друзів або просто насолодитися моментом у Божій присутності.`,
    order: 8,
  },
  {
    _id: "welcome",
    tag: "GRASE WELCOME TEAM",
    title: "Команда зустрічі",
    image: null,
    _fallbackImage: graseWelcomeTeam,
    content: `Команда зустрічі (GRASE WELCOME TEAM) — це перші люди, яких бачать гості церкви. Ми створюємо атмосферу щирої гостинності, допомагаємо людям почуватися комфортно та знайомимо їх з життям церкви.`,
    order: 9,
  },
];

function MinistryCard({
  ministry,
  fallbackImage,
}: {
  ministry: Ministry & { _fallbackImage?: string };
  fallbackImage?: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const needsExpansion = ministry.content.length > 350;
  const imageUrl = ministry.image
    ? urlFor(ministry.image).width(1200).height(800).url()
    : fallbackImage || ministry._fallbackImage || "";

  return (
    <div className="mt-16 md:mt-24">
      <h2 className="text-h4 mb-6">{ministry.tag}</h2>
      <div className="w-full">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={ministry.tag}
            loading="lazy"
            width={1200}
            height={800}
            className="w-full aspect-[3/2] object-cover"
          />
        )}
        <div className="bg-secondary/90 backdrop-blur-sm p-6 md:p-8 transition-all duration-500 ease-in-out">
          <h3 className="text-[16px] font-semibold mb-4">{ministry.title}</h3>
          <AnimateHeight duration={700} height={isExpanded ? "auto" : 150}>
            <p className="text-[14px] md:text-[15px] leading-relaxed whitespace-pre-line">
              {ministry.content}
            </p>
          </AnimateHeight>
          {needsExpansion && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-4 px-5 py-2 text-[14px] font-medium bg-white text-black transition-all duration-200 hover:bg-[#E8000D] hover:text-white"
              aria-expanded={isExpanded}
            >
              {isExpanded ? "Менше" : "Більше"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function MinistryPage() {
  const { ministries } = Route.useLoaderData();

  const displayMinistries =
    ministries.length > 0 ? ministries : (fallbackMinistries as unknown as Ministry[]);

  return (
    <PageShell>
      <section className="container-grace pt-6 pb-16 md:pb-24 overflow-hidden">
        <h1 className="text-h3">СЛУЖІННЯ У ЦЕРКВІ "БЛАГОДАТЬ"</h1>

        {displayMinistries.map((ministry) => (
          <MinistryCard
            key={ministry._id}
            ministry={ministry as Ministry & { _fallbackImage?: string }}
          />
        ))}
      </section>
    </PageShell>
  );
}
