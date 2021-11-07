import { useRouter } from "next/router";
import ErrorPage from "next/error";
// import Container from "../../components/Container";
// import PostBody from "../../components/post-body";
// import MoreStories from "../../components/more-stories";
// import Header from "../../components/header";
// import PostHeader from "../../components/post-header";
// import Comments from "../../components/comments";
// import SectionSeparator from "../../components/section-separator";
import Layout from "../../components/Layout";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../../lib/api";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import { imageBuilder } from "../../../lib/sanity";
import React from "react";
import Meta from "../../components/Meta";
// import Form from "../../components/form";

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <div>
        {/* <Header /> */}
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>{post.title} | Caketopia</title>
                {/* <meta
                  property="og:image"
                  content={imageBuilder(post.coverImage)
                    .width(640)
                    .height(480)
                    .url()}
                /> */}
              </Head>
              <Meta post={post} />
              <img
                src={imageBuilder(post.coverImage).width(640).height(480).url()}
              />
              <h1>{post.title}</h1>
              <p>{post.excerpt}</p>
            </article>
          </>
        )}
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview);
  return {
    props: {
      preview,
      post: data?.post || null,
      morePosts: data?.morePosts || null,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: true,
  };
}
