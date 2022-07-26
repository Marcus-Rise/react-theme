import type { DefaultTheme } from "styled-components";

const defaultTheme: DefaultTheme = {
  primary: "#1c33a8",
  background: "#fff",
  lightest: "#e1e1e1",
  text: "#282828",
};

const createTheme = (theme: Partial<DefaultTheme>): DefaultTheme => ({
  ...defaultTheme,
  ...theme,
});

const darkTheme = createTheme({
  primary: "#750d74",
  background: "#262626",
  text: "#eee",
});

export { defaultTheme, darkTheme };
