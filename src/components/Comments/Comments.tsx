import React from "react";
import Date from "../Date";
import { Separator } from "../Separator/Separator";
import * as Styled from "./styles";

const Comments = ({ comments }) => {
  return (
    <Styled.Container>
      <Styled.Title>Comentários:</Styled.Title>
      <ul>
        {comments?.map(({ _id, _createdAt, name, email, comment }) => (
          <li key={_id}>
            <Separator style={{ margin: "1em 0" }} />
            <Styled.CommentAuthor>
              <span>{name}</span> (
              <Date dateString={_createdAt} />)
            </Styled.CommentAuthor>
            <Styled.CommentContent>{comment}</Styled.CommentContent>
          </li>
        ))}
      </ul>
      <Separator style={{ margin: "1em 0" }} />
    </Styled.Container>
  );
};

export default Comments;
