import styled, { css } from "styled-components";
import { config } from "react-awesome-styled-grid";

const commonInputStyle = css`
  color: var(--primary-color);
  ::placeholder {
    color: var(--lighten-primary-color);
    font-style: italic;
  }

  border: 1px solid var(--primary-color);
  border-radius: 4px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  ${(props) => config(props).media["sm"]`
    
    max-width: 400px;
  `}
`;

export const Title = styled.h2`
  color: var(--primary-color);
  text-transform: uppercase;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: var(--primary-color);
`;
export const LabelText = styled.span`
  padding: 8px 0;
`;
export const Input = styled.input`
  height: 45px;
  font-size: 16px;
  padding: 0 8px;
  ${commonInputStyle};
`;
export const TextArea = styled.textarea`
  font-size: 16px;
  padding: 8px;
  ${commonInputStyle};
`;

export const SubmitButton = styled.button`
  height: 45px;
  background-color: var(--primary-color);
  color: var(--white);
  font-size: 18px;
  border: none;
  border-radius: 4px;
  margin: 12px 0;
  &:active {
    background-color: var(--darken-primary-color);
  }
`;

export const HelperText = styled.span`
  font-style: italic;
  font-size: 14px;
  padding: 2px 0;
`;

export const Text = styled.p`
  color: var(--primary-color);
  margin: 8px 0;
`;
