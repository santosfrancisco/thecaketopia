import Layout from "../components/Layout";
import { getAllPostsForHome } from "../../lib/api";
import Head from "next/head";
import Home from "../containers/Home";

export default function Index({ allPosts, preview }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>The Caketopia</title>
        </Head>
        <Home posts={allPosts} />
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
