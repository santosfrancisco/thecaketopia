import styled from "styled-components";
import { config } from "react-awesome-styled-grid";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  & + & {
    margin-top: 32px;
  }
  ${(props) => config(props).media["sm"]`
  flex-direction: row;
    
  `}
`;

export const CoverImageWrapper = styled.div`
  width: 100%;
  img {
    border-radius: 4px;
  }
  ${(props) => config(props).media["sm"]`
  width: 50%;
  `}
`;
export const PostInfo = styled.div`
  position: relative;
  width: 100%;
  ${(props) => config(props).media["sm"]`
  width: 50%;
    
  `}
`;

export const PostInfoContent = styled.div`
  padding: 12px;
  background-color: var(--white);

  ${(props) => config(props).media["sm"]`
  position: absolute;
  left: -80px;
  top: 50%;
  transform: translateY(-50%);
    
  `}
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

export const Excerpt = styled.p`
  font-size: 14px;
  line-height: 17px;
  color: var(--primary-color);
  margin-top: 24px;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

export const Button = styled.button`
  border-radius: 4px;
  width: 96px;
  height: 36px;
  background-color: var(--primary-color);
  color: var(--white);
  font-size: 14px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  &:hover {
    filter: brightness(0.8);
  }
`;
