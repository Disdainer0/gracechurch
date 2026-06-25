import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { DoveIcon } from "@/components/Logo";
import historyBg from "@/assets/historyphoto.png";
import presentDayBlock from "@/assets/presentdayblock.JPG";
import shortLogo from "@/assets/shortlogo.svg";
import { getHistory } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";

export const Route = createFileRoute("/history")({
  head: () => ({
    meta: [
      { title: "Історія створення — Церква Благодать" },
      {
        name: "description",
        content:
          "Історія створення та розвитку церкви «Благодать» в Калуші: від 1991 року до наших днів.",
      },
      { property: "og:title", content: "Історія створення — Церква Благодать" },
      { property: "og:description", content: "Історія церкви Благодать з 1991 року." },
    ],
    links: [{ rel: "icon", type: "image/svg+xml", href: shortLogo }],
  }),
  component: HistoryPage,
  loader: async () => {
    const history = await getHistory();
    return { history };
  },
});

const fallbackSections = [
  {
    title: "Початок служіння",
    paragraphs: [
      "У 1991 році від Івано-Франківської Церкви Християн Віри Євангельської була утворена домашня група з десяти новонавернених християн. Саме ця невелика спільнота стала початком майбутньої церкви, об'єднаної спільною вірою, молитвою та прагненням служити Богові.",
      "У 1993 році громада була офіційно зареєстрована під назвою «Надія» як дочірня громада Івано-Франківської церкви.",
      "Протягом 1993–1994 років у Палаці культури «Мінерал» проводилися євангелізаційні богослужіння, на які запрошувалися всі бажаючі.",
    ],
  },
  {
    title: "Формування церкви",
    paragraphs: [
      "У лютому 1994 року громада зросла до сорока віруючих. У цей час у приміщенні ПК «Мінерал» почали регулярно проводитися щонедільні богослужіння. Саме лютий 1994 року вважається датою фактичного утворення церкви.",
      "У липні 1994 року на річці Лімниця відбулося перше Святе Водне Хрещення, яке прийняли 14 осіб.",
      "У 1995–1997 роках богослужіння проводилися в різних орендованих приміщеннях міста: ЗОШ №10, ЗОШ №7 та кінотеатрі «Аврора».",
    ],
  },
  {
    title: "Народження церкви «Благодать»",
    paragraphs: ["У квітні 1997 року на базі церкви «Надія» було утворено дві громади:"],
    list: [
      "Церкву «Благодать», яка налічувала 58 членів (пастор Олександр Іванович Притуляк);",
      "Церкву «Надія», яка налічувала 14 членів (пастор Михайло Олексійович Тимків).",
    ],
    afterList:
      "Ця подія стала важливим етапом розвитку євангельського руху в місті Калуші та відкрила нові можливості для служіння людям.",
  },
  {
    title: "Шлях віри та молитви за власний дім",
    paragraphs: [
      "Упродовж 1998–2007 років богослужіння проводилися в приміщенні кінотеатру «Відродження».",
      "У грудні 2004 року церква «Благодать», яка на той час уже налічувала близько 300 членів, придбала приміщення колишнього МНВК для проведення богослужінь.",
      "Протягом 2004–2014 років тривала масштабна реконструкція та ремонт придбаного приміщення.",
      "У грудні 2008 року приміщення кінотеатру «Відродження» було продано, тому церква була змушена перейти до проведення богослужінь у ще недобудованій власній будівлі.",
    ],
  },
  {
    title: "Пам'ять про Андрія Валагу",
    paragraphs: [
      "У листопаді 2009 року церква зазнала великої втрати – відійшов у вічність Андрій Валага, член церкви, талановитий скрипаль, переможець Всеукраїнського фестивалю «Червона Рута» 1993 року.",
      "Після пережитого інсульту у 1993 році Андрій покаявся та присвятив своє життя Господу.",
      "Похоронне служіння відбувалося в приміщенні церкви, і майже все місто мало можливість попрощатися з людиною, яка своїм життям і вірою залишила глибокий слід у серцях багатьох людей.",
    ],
  },
  {
    title: "Служіння та євангелізація",
    paragraphs: [
      "У 2010–2014 роках церква щороку проводила великі Різдвяні зустрічі в ПК «Юність».",
    ],
  },
  {
    title: "Новий етап служіння",
    paragraphs: [
      "2 липня 2023 року відбулася історична подія для церкви «Благодать» – урочисте рукопокладання Миколи та Ірини Поташник на пасторське служіння.",
      "Ця подія ознаменувала початок нового етапу розвитку церкви, сповненого віри, єдності, любові та прагнення ще ефективніше служити Богові та людям.",
    ],
  },
];

const fallbackMinistries = [
  "Адміністрація;",
  "Проповідники;",
  "Прославлення;",
  "Недільна школа;",
  "Teens club;",
  "Група порядку;",
  "Служіння Марти;",
  "Кафе;",
  "Служіння прибирання;",
  "Дитяче прославлення;",
  "Молитовне служіння;",
  "Домашні групи;",
  "Медіа;",
  "Хор;",
  "Господарське служіння;",
  "Театральне.",
];

function HistoryPage() {
  const { history } = Route.useLoaderData();

  const backgroundImageUrl = history?.backgroundImage
    ? urlFor(history.backgroundImage).width(1600).height(1200).url()
    : historyBg;
  const presentDayImageUrl = history?.presentDayImage
    ? urlFor(history.presentDayImage).url()
    : presentDayBlock;

  const pageTitle = history?.pageTitle || 'ІСТОРІЯ СТВОРЕННЯ ЦЕРКВИ "БЛАГОДАТЬ"';
  const intro =
    history?.intro ||
    "Історія церкви «Благодать» є свідченням Божої вірності, любові та благословення, які супроводжували громаду від перших днів її існування і до сьогодні.";
  const sections = history?.sections || fallbackSections;
  const presentDayTitle = history?.presentDayTitle || "Церква сьогодні";
  const presentDayContent = history?.presentDayContent || [
    "Сьогодні церква «Благодать» – це велика дружня духовна сім'я, яку очолюють пастори Микола та Ірина Поташник. Разом із ними в служінні беруть участь Олександр та Мирослава Притуляк, служителі Іван Хімій, Денис Притуляк, Іван Савчин, Олег Литвинський, бухгалтер Ірина Богач, адміністратор Галина Савчин та багато інших посвячених працівників Божої ниви.",
    "У церкві активно діють різноманітні служіння:",
  ];
  const presentDayMinistries = history?.presentDayMinistries || fallbackMinistries;

  return (
    <PageShell headerOverlay>
      <div className="relative overflow-hidden">
        <img
          src={backgroundImageUrl}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          width={1600}
          height={1200}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10">
          <section>
            <div className="container-grace pb-16 pt-32 md:pb-24 md:pt-40">
              <h1 className="text-h3 max-w-[900px] text-white">{pageTitle}</h1>

              <div className="mt-12 grid grid-cols-1 gap-10 md:max-w-[640px] text-white">
                <div>
                  <p className="text-[15px] md:text-[17px] leading-relaxed">{intro}</p>
                </div>

                {sections.map((section, idx) => (
                  <div key={idx}>
                    <h2 className="text-[22px] md:text-[28px] font-bold">{section.title}</h2>

                    <div className="mt-4 space-y-4 text-[15px] md:text-[17px] leading-relaxed">
                      {section.paragraphs?.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}

                      {section.list && (
                        <ul className="space-y-2">
                          {section.list.map((item, i) => (
                            <li key={i} className="flex gap-3">
                              <span aria-hidden>•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {section.afterList && <p>{section.afterList}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="overflow-hidden bg-neutral-800/65">
            <div className="container-grace py-12 md:py-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="h-full min-h-[350px]">
                  <img
                    src={presentDayImageUrl}
                    alt={presentDayTitle}
                    className="w-full h-full object-cover rounded-lg shadow-2xl"
                  />
                </div>

                <div className="space-y-4 text-[14px] md:text-[16px] leading-relaxed text-white">
                  <h2 className="text-[20px] md:text-[24px] font-bold">{presentDayTitle}</h2>

                  {presentDayContent.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}

                  <ul className="space-y-1">
                    {presentDayMinistries.map((ministry, i) => (
                      <li key={i} className="flex gap-2">
                        <span aria-hidden>•</span>
                        <span>{ministry}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </PageShell>
  );
}
