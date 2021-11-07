import styled from "styled-components";

export const Content = styled.div`
  font-size: 16px;
  line-height: 19px;
  color: var(--primary-color);

  ul {
    max-width: 400px;
    padding: 1em 2em;
    background: var(--lighten-secondary-color);
    position: relative;
    min-height: 10em;
    margin-top: 1em;
    margin-bottom: 3em;

    li:first-child {
      font-size: 18px;
      line-height: 2;
      color: var(--darken-primary-color);
      list-style: none;
    }
    li {
      font-size: 14px;
      list-style: square;
      left: -10px;
    }
    box-shadow: 5px 5px 28px -12px rgba(0, 0, 0, 0.47);
  }
  ul:after {
    content: "";
    position: absolute;
    bottom: -2em;
    left: 0;
    right: 2em;
    border-width: 1em;
    border-style: solid;
    border-color: var(--lighten-secondary-color);
  }
  ul:before {
    content: "";
    position: absolute;
    bottom: -2em;
    right: 0;
    border-width: 2em 2em 0 0;
    border-style: solid;
    border-color: var(--secondary-color) transparent;
  }

  img {
    max-width: 100%;
    margin-top: 1em;
    margin-bottom: 1em;
  }
  strong {
    font-weight: bold;
  }

  em,
  i {
    font-style: italic;
  }

  a {
    color: var(--secondary-color);
  }
`;
