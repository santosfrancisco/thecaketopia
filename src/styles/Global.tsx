import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";
import { darken, lighten } from "polished";

export default createGlobalStyle`
  :root {
    --primary-color: ${colors.primary};
    --darken-primary-color: ${darken(0.2, colors.primary)};
    --lighten-primary-color: ${lighten(0.1, colors.primary)};
    --secondary-color: ${colors.secondary};
    --darken-secondary-color: ${darken(0.2, colors.secondary)};
    --lighten-secondary-color: ${lighten(0.1, colors.secondary)};
    --white: ${colors.white};
    --black: ${colors.black};
  }

  body {
    font-family: 'Lato', sans-serif;
  }

`;
