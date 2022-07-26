import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    padding: 0 !important;
    background-color: ${(props) => props.theme.background};
  }

  * {
    font-size: 1rem;
  }
`;

export { GlobalStyles };
