import styles from "./ImageCard.module.css";

type ImageSize = "large" | "small";

const sizes: Record<ImageSize, { width: number; height: number }> = {
  large: { width: 600, height: 400 },
  small: { width: 400, height: 200 },
};

type ImageCardProps = { src: string; alt: string; size: ImageSize };

export default function ImageCard({ src, alt, size }: ImageCardProps) {
  const { width, height } = sizes[size];

  return (
    <div className={`${styles.imageContainer} ${styles[size]}`}>
      <img
        className={styles.picture}
        src={src}
        alt={alt}
        width={width}
        height={height}
        // style={{ objectFit: "cover" }}
      />
    </div>
  );
}
