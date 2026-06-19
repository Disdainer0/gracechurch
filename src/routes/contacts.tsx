import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import shortLogo from "@/assets/shortlogo.svg";

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
    links: [
      { rel: "icon", type: "image/svg+xml", href: shortLogo },
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

            <a 
              href="https://www.google.com/maps/place/Tserkva+Khvye+%22Blahodat%CA%B9%22/@49.0215174,24.3695249,19.25z/data=!4m15!1m8!3m7!1s0x4730a2fbe8659041:0x6db19c07a6066c05!2z0LLRg9C70LjRhtGPINCc0LjRhdCw0LnQu9CwINCT0YDRg9GI0LXQstGB0YzQutC-0LPQviwgMjXQsCwg0JrQsNC70YPRiCwg0IbQstCw0L3Qvi3QpNGA0LDQvdC60ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCDQo9C60YDQsNC40L3QsCwgNzczMDA!3b1!8m2!3d49.0215648!4d24.3695107!16s%2Fg%2F11z8kmjrxk!3m5!1s0x4730a2fbc262bea1:0x389fc6c7287b7571!8m2!3d49.0215648!4d24.3695107!16s%2Fg%2F11gbfjhlrf?entry=ttu&g_ep=EgoyMDI2MDYxMy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-[15px] md:text-[18px] transition-colors hover:text-[#E80010]"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 shrink-0">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>м. Калуш, вул. Михайла Грушевського 25а</span>
            </a>
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
