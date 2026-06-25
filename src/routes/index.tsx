import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { CrossIcon, StarBurst } from "@/components/icons/Decor";
import heroSmoke from "@/assets/mainfog.mp4";
import shortLogo from "@/assets/shortlogo.svg";
import { useEffect, useState } from "react";
import { getHomepage, getSiteSettings } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";

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
    links: [{ rel: "icon", type: "image/svg+xml", href: shortLogo }],
  }),
  component: HomePage,
  loader: async () => {
    const [homepage, siteSettings] = await Promise.all([getHomepage(), getSiteSettings()]);
    return { homepage, siteSettings };
  },
});

function HomePage() {
  const { homepage, siteSettings } = Route.useLoaderData();
  const [videoId, setVideoId] = useState<string | null>(null);

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
    const CHANNEL_ID = siteSettings?.youtubeChannelId || "UCxAgeSNE3xZbtzN8rqkMCTA";

    async function loadLatestStream() {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&eventType=completed&type=video&order=date&maxResults=1&key=${API_KEY}`,
        );
        const data = await response.json();
        if (data.items?.length) {
          setVideoId(data.items[0].id.videoId);
        }
      } catch (error) {
        console.error(error);
      }
    }

    loadLatestStream();
  }, [siteSettings]);

  const heroVideoUrl = homepage?.heroVideo?.asset?.url || heroSmoke;
  const aboutImageUrl = homepage?.aboutImage
    ? urlFor(homepage.aboutImage).width(1024).height(768).url()
    : "";
  const beliefsBackgroundUrl = homepage?.beliefsBackgroundImage
    ? urlFor(homepage.beliefsBackgroundImage).width(1920).height(1080).url()
    : "";

  const heroTitle = homepage?.heroTitle || "СТАНЬ\nЧАСТИНОЮ";
  const heroQuote =
    homepage?.heroQuote ||
    "Слава Богу, Який може Своєю силою, яка діє в нас, зробити незрівнянно більше, ніж те, про що ми можемо молитися й мріяти";
  const heroQuoteRef = homepage?.heroQuoteReference || "До Ефесян 3:20";
  const aboutTitle = homepage?.aboutTitle || "ПРО ЦЕРКВУ";
  const aboutContent =
    homepage?.aboutContent ||
    "Церква «Благодать» міста Калуша — це помісна церква, яка вірить в абсолютний авторитет Біблії як єдиного і закінченого одкровення Бога людям, у ній спільно вивчають Слово Боже, перебувають в молитві, поклоняються Богу, служать один одному з любов'ю і розповідають іншим про Божу любов і спасіння через Ісуса Христа.";
  const aboutButtonText = homepage?.aboutButtonText || "Читати історію";
  const beliefsTitle = homepage?.beliefsTitle || "НАШІ ВІРУВАННЯ";
  const servicesTitle = homepage?.servicesTitle || "СЛУЖІННЯ";
  const servicesSubtitle = homepage?.servicesSubtitle || "Проводимо щонеділі з початком о 11:00";
  const servicesDescription =
    homepage?.servicesDescription || "Онлайн трансляція служінь церкви Благодать";

  const beliefs = homepage?.beliefs || [
    {
      title: "Віра в Бога та Його характер",
      content: [
        "Ми віримо в єдиного Бога — Творця, Який існує у трьох особах: Отець, Син, Дух Святий.",
        "Ми віримо, що Бог — люблячий Батько. Він — всемогутній і справедливий Суддя.",
      ],
    },
    {
      title: "Церква та її місія",
      content: [
        "Ми віримо, що істинна Церква Ісуса Христа — це зібрання вірних людей, які поклоняються Богу і служать один одному з любов'ю і проповідують спасіння через Ісуса Христа.",
        "Ми віримо в друге Пришестя Ісуса Христа, Який прийде забрати Свою Церкву, згідно того, як Він обіцяв у Святому Писанні.",
      ],
    },
    {
      title: "Спасіння та віра",
      content: [
        "Ми віримо, що кожна людина успадковує гріховну природу і потребує порятунку від вічного покарання за гріх.",
        "Ми віримо, що спасіння — це Божий дар, який неможливо заслужити чи успадкувати від батьків.",
        "Ми віримо, що людина отримує спасіння тільки тоді, коли вірує, що кров Ісуса Христа, яка була пролита на хресті, є єдиною підставою для прощення її гріхів.",
      ],
    },
    {
      title: "Сакраменти\nта приналежність до церкви",
      content: [
        "Ми віримо, що кожен, хто увірував в Ісуса Христа як особистого Господа і Спасителя, повинен прийняти Святе Водне Хрещення і приєднатися до помісної церкви.",
        "Ми віримо у хрещення Святим Духом з ознакою інших мов.",
      ],
    },
  ];

  return (
    <PageShell headerOverlay>
      {/* HERO */}
      <section className="relative isolate min-h-[700px] md:min-h-[860px] overflow-hidden">
        <video
          src={heroVideoUrl}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/30 via-background/30 to-background" />

        <div className="container-grace flex min-h-[700px] md:min-h-[860px] flex-col justify-end pb-16 pt-40 md:pb-24 md:pt-44">
          <h1 className="text-h1">
            {heroTitle.split("\n").map((line, i, arr) => (
              <span key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </span>
            ))}
          </h1>
          <p className="mt-8 max-w-[680px] text-[18px] md:text-[22px] italic font-medium leading-snug text-foreground">
            {heroQuote}
          </p>
          <p className="mt-6 text-right text-[14px] md:text-[16px] italic text-foreground/90">
            {heroQuoteRef}
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="container-grace py-16 md:py-24 overflow-hidden">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-6">
            <h2 className="text-h3">{aboutTitle}</h2>
            <p className="mt-8 text-[15px] md:text-[17px] leading-relaxed text-foreground/90">
              {aboutContent}
            </p>
            <Link
              to="/history"
              className="mt-8 inline-block border border-foreground px-5 py-2.5 text-[14px] tracking-wider hover:bg-foreground hover:text-background transition-colors"
            >
              {aboutButtonText}
            </Link>
          </div>
          <div className="md:col-span-6">
            {aboutImageUrl && (
              <img
                src={aboutImageUrl}
                alt={aboutTitle}
                loading="lazy"
                width={1024}
                height={768}
                className="h-full max-h-[420px] w-full object-cover"
              />
            )}
          </div>
        </div>
      </section>

      {/* BELIEFS */}
      <section className="relative isolate py-16 md:py-24 overflow-hidden">
        {beliefsBackgroundUrl && (
          <img
            src={beliefsBackgroundUrl}
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover"
            width={1920}
            height={1080}
          />
        )}

        <div className="container-grace">
          <h2 className="text-h3">{beliefsTitle}</h2>

          <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-14 md:grid-cols-12">
            <div className="hidden md:flex md:col-span-5 items-start justify-center">
              <CrossIcon className="h-24 w-16 text-foreground/80" />
            </div>
            <div className="md:col-span-7">
              <h3 className="text-[22px] md:text-[28px] font-bold text-accent">
                {beliefs[0]?.title}
              </h3>
              <div className="mt-4 space-y-3 text-[15px] md:text-[17px] leading-relaxed">
                {beliefs[0]?.content.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            <div className="md:col-span-5">
              <h3 className="text-[22px] md:text-[28px] font-bold text-accent">
                {beliefs[1]?.title}
              </h3>
              <div className="mt-4 space-y-3 text-[15px] md:text-[17px] leading-relaxed">
                {beliefs[1]?.content.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div className="hidden md:flex md:col-span-7 items-start justify-center">
              <StarBurst className="h-28 w-28 text-foreground/80" />
            </div>

            <div className="hidden md:flex md:col-span-5 items-start justify-center">
              <span />
            </div>
            <div className="md:col-span-7">
              <h3 className="text-[22px] md:text-[28px] font-bold text-accent">
                {beliefs[2]?.title}
              </h3>
              <div className="mt-4 space-y-3 text-[15px] md:text-[17px] leading-relaxed">
                {beliefs[2]?.content.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            <div className="md:col-span-5">
              <h3 className="text-[22px] md:text-[28px] font-bold text-accent">
                {beliefs[3]?.title.split("\n").map((line, i, arr) => (
                  <span key={i}>
                    {line}
                    {i < arr.length - 1 && <br />}
                  </span>
                ))}
              </h3>
              <div className="mt-4 space-y-3 text-[15px] md:text-[17px] leading-relaxed">
                {beliefs[3]?.content.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div className="hidden md:flex md:col-span-7 items-start justify-center">
              <StarBurst className="h-24 w-24 text-foreground/80" />
            </div>
          </div>
        </div>
      </section>

      {/* MEDIA */}
      <section className="container-grace py-16 md:py-24 overflow-hidden">
        <h2 className="text-h3">{servicesTitle}</h2>
        <p className="mt-4 text-[16px] md:text-[20px]">{servicesSubtitle}</p>
        <div className="mt-10 relative aspect-video w-full overflow-hidden bg-secondary">
          <div className="mt-10 overflow-hidden">
            {videoId && (
              <iframe
                className="absolute inset-0 block w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                title="YouTube video player"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                style={{ border: 0 }}
              />
            )}
          </div>
        </div>
        <p className="mt-6 text-[16px] md:text-[20px]">{servicesDescription}</p>
      </section>
    </PageShell>
  );
}
