import { useRouter } from "next/router";
import ErrorPage from "next/error";
// import Container from "../../components/Container";
import PostBody from "../../components/PostBody";
import MoreStories from "../../components/more-stories";
import PostHeader from "../../components/PostHeader";
import Comments from "../../components/comments";
import Layout from "../../components/Layout";
import Head from "next/head";
import Form from "../../components/form";
import { imageBuilder } from "../../../lib/sanity";
import React from "react";
import Meta from "../../components/Meta";
import Share from "../../components/Share";
import { Separator } from "../../components/Separator/Separator";

const Post = ({ post, morePosts }) => {
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
      <Separator />
      {morePosts.length > 0 && (
        <>
          <MoreStories posts={morePosts} />
          <Separator />
        </>
      )}

      <Comments comments={post.comments} />
      <Form _id={post._id} />
    </>
  );
};

export default Post;
