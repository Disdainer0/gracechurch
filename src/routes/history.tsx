import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { DoveIcon } from "@/components/Logo";
import historyBg from "@/assets/history-bg.jpg";

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
  }),
  component: HistoryPage,
});

const periods = [
  {
    title: "Формування і початковий розвиток 1991-1997",
    items: [
      'Утворення домашньої групи від Івано-Франківської Церкви християн Віри Євангельської.',
      'Реєстрація громади "Надія".',
      "Проведення євангелізаційних заходів, які призвели до прийняття Христа багатьма людьми.",
      "Фактичне утворення церкви та її зростання до 40 членів.",
      "Проведення першого Святого Водного Хрещення на річці Лімниця.",
    ],
  },
  {
    title: "Розширення та консолідація 1997-2007",
    items: [
      "Зростання громади до 72 членів.",
      'Утворення двох громад на базі церкви: "Благодать" та "Надія".',
      "Придбання приміщення для проведення богослужінь.",
      "Розширення та ремонт приміщення.",
      "Організація щорічних Різдвяних зустрічей з великими концертами.",
    ],
  },
  {
    title: "Сучасність, 2008-до наших днів",
    items: [
      "Продовження збільшення громади та діяльності служінь.",
      "Похоронні служіння та важкі моменти в історії церкви.",
      "Активна праця служителів та прихильників церкви у подальшому розвитку та місіонерській роботі.",
    ],
  },
];

function HistoryPage() {
  return (
    <PageShell>
      {/* Top section with title + timeline over photo */}
      <section className="relative isolate overflow-hidden">
        <img
          src={historyBg}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
          width={1600}
          height={1200}
        />
        <div className="absolute inset-0 -z-10 bg-background/70" />

        <div className="container-grace pb-16 pt-10 md:pb-24 md:pt-12">
          <h1 className="text-h3 max-w-[900px]">
            ІСТОРІЯ СТВОРЕННЯ ЦЕРКВИ "БЛАГОДАТЬ"
          </h1>

          <div className="mt-12 grid grid-cols-1 gap-10 md:max-w-[640px]">
            {periods.map((p) => (
              <div key={p.title}>
                <h2 className="text-[22px] md:text-[28px] font-bold">{p.title}</h2>
                <ul className="mt-4 space-y-2 text-[15px] md:text-[17px] leading-relaxed">
                  {p.items.map((it) => (
                    <li key={it} className="flex gap-3">
                      <span aria-hidden>•</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Present-day block */}
      <section className="bg-secondary/40 overflow-hidden">
        <div className="container-grace grid grid-cols-1 gap-10 py-16 md:grid-cols-12 md:gap-12 md:py-20">
          <div className="hidden md:flex md:col-span-5 items-center justify-center">
            <DoveIcon className="h-32 w-44 text-foreground/80" />
          </div>
          <div className="md:col-span-7 space-y-5 text-[15px] md:text-[17px] leading-relaxed">
            <p>
              В наші дні церква «Благодать» — це велика дружня сім'я на чолі з
              Миколою Поташником, якому допомагають: дружина Ірина, Олександр та
              Мирослава Притуляк, служителі — Іван Хімій, Денис Притуляк, Іван
              Савчин, Олег Литвинський, адміністратор — Галина Савчин та багато
              інших. В церкві діють такі служіння: служіння прославлення (Зоряна
              Притуляк), недільна школа (Ірина Мельничук), служіння Марти (Олена
              Філіпович), служіння підтримування порядку (Роман Терновий),
              медіаслужіння (Іван Савчин).
            </p>
            <p>
              Громада постійно поповнюється спасенними людьми, які вірують у
              викупну жертву Ісуса Христа, з любов'ю в серці служать Господу і
              людям, готові кожному бажаючому свідчити про безмежну Божу любов і
              Його милосердя.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
