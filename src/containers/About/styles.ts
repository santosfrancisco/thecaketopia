import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProfileImage = styled.img``;

export const ProfileImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 48px;
  margin-bottom: 32px;
`;

export const Title = styled.h1`
  color: var(--primary-color);
  font-size: 24px;
  line-height: 29px;

  text-align: center;
  margin-bottom: 32px;
`;
export const Hightlight = styled.span`
  color: var(--secondary-color);
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 19px;
  color: var(--primary-color);
  max-width: 526px;
  align-self: center;
  margin-bottom: 24px;
`;

export const SocialWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

export const Link = styled.a``;
