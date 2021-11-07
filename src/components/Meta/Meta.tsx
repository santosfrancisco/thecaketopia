import Head from "next/head";
import { HOME_OG_IMAGE_URL } from "../../../lib/constants";
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
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta property="og:title" content={post?.title ?? "Caketopia"} />
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
