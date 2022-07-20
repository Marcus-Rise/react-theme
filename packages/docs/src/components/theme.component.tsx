import styled, { ThemeProvider } from "styled-components";
import { FC, useMemo } from "react";
import { darkTheme, defaultTheme, GlobalStyles } from "../styles";
import { ThemePreference, useTheme } from "@marcus-rise/react-theme";

const ThemeToggle = styled.button`
  background-color: ${({ theme }) => theme.primary};
  border: none;
  border-radius: 100%;
  font-size: 1rem;
  padding: 0.25rem;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  color: ${({ theme }) => theme.lightest};

  &:hover {
    cursor: pointer;
  }
`;

const Theme: FC = () => {
  const { isDarkTheme, preferences, toggleTheme } = useTheme();

  const { icon, title } = useMemo(() => {
    let meta: { icon: string; title: string };

    switch (preferences) {
      case ThemePreference.LIGHT: {
        meta = { title: "Light", icon: "☀︎" };
        break;
      }
      case ThemePreference.DARK: {
        meta = { title: "Dark", icon: "☾" };
        break;
      }
      case ThemePreference.SYSTEM:
      default: {
        meta = { title: "System", icon: "⌽" };
        break;
      }
    }

    return meta;
  }, [preferences]);

  const currentTheme = useMemo(() => (isDarkTheme ? darkTheme : defaultTheme), [isDarkTheme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <ThemeToggle onClick={toggleTheme} title={title}>
        {icon}
      </ThemeToggle>
    </ThemeProvider>
  );
};

export { Theme };
