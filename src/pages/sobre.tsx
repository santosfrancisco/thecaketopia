import React from "react";
import { getAuthor } from "../../lib/api";
import Layout from "../components/Layout";
import About from "../containers/About";

const AboutPage = ({ author }) => {
  return (
    <Layout>
      <About author={author} />
    </Layout>
  );
};

export async function getStaticProps() {
  console.time("getPosts");
  const [author] = await getAuthor();
  console.timeEnd("getPosts");
  return {
    props: { author },
    revalidate: 1,
  };
}

export default AboutPage;
