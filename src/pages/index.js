import React from "react";
import Layout from "../components/Layout";
import Pagination from "../components/Pagination";
import { getAllPostsForHome, getPostsCount } from "../../lib/api";
import Head from "next/head";
import Home from "../containers/Home";
import Meta from "../components/Meta";
import { useRouter } from "next/router";
import { POSTS_PER_PAGE } from "../../lib/constants";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";

export default function Index({ initialPosts, postsCount, preview }) {
  const { query } = useRouter();
  const currentPage = +query?.page || 0;
  const [posts, setPosts] = React.useState(initialPosts);

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>The Caketopia</title>
        </Head>
        <Meta />
        <Home posts={posts} />
        <Pagination
          count={postsCount}
          currentPage={currentPage}
          onGetPosts={setPosts}
        />
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const preview = false;
  const postsCount = await getPostsCount(preview);
  const totalPages = postsCount / POSTS_PER_PAGE;
  if (query?.page > totalPages || query?.page < 0) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  } else {
    const initialPosts = await getAllPostsForHome(preview, query?.page);

    return {
      props: { initialPosts, postsCount, preview },
    };
  }
}
