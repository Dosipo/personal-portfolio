import { cn } from "@/lib/utils"

const VIDEO_SRC = /\.(mp4|webm|mov|ogg)(\?.*)?$/i

type CaseMediaProps = {
  src: string
  alt: string
  caption?: string
  className?: string
  priority?: boolean
}

export function CaseMedia({
  src,
  alt,
  caption,
  className,
  priority = false,
}: CaseMediaProps) {
  const isVideo = VIDEO_SRC.test(src)

  return (
    <figure className={cn("flex flex-col gap-2", className)}>
      <div className="overflow-hidden rounded-xl">
        {isVideo ? (
          <video
            src={src}
            autoPlay
            muted
            loop
            playsInline
            preload={priority ? "auto" : "metadata"}
            aria-label={alt}
            className="w-full"
          />
        ) : (
          <img
            src={src}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            className="w-full"
          />
        )}
      </div>
      {caption ? (
        <figcaption className="text-sm text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}
