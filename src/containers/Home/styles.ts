import { config } from "react-awesome-styled-grid";
import styled from "styled-components";

export const Container = styled.div``;

export const PostsWrapper = styled.div`
  margin-bottom: 64px;
  ${(props) => config(props).media["sm"]`
    >:nth-child(2n + 2) {
      flex-direction: row-reverse;
      .post-preview__content {
        right: -80px;
        left: 0;
      }
      .post-preview__actions {
        justify-content: flex-start;
      }
    }
  `}
`;
