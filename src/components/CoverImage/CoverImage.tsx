import Link from "next/link";

type CoverImageProps = {
  title: string;
  url: string;
  slug?: string;
};

export default function CoverImage({ title, url, slug }: CoverImageProps) {
  const image = (
    <img
      alt={`Cover Image for ${title}`}
      style={{ width: "100%", minHeight: 258, objectFit: "cover" }}
      src={url}
    />
  );

  return (
    <div>
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
