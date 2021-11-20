import PostPreview from "../PostPreview";
import * as Styled from "./styles";

export default function MoreStories({ posts }) {
  return (
    <Styled.Container>
      <Styled.Title>Você também pode gostar</Styled.Title>
      <Styled.PostsWrapper>
        {posts.map(({ slug, title, coverImage, excerpt, date }) => (
          <PostPreview
            slug={slug}
            title={title}
            coverImage={coverImage}
            date={date}
            excerpt={excerpt}
          />
        ))}
      </Styled.PostsWrapper>
    </Styled.Container>
  );
}
