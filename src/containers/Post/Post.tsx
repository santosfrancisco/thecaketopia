import PostBody from "../../components/PostBody";
import MoreStories from "../../components/MoreStories";
import PostHeader from "../../components/PostHeader";
import Comments from "../../components/Comments";
import Head from "next/head";
import Form from "../../components/Form";
import { imageBuilder } from "../../../lib/sanity";
import React from "react";
import Meta from "../../components/Meta";
import Share from "../../components/Share";
import { Separator } from "../../components/Separator/Separator";

const Post = ({ post, morePosts }) => {
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
      <div style={{ marginTop: 48 }}>
        <Share post={post} />
      </div>
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
