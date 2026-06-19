import { useEffect, useState } from "react";

export default function LatestStream() {
  const [videoId, setVideoId] = useState(null);

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
    const CHANNEL_ID = "UCxAgeSNE3xZbtzN8rqkMCTA";

    async function loadLatestStream() {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&eventType=completed&type=video&order=date&maxResults=1&key=${API_KEY}`
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
  }, []);

  if (!videoId) return <div>Завантаження...</div>;

  return (
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      title="Latest Stream"
      width="100%"
      height="100%"
      allowFullScreen
      frameBorder="0"
    />
  );
}