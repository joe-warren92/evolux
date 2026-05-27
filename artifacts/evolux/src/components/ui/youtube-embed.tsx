interface YoutubeEmbedProps {
  videoId: string;
  title?: string;
  className?: string;
}

export function YoutubeEmbed({ videoId, title = "Video", className = "" }: YoutubeEmbedProps) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl bg-foreground/6 ${className}`}
      style={{ aspectRatio: "16 / 9" }}
    >
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&color=white`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
        className="absolute inset-0 w-full h-full border-0"
      />
    </div>
  );
}
