import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

export default createGlobalStyle`
  :root {
    --primary-color: ${colors.primary};
    --secondary-color: ${colors.secondary};
    --white: ${colors.white};
    --black: ${colors.black};
  }

  body {
    font-family: 'Lato', sans-serif;
  }

`;
