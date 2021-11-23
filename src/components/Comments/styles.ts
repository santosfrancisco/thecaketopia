import styled from "styled-components";

export const Container = styled.div``;

export const Title = styled.h2`
  color: var(--primary-color);
  text-transform: uppercase;
  margin-bottom: 32px;
`;

export const CommentAuthor = styled.h4`
  color: var(--primary-color);
  font-weight: bold;
  margin-bottom: 6px;
`;
export const CommentWrapper = styled.li`
  & + & {
    margin-top: 24px;
  }
`;

export const CommentContent = styled.p`
  color: var(--primary-color);
`;
