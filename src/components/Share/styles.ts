import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  color: var(--primary-color);
  font-weight: bold;
`;

export const SocialLink = styled.a`
  :hover {
    filter: brightness(0.8);
    transform: scale(1.1);
    transition: transform 0.3s ease;
  }
`;
