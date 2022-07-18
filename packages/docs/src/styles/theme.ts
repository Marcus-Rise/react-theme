import type { DefaultTheme } from "styled-components";

const defaultTheme: DefaultTheme = {
  primary: "#1c33a8",
  background: "#fff",
  lightest: "#eee",
};

const createTheme = (theme: Partial<DefaultTheme>): DefaultTheme => ({
  ...defaultTheme,
  ...theme,
});

const darkTheme = createTheme({
  background: "#262626",
  lightest: "#eee",
});

export { defaultTheme, darkTheme };
