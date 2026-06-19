import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import shortLogo from "@/assets/shortlogo.svg";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Підтримка — Церква Благодать" },
      {
        name: "description",
        content: "Підтримати життя церкви «Благодать» фінансовими пожертвами.",
      },
      { property: "og:title", content: "Підтримка — Церква Благодать" },
      { property: "og:description", content: "Реквізити для пожертв." },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: shortLogo },
    ],
  }),
  component: SupportPage,
});

function SupportPage() {
  return (
    <PageShell>
      <section className="container-grace pt-4 pb-16 overflow-hidden">
        <h1 className="text-h3">ПІДТРИМКА</h1>

        <p className="mt-8 max-w-[900px] text-[15px] md:text-[17px] leading-relaxed">
          Господь в Своєму Слові постійно вчить і закликає нас бути жертовними.
          Жертвуючи нашими фінансами, ми шануємо Бога, і даємо Йому можливість
          використовувати нас, як Свій інструмент, для блага інших людей,
          церкви. За допомогою такого служіння, як фінансові пожертвування,
          можуть працювати інші служіння нашої церкви «Благодать». Віддаючи
          свої пожертви, ти стаєш благословенням для інших. Якщо твоя жертва
          буде щирою, то можеш не сумніватися в дії у твоєму житті духовного
          закону: «Давайте, і дасться вам» (Лк.6: 38). Твоя жертва повернеться
          до тебе ще більшим благословенням! Господь вірний!
        </p>

        <p className="mt-8 text-right text-[15px] md:text-[18px] italic">
          2Кор9:6 ... хто сіє щедро, той щедро й жатиме
        </p>
      </section>

      <section className="bg-secondary/40 overflow-hidden">
        <div className="container-grace py-12 md:py-16">
          <h2 className="text-[22px] md:text-[32px] font-bold text-accent">
            Ти можеш підтримати життя церкви
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8 space-y-2 text-[14px] md:text-[16px] leading-relaxed">
              <p>Найменування одержувача: ГО РГ ХВЄ БЛАГОДАТЬ</p>
              <p>Код одержувача: 26055464</p>
              <p>Назва банку: АТ КБ «ПриватБанк»</p>
              <p>IBAN: UA813052990000026006045506577 — UAH</p>
              <p>Одержувач: РГ ХВЄ "Благодать"</p>
              <p>Призначення платежу: Добровільні пожертви</p>
            </div>
            <div className="md:col-span-4 md:text-right">
              <button className="border border-foreground px-6 py-3 text-[14px] md:text-[15px] tracking-wider hover:bg-foreground hover:text-background transition-colors">
                Пожертвувати
              </button>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
