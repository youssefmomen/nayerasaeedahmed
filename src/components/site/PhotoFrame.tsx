import type { Photo } from "@/content/site";
import { cn } from "@/lib/utils";

export function PhotoFrame({
  photo,
  className,
  imgClassName = "photo-tone",
}: {
  photo: Photo;
  className?: string;
  imgClassName?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden bg-surface", className)}>
      {photo.src ? (
        <img
          src={photo.src}
          alt={photo.alt}
          loading="lazy"
          className={cn("block h-full w-full object-cover", imgClassName)}
        />
      ) : (
        <div
          role="img"
          aria-label={photo.alt}
          className="frame-empty flex h-full w-full items-center justify-center"
        >
          <span className="font-display text-sm uppercase tracking-[0.2em] text-muted-foreground">
            {photo.caption}
          </span>
        </div>
      )}
    </div>
  );
}
