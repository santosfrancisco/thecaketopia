// import Avatar from "./avatar";
import Date from "../Date";
import CoverImage from "../CoverImage";
import PostTitle from "../post-title";
import * as Styled from "./styles";

const PostHeader = ({ title, coverImage, date }) => {
  return (
    <Styled.Container>
      <div>
        <CoverImage title={title} url={coverImage} />
      </div>
      <div>
        <Styled.DateWrapper>
          <Date dateString={date} />
        </Styled.DateWrapper>
        <Styled.PostTitle>{title}</Styled.PostTitle>
      </div>
    </Styled.Container>
  );
};

export default PostHeader;
