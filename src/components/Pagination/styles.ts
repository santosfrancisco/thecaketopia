import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Navigate = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: var(--primary-color);
  font-size: 16px;
  line-height: 17px;
  gap: 16px;
  :not([disabled]) {
    &:hover {
      transform: scale(1.1);
      transition: transform 0.5s ease-in-out;
    }
  }
  &:disabled {
    color: var(--lighten-primary-color);
    cursor: not-allowed;
  }
`;
