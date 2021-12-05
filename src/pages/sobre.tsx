import React from "react";
import { getAuthor } from "../../lib/api";
import Layout from "../components/Layout";
import Meta from "../components/Meta";
import About from "../containers/About";

const AboutPage = ({ author }) => {
  return (
    <Layout>
      <Meta
        post={{
          title: "Sobre mim",
          excerpt:
            "Olá! Me chamo Karina Mesquita e sou apaixonada pela confeitaria",
          coverImage: author.authorImage,
        }}
      />

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
