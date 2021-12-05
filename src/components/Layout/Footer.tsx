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

export default function Footer() {
  return (
    <StyledFooter>
      <Copyright>©{new Date().getFullYear()} Karina Mesquita</Copyright>
    </StyledFooter>
  );
}
