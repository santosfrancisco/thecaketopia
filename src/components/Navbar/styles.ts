import styled, { css } from "styled-components";

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  margin-bottom: 24px;
`;

export const MenuItem = styled.a<{ active?: boolean }>`
  cursor: pointer;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: center;

  color: var(--primary-color);
  text-decoration: none;
  padding: 4px 12px;

  ${({ active }) =>
    active &&
    css`
      border-bottom: 2px solid var(--secondary-color);
    `}

  & + & {
    margin-left: 20px;
  }
`;
