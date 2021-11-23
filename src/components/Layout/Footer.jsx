import styled from "styled-components";

const Copyright = styled.span`
  color: var(--primary-color);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
`;

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin-top: 24px;
`;

const StyledLink = styled.a``;

export default function Footer({ author }) {
  return (
    <StyledFooter>
      <Copyright>©2021 Karina Mesquita</Copyright>
    </StyledFooter>
  );
}
