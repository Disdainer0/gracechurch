import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/contacts")({
  head: () => ({
    meta: [
      { title: "Контакти та розклад богослужінь — Церква Благодать" },
      {
        name: "description",
        content:
          "Розклад богослужінь церкви «Благодать»: неділя об 11:00, середа і п'ятниця о 18:00 — молитовне служіння. м. Калуш, вул. Михайла Грушевського 25а.",
      },
      { property: "og:title", content: "Контакти — Церква Благодать" },
      { property: "og:description", content: "Розклад богослужінь та адреса." },
    ],
  }),
  component: ContactsPage,
});

function ContactsPage() {
  return (
    <PageShell>
      <section className="container-grace pt-4 pb-16 md:pb-24">
        <h1 className="text-h3">РОЗКЛАД БОГОСЛУЖІНЬ</h1>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12 md:items-start">
          <div className="md:col-span-6 space-y-8">
            <p className="text-[22px] md:text-[32px] font-light">
              Неділя об 11:00
            </p>

            <div className="text-[22px] md:text-[32px] font-light leading-tight">
              <p>Середа і п'ятниця о 18:00</p>
              <p>Молитовне служіння</p>
            </div>

            <div className="flex items-start gap-3 text-[15px] md:text-[18px]">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 shrink-0">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>м. Калуш, вул. Михайла Грушевського 25а</span>
            </div>
          </div>

          <div className="md:col-span-6">
            <div className="aspect-[4/3] w-full overflow-hidden border border-border">
              <iframe
                title="Карта — Дім молитви церкви Благодать"
                src="https://www.google.com/maps?q=%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%B0+%D0%93%D1%80%D1%83%D1%88%D0%B5%D0%B2%D1%81%D1%8C%D0%BA%D0%BE%D0%B3%D0%BE+25%D0%B0,+%D0%9A%D0%B0%D0%BB%D1%83%D1%88&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-full w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
