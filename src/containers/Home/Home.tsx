import React from "react";
import * as Styled from "./styles";
import HomeHeader from "../../components/HomeHeader";
import PostItem from "../../components/PostItem";
import PostPreview from "../../components/PostPreview";
import styled from "styled-components";
import { PostInfoContent } from "../../components/PostPreview/styles";
import { config } from "react-awesome-styled-grid";

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
  // const heroPost = posts[0];
  // const morePosts = posts.slice(1);
  return (
    <Styled.Container>
      <HomeHeader />
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
      <Styled.PostsWrapper>
        {posts.map((post) => (
          <PostPreview
            author={post.author}
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
