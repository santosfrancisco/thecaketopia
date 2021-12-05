import Head from "next/head";
import { HOME_OG_IMAGE_URL, TITLE } from "../../../lib/constants";
import { imageBuilder } from "../../../lib/sanity";

type MetaProps = {
  post?: any;
};

export default function Meta({ post }: MetaProps) {
  const shareImage = post?.coverImage
    ? imageBuilder(post?.coverImage).width(280).height(150).url()
    : HOME_OG_IMAGE_URL;
  return (
    <Head>
      <link rel="apple-touch-icon" href="/logo.png" />
      <link rel="icon" type="image/png" href="/logo.png" />
      <link rel="shortcut icon" href="/logo.png" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta property="og:title" content={post?.title ?? TITLE} />
      <meta
        property="og:description"
        content={post?.excerpt ?? "Gastronomia e confeitaria"}
      />
      <meta property="og:image" content={shareImage} />

      {/* <!-- Twitter --/> */}
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
