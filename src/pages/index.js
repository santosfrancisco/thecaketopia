// import Container from "../components/Container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import HomeHeader from "../components/HomeHeader";
import Intro from "../components/intro";
import Layout from "../components/Layout";
import { getAllPostsForHome } from "../../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import PostItem from "../components/PostItem/PostItem";

export default function Index({ allPosts, preview }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>The Caketopia</title>
        </Head>
        <HomeHeader />
        {/* <Container> */}
        {/* {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
        {allPosts.map((post) => (
          <PostItem key={post.slug}>title: {post.title}</PostItem>
        ))}
        {/* </Container> */}
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  console.time("getPosts");
  const allPosts = await getAllPostsForHome(preview);
  console.timeEnd("getPosts");
  return {
    props: { allPosts, preview },
    revalidate: 1,
  };
}
