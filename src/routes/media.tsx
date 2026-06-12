import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

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
          
          <div className="mt-10 overflow-hidden">
           <iframe
             className="absolute inset-0 block w-full h-full"
             src="https://www.youtube-nocookie.com/embed/LNb8mjZ0CXo"
             title="YouTube video player"
             allowFullScreen
             referrerPolicy="strict-origin-when-cross-origin"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
             style={{ border: 0 }}
           />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
