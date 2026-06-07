import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import school from "@/assets/ministry-school.jpg";
import youth from "@/assets/ministry-youth.jpg";
import home from "@/assets/ministry-home.jpg";

export const Route = createFileRoute("/ministry")({
  head: () => ({
    meta: [
      { title: "Служіння — Церква Благодать" },
      {
        name: "description",
        content:
          "Служіння у церкві «Благодать»: недільна школа, молодіжне служіння Youth Grace, домашні групи.",
      },
      { property: "og:title", content: "Служіння — Церква Благодать" },
      { property: "og:description", content: "Недільна школа, молодь, домашні групи." },
    ],
  }),
  component: MinistryPage,
});

function MinistryPage() {
  return (
    <PageShell>
      <section className="container-grace pt-6 pb-16 md:pb-24">
        <h1 className="text-h3">СЛУЖІННЯ У ЦЕРКВІ "БЛАГОДАТЬ"</h1>

        {/* Sunday school */}
        <div className="mt-10 md:mt-14">
          <h2 className="text-h4">Недільна школа</h2>
          <div className="relative mt-6">
            <img
              src={school}
              alt="Недільна школа"
              loading="lazy"
              width={1200}
              height={800}
              className="w-full md:w-[62%] aspect-[3/2] object-cover"
            />
            <div className="md:absolute md:right-0 md:top-10 md:w-[44%] bg-secondary/80 backdrop-blur-sm p-6 md:p-8 mt-[-40px] md:mt-0 relative md:z-10">
              <p className="hidden md:block text-right text-h5 mb-6">Щотижня о 10:30</p>
              <p className="text-[14px] md:text-[15px] leading-relaxed">
                Недільна школа, відома як "церква маленьких людей", призначена
                для дітей віком від 6 до 14 років. Тут вчителі передають дітям
                Боже Слово, розуміючи, що саме в дитинстві кладеться фундамент
                успішного розвитку особистості. У недільній школі також
                проводяться християнські табори, поїздки, біблійні уроки,
                квести, спілкування з друзями, спортивні змагання, ігри, гуртки,
                конкурси талантів та багато іншого. Це унікальна можливість не
                тільки весело провести час, але й відкрити для себе своє
                покликання, навчитися робити добро і поділитися своїм талантом з
                іншими.
              </p>
              <p className="md:hidden mt-4 text-h5">Щотижня о 10:30</p>
            </div>
          </div>
        </div>

        {/* Youth */}
        <div className="mt-16 md:mt-24">
          <h2 className="text-h4 md:text-right">Молодіжне служіння</h2>
          <div className="relative mt-6 md:flex md:justify-end">
            <img
              src={youth}
              alt="Молодіжне служіння Youth Grace"
              loading="lazy"
              width={1200}
              height={800}
              className="w-full md:w-[62%] aspect-[3/2] object-cover"
            />
            <div className="md:absolute md:left-0 md:top-10 md:w-[44%] bg-secondary/80 backdrop-blur-sm p-6 md:p-8 mt-[-40px] md:mt-0 relative md:z-10">
              <p className="text-[14px] md:text-[15px] leading-relaxed">
                В церкві "Благодать" діє активна молодіжна спільнота "Youth
                Grace". Зустрічі Youth Grace відбуваються щонеділі. На перший
                план виносяться вивчення Божого Слова та обговорення нових
                проектів. Кожна зустріч розпочинається молитвою та
                прославленням, а потім переходить до спілкування. Тут молодь
                шукає себе в різних сферах служіння. Також проводяться
                різноманітні подорожі та заходи з метою сприяти їхньому
                об'єднанню.
              </p>
            </div>
          </div>
        </div>

        {/* Home group */}
        <div className="mt-16 md:mt-24">
          <h2 className="text-h4">Домашня група</h2>
          <div className="relative mt-6">
            <img
              src={home}
              alt="Домашня група"
              loading="lazy"
              width={1200}
              height={800}
              className="w-full md:w-[62%] aspect-[3/2] object-cover"
            />
            <div className="md:absolute md:right-0 md:bottom-6 md:w-[44%] bg-secondary/80 backdrop-blur-sm p-6 md:p-8 mt-[-40px] md:mt-0 relative md:z-10">
              <p className="text-[14px] md:text-[15px] leading-relaxed">
                В невеликій групі є можливість поставити питання щодо проповіді
                та обговорити її знову, вирішити незрозумілі моменти та
                закріпити знання. У спілкуванні на домашніх групах ми
                навчаємося приймати один одного і розвивати наші дари і таланти,
                щоб служити громаді. Група також є сім'єю, де ми отримуємо
                підтримку, молитви та допомогу.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
