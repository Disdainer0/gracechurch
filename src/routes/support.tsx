import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import shortLogo from "@/assets/shortlogo.svg";
import { getSupport } from "@/lib/sanity/queries";

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
    links: [{ rel: "icon", type: "image/svg+xml", href: shortLogo }],
  }),
  component: SupportPage,
  loader: async () => {
    const support = await getSupport();
    return { support };
  },
});

function SupportPage() {
  const { support } = Route.useLoaderData();

  const pageTitle = support?.pageTitle || "ПІДТРИМКА";
  const introText =
    support?.introText ||
    "Господь в Своєму Слові постійно вчить і закликає нас бути жертовними. Жертвуючи нашими фінансами, ми шануємо Бога, і даємо Йому можливість використовувати нас, як Свій інструмент, для блага інших людей, церкви. За допомогою такого служіння, як фінансові пожертвування, можуть працювати інші служіння нашої церкви «Благодать». Віддаючи свої пожертви, ти стаєш благословенням для інших. Якщо твоя жертва буде щирою, то можеш не сумніватися в дії у твоєму житті духовного закону: «Давайте, і дасться вам» (Лк.6: 38). Твоя жертва повернеться до тебе ще більшим благословенням! Господь вірний!";
  const bibleVerse = support?.bibleVerse || "2Кор9:6 ... хто сіє щедро, той щедро й жатиме";
  const donationSectionTitle = support?.donationSectionTitle || "Ти можеш підтримати життя церкви";
  const recipientName = support?.recipientName || "ГО РГ ХВЄ БЛАГОДАТЬ";
  const recipientCode = support?.recipientCode || "26055464";
  const bankName = support?.bankName || "АТ КБ «ПриватБанк»";
  const iban = support?.iban || "UA813052990000026006045506577 — UAH";
  const receiver = support?.receiver || 'РГ ХВЄ "Благодать"';
  const paymentPurpose = support?.paymentPurpose || "Добровільні пожертви";
  const donateButtonText = support?.donateButtonText || "Пожертвувати";
  const donateButtonUrl = support?.donateButtonUrl || "https://next.privat24.ua/payments/form";

  return (
    <PageShell>
      <section className="container-grace pt-4 pb-16 overflow-hidden">
        <h1 className="text-h3">{pageTitle}</h1>

        <p className="mt-8 max-w-[900px] text-[15px] md:text-[17px] leading-relaxed">{introText}</p>

        <p className="mt-8 text-right text-[15px] md:text-[18px] italic">{bibleVerse}</p>
      </section>

      <section className="bg-secondary/40 overflow-hidden">
        <div className="container-grace py-12 md:py-16">
          <h2 className="text-[22px] md:text-[32px] font-bold text-accent">
            {donationSectionTitle}
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8 space-y-2 text-[14px] md:text-[16px] leading-relaxed">
              <p>Найменування одержувача: {recipientName}</p>
              <p>Код одержувача: {recipientCode}</p>
              <p>Назва банку: {bankName}</p>
              <p>IBAN: {iban}</p>
              <p>Одержувач: {receiver}</p>
              <p>Призначення платежу: {paymentPurpose}</p>
            </div>
            <div className="md:col-span-4 md:text-right">
              <a
                href={donateButtonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-foreground px-6 py-3 text-[14px] md:text-[15px] tracking-wider hover:bg-foreground hover:text-background transition-colors"
              >
                {donateButtonText}
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
