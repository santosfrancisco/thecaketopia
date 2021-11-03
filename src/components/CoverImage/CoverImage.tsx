import Link from "next/link";
// import { imageBuilder } from "../../../lib/sanity";

export default function CoverImage({ title, url, imageObject, slug }) {
  const image = (
    <img
      // width={1240}
      // height={540}
      alt={`Cover Image for ${title}`}
      style={{ width: "100%" }}
      src={url}
      // src={imageBuilder(imageObject).width(640).height(480).url()}
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
