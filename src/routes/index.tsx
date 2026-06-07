import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { CrossIcon, StarBurst, PlayIcon } from "@/components/icons/Decor";
import heroSmoke from "@/assets/hero-smoke.jpg";
import aboutWorship from "@/assets/about-worship.jpg";
import sermonCamera from "@/assets/sermon-camera.jpg";
import sundayService from "@/assets/sunday-service.jpg";
import sermonsBook from "@/assets/sermons-book.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Церква Благодать — Калуш" },
      {
        name: "description",
        content:
          "Церква «Благодать» міста Калуша — помісна євангельська церква. Стань частиною спільноти, що поклоняється Богу та служить людям.",
      },
      { property: "og:title", content: "Церква Благодать — Калуш" },
      {
        property: "og:description",
        content: "Помісна євангельська церква. Стань частиною.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <PageShell headerOverlay>
      {/* HERO */}
      <section className="relative isolate min-h-[700px] md:min-h-[860px] overflow-hidden">
        <img
          src={heroSmoke}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/30 via-background/30 to-background" />

        <div className="container-grace flex min-h-[700px] md:min-h-[860px] flex-col justify-end pb-16 pt-40 md:pb-24 md:pt-44">
          <h1 className="text-h1">
            СТАНЬ
            <br />
            ЧАСТИНОЮ
          </h1>
          <p className="mt-8 max-w-[680px] text-[18px] md:text-[22px] italic font-medium leading-snug text-foreground">
            Слава Богу, Який може Своєю силою, яка діє в нас, зробити незрівнянно
            більше, ніж те, про що ми можемо молитися й мріяти
          </p>
          <p className="mt-6 text-right text-[14px] md:text-[16px] italic text-foreground/90">
            До Ефесян 3:20
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="container-grace py-16 md:py-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-6">
            <h2 className="text-h3">ПРО ЦЕРКВУ</h2>
            <p className="mt-8 text-[15px] md:text-[17px] leading-relaxed text-foreground/90">
              Церква «Благодать» міста Калуша — це помісна церква, яка вірить в
              абсолютний авторитет Біблії як єдиного і закінченого одкровення
              Бога людям, у ній спільно вивчають Слово Боже, перебувають в
              молитві, поклоняються Богу, служать один одному з любов'ю і
              розповідають іншим про Божу любов і спасіння через Ісуса Христа.
            </p>
            <Link
              to="/history"
              className="mt-8 inline-block border border-foreground px-5 py-2.5 text-[14px] tracking-wider hover:bg-foreground hover:text-background transition-colors"
            >
              Читати історію
            </Link>
          </div>
          <div className="md:col-span-6">
            <img
              src={aboutWorship}
              alt="Поклоніння"
              loading="lazy"
              width={1024}
              height={768}
              className="h-full max-h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* BELIEFS */}
      <section className="container-grace py-16 md:py-24">
        <h2 className="text-h3">НАШІ ВІРУВАННЯ</h2>

        <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-14 md:grid-cols-12">
          <div className="hidden md:flex md:col-span-5 items-start justify-center">
            <CrossIcon className="h-24 w-16 text-foreground/80" />
          </div>
          <div className="md:col-span-7">
            <h3 className="text-[22px] md:text-[28px] font-bold text-accent">
              Віра в Бога та Його характер
            </h3>
            <p className="mt-4 text-[15px] md:text-[17px] leading-relaxed">
              Ми віримо в єдиного Бога — Творця, Який існує у трьох особах: Отець,
              Син, Дух Святий.
            </p>
            <p className="mt-3 text-[15px] md:text-[17px] leading-relaxed">
              Ми віримо, що Бог — люблячий Батько. Він — всемогутній і
              справедливий Суддя.
            </p>
          </div>

          <div className="md:col-span-5">
            <h3 className="text-[22px] md:text-[28px] font-bold text-accent">
              Церква та її місія
            </h3>
            <p className="mt-4 text-[15px] md:text-[17px] leading-relaxed">
              Ми віримо, що істинна Церква Ісуса Христа — це зібрання вірних
              людей, які поклоняються Богу і служать один одному з любов'ю і
              проповідують спасіння через Ісуса Христа.
            </p>
            <p className="mt-3 text-[15px] md:text-[17px] leading-relaxed">
              Ми віримо в друге Пришестя Ісуса Христа, Який прийде забрати Свою
              Церкву, згідно того, як Він обіцяв у Святому Писанні.
            </p>
          </div>
          <div className="hidden md:flex md:col-span-7 items-start justify-center">
            <StarBurst className="h-28 w-28 text-foreground/80" />
          </div>

          <div className="hidden md:flex md:col-span-5 items-start justify-center">
            <span />
          </div>
          <div className="md:col-span-7">
            <h3 className="text-[22px] md:text-[28px] font-bold text-accent">
              Спасіння та віра
            </h3>
            <p className="mt-4 text-[15px] md:text-[17px] leading-relaxed">
              Ми віримо, що кожна людина успадковує гріховну природу і потребує
              порятунку від вічного покарання за гріх.
            </p>
            <p className="mt-3 text-[15px] md:text-[17px] leading-relaxed">
              Ми віримо, що спасіння — це Божий дар, який неможливо заслужити чи
              успадкувати від батьків.
            </p>
            <p className="mt-3 text-[15px] md:text-[17px] leading-relaxed">
              Ми віримо, що людина отримує спасіння тільки тоді, коли вірує, що
              кров Ісуса Христа, яка була пролита на хресті, є єдиною підставою
              для прощення її гріхів.
            </p>
          </div>

          <div className="md:col-span-5">
            <h3 className="text-[22px] md:text-[28px] font-bold text-accent">
              Сакраменти
              <br />
              та приналежність до церкви
            </h3>
            <p className="mt-4 text-[15px] md:text-[17px] leading-relaxed">
              Ми віримо, що кожен, хто увірував в Ісуса Христа як особистого
              Господа і Спасителя, повинен прийняти Святе Водне Хрещення і
              приєднатися до помісної церкви.
            </p>
            <p className="mt-3 text-[15px] md:text-[17px] leading-relaxed">
              Ми віримо у хрещення Святим Духом з ознакою інших мов.
            </p>
          </div>
          <div className="hidden md:flex md:col-span-7 items-start justify-center">
            <StarBurst className="h-24 w-24 text-foreground/80" />
          </div>
        </div>
      </section>

      {/* MEDIA */}
      <section className="container-grace py-16 md:py-24">
        <h2 className="text-h3">СЛУЖІННЯ</h2>

        <div className="mt-10 relative aspect-video w-full overflow-hidden bg-secondary">
          <img
            src={sermonCamera}
            alt="Онлайн трансляція"
            loading="lazy"
            width={1200}
            height={700}
            className="h-full w-full object-cover"
          />
          <button
            aria-label="Грати"
            className="absolute inset-0 flex items-center justify-center"
          >
            <PlayIcon className="h-20 w-20 md:h-28 md:w-28 drop-shadow-2xl" />
          </button>
        </div>
        <p className="mt-6 text-[16px] md:text-[20px]">
          Онлайн трансляція служінь церкви Благодать
        </p>

        {/* Sunday + sermons book */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-6 relative overflow-hidden">
          <img
            src={sundayService}
            alt="Неділя"
            loading="lazy"
            width={800}
            height={450}
            className="w-full h-[220px] object-cover"
          />
      
          <div className="absolute inset-0 bg-background/40" />
      
          <div className="absolute inset-0 flex flex-col justify-between p-6">
            <h3 className="text-[56px] leading-none font-light">
              НЕДІЛЯ
            </h3>
      
            <p className="text-[22px] font-light">
              Служіння об 11:00
            </p>
          </div>
        </div>
      
        <div className="md:col-span-3 text-[14px] leading-[1.7] pt-2">
          Збірка проповідей за 2023 рік слугуватиме нагадуванням істини та
          мудрості, які Бог відкривав нам. Розмірковуйте разом із нами над
          словами, що проявлять любов та милість, надихнуть на нові звершення
          та підтримку на духовному шляху.
        </div>
      
        <div className="md:col-span-3 flex justify-center">
          <img
            src={sermonsBook}
            alt="2023 Проповіді"
            loading="lazy"
            width={512}
            height={768}
            className="h-[200px] w-auto object-contain"
          />
        </div>
</div>
      </section>
    </PageShell>
  );
}
