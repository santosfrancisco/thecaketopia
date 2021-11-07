import { useRouter } from "next/router";
import ErrorPage from "next/error";
// import Container from "../../components/Container";
import PostBody from "../../components/PostBody";
// import MoreStories from "../../components/more-stories";
import Header from "../../components/header";
import PostHeader from "../../components/PostHeader";
import Comments from "../../components/comments";
import SectionSeparator from "../../components/section-separator";
import Layout from "../../components/Layout";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../../lib/api";
import PostTitle from "../../components/post-title";
import Head from "next/head";
import Form from "../../components/form";
import { imageBuilder } from "../../../lib/sanity";
import React from "react";
import Meta from "../../components/Meta";
import Share from "../../components/Share";
import { Separator } from "../../components/Separator/Separator";

const Post = ({ post }) => {
  // const router = useRouter();
  // if (!router.isFallback && !post?.slug) {
  //   return <ErrorPage statusCode={404} />;
  // }
  return (
    <>
      <article>
        <Head>
          <title>{post.title} | Caketopia</title>
        </Head>
        <Meta post={post} />
        <PostHeader
          title={post.title}
          coverImage={imageBuilder(post.coverImage).width(1240).height(540)}
          date={post.date}
        />
        <PostBody content={post.body} />
      </article>
      <Separator />
      <Share post={post} />

      {/* <Comments comments={post.comments} /> */}
      {/* <Form _id={post._id} /> */}

      {/* <SectionSeparator /> */}
      {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
    </>
  );
};

export default Post;
