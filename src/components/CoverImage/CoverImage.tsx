import Link from "next/link";
// import { imageBuilder } from "../../../lib/sanity";

type CoverImageProps = {
  title: string;
  url: string;
  slug?: string;
};

export default function CoverImage({ title, url, slug }: CoverImageProps) {
  const image = (
    <img
      // width={1240}
      // height={540}
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
