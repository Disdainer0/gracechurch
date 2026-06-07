import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { PlayIcon } from "@/components/icons/Decor";
import worship from "@/assets/media-worship.jpg";

export const Route = createFileRoute("/media")({
  head: () => ({
    meta: [
      { title: "Медіа — Церква Благодать" },
      {
        name: "description",
        content: 'Онлайн трансляції служінь церкви "Благодать".',
      },
      { property: "og:title", content: "Медіа — Церква Благодать" },
      { property: "og:description", content: "Онлайн трансляції служінь." },
    ],
  }),
  component: MediaPage,
});

function MediaPage() {
  return (
    <PageShell>
      <section className="container-grace pt-4 pb-16 md:pb-24">
        <h1 className="text-h3">МЕДІА</h1>
        <p className="mt-3 text-[18px] md:text-[24px] font-medium">
          Онлайн трансляції служінь церкви "Благодать"
        </p>

        <div className="relative mt-8 aspect-video w-full overflow-hidden bg-secondary">
          <img
            src={worship}
            alt="Онлайн трансляція"
            loading="lazy"
            width={1600}
            height={1000}
            className="h-full w-full object-cover"
          />
          <button
            aria-label="Грати"
            className="absolute inset-0 flex items-center justify-center"
          >
            <PlayIcon className="h-24 w-24 md:h-36 md:w-36 drop-shadow-2xl" />
          </button>
        </div>
      </section>
    </PageShell>
  );
}
