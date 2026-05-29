import { useState, type ImgHTMLAttributes } from "react";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

/**
 * <img> wrapper that degrades to a clean surface-tone placeholder when the
 * source fails to load. This keeps the layout intact before the generated
 * images (see image-prompts/image-map.md) have been dropped in.
 */
export default function Image({ src, alt, className = "", ...rest }: ImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-gradient-to-br from-surface to-bg ${className}`}
      >
        <span className="font-display italic text-muted/40 text-2xl select-none">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
      {...rest}
    />
  );
}
