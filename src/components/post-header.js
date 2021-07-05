import Avatar from "components/avatar";
import Date from "components/date";
import CoverImage from "components/cover-image";
import PostTitle from "components/post-title";

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
