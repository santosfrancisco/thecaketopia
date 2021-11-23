import styled from "styled-components";
import { config } from "react-awesome-styled-grid";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  & + & {
    margin-top: 32px;
    ${(props) => config(props).media["sm"]`
      margin-top: 0;
      margin-left: 32px;
    `}
  }
`;

export const CoverImageWrapper = styled.div`
  width: 100%;
  img {
    border-radius: 4px;
  }
`;
export const PostInfo = styled.div`
  position: relative;
  width: 100%;
`;

export const PostInfoContent = styled.div`
  padding: 12px;
  background-color: var(--white);
`;

export const DateWrapper = styled.div`
  margin-top: 16px;
`;

export const Title = styled.h3`
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  margin-top: 16px;

  text-transform: uppercase;

  a {
    text-decoration: none;
    color: var(--primary-color);
  }
`;
