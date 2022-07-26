import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primary: Color;
    lightest: Color;
    text: Color;
    background: Color;
  }
}
