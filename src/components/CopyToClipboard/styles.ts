import styled from "styled-components";

export const Button = styled.button`
  color: var(--primary-color);
  border-radius: 12px;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  :hover {
    filter: brightness(0.8);
    transform: scale(1.1);
    transition: transform 0.3s ease;
  }
`;
