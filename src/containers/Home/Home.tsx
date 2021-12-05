import React from "react";
import * as Styled from "./styles";
import HomeHeader from "../../components/HomeHeader";
import PostItem from "../../components/PostItem";

type Post = {
  title: string;
  coverImage: string;
  date: string;
  author: string;
  slug: string;
  excerpt: string;
};

type HomeProps = {
  posts: Post[];
};

const Home: React.FC<HomeProps> = ({ posts }) => {
  return (
    <Styled.Container>
      <HomeHeader />
      <Styled.PostsWrapper>
        {posts.map((post) => (
          <PostItem
            key={post.slug}
            date={post.date}
            excerpt={post.excerpt}
            coverImage={post.coverImage}
            title={post.title}
            slug={post.slug}
          />
        ))}
      </Styled.PostsWrapper>
    </Styled.Container>
  );
};

export default Home;
