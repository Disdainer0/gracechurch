import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import shortLogo from "@/assets/shortlogo.svg";
import { useEffect, useState } from "react";

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
    links: [{ rel: "icon", type: "image/svg+xml", href: shortLogo }],
  }),
  component: MediaPage,
});

function MediaPage() {
  const [videoId, setVideoId] = useState<string | null>(null);

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
    const CHANNEL_ID = "UCxAgeSNE3xZbtzN8rqkMCTA";

    async function loadLatestStream() {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&eventType=completed&type=video&order=date&maxResults=1&key=${API_KEY}`
        );

        const data = await response.json();

        console.log(data);

        if (data.items?.length) {
          setVideoId(data.items[0].id.videoId);
        }
      } catch (error) {
        console.error(error);
      }
    }

    loadLatestStream();
  }, []);

  return (
    <PageShell>
      <section className="container-grace pt-4 pb-16 md:pb-24">
        <h1 className="text-h3">МЕДІА</h1>

        <p className="mt-3 text-[18px] md:text-[24px] font-medium">
          Онлайн трансляції служінь церкви "Благодать"
        </p>

        <div className="relative mt-8 aspect-video w-full overflow-hidden bg-secondary">
          {videoId && (
            <iframe
              className="absolute inset-0 block h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${videoId}`}
              title="YouTube video player"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              style={{ border: 0 }}
            />
          )}
        </div>
      </section>
    </PageShell>
  );
}