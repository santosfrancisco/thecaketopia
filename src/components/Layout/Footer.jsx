// import Container from "../container";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
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
  justify-content: space-between;
  align-items: center;
  height: 50px;
  margin-top: 24px;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Copyright>©2021 Karina Mesquita</Copyright>
      <div>
        <a href="#">
          <AiFillInstagram size={30} color="#9774CC" />
        </a>
        <a href="#">
          <AiFillLinkedin size={30} color="#9774CC" />
        </a>
      </div>
    </StyledFooter>
  );
}
