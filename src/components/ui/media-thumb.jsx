const VIDEO_EXTENSIONS = [".mp4", ".mov", ".webm"];

function isVideoSrc(src) {
  return typeof src === "string" && VIDEO_EXTENSIONS.some((ext) => src.toLowerCase().endsWith(ext));
}

export default function MediaThumb({ src, alt, className, ...rest }) {
  if (isVideoSrc(src)) {
    return (
      <video
        src={src}
        className={className}
        autoPlay
        muted
        loop
        playsInline
        {...rest}
      />
    );
  }

  return <img src={src} alt={alt} className={className} {...rest} />;
}
