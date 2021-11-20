import styled from "styled-components";
import { config } from "react-awesome-styled-grid";

export const Container = styled.div``;

export const Title = styled.h2`
  color: var(--primary-color);
  font-weight: bold;
  font-size: 18px;
  line-height: 2;
  text-transform: uppercase;
`;

export const PostsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  ${(props) => config(props).media["sm"]`
    flex-direction: row;
  `}
`;
