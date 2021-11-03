import Avatar from "./avatar";
import Date from "./Date";
import CoverImage from "./CoverImage";
import PostTitle from "./post-title";

const PostHeader = ({ title, coverImage, date, author }) => {
  return (
    <>
      <div>
        <CoverImage title={title} imageObject={coverImage} url={coverImage} />
      </div>
      <div>
        <PostTitle>{title}</PostTitle>
        <div>
          <Avatar name={author?.name} picture={author?.picture} />
        </div>
        <div>
          <Date dateString={date} />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
