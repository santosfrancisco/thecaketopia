import React from "react";
import { DateToNow } from "../Date";
import { Separator } from "../Separator/Separator";
import * as Styled from "./styles";

const Comments = ({ comments }) => {
  return (
    <Styled.Container>
      <Styled.Title>Comentários:</Styled.Title>
      <ul>
        {comments?.map(({ _id, _createdAt, name, email, comment }) => (
          <Styled.CommentWrapper key={_id}>
            <Styled.CommentAuthor>
              <span>{name}</span> - <DateToNow dateString={_createdAt} />
            </Styled.CommentAuthor>
            <Styled.CommentContent>{comment}</Styled.CommentContent>
          </Styled.CommentWrapper>
        ))}
      </ul>
      <Separator style={{ margin: "1em 0" }} />
    </Styled.Container>
  );
};

export default Comments;
