import styled, {ThemeProvider} from "styled-components";
import {FC, useMemo} from "react";
import {ThemeEnum, ThemePreferencesEnum, useTheme} from "@marcus-rise/react-theme";
import {darkTheme, defaultTheme, GlobalStyles} from "../styles";

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

const Theme: FC = ({  }) => {
  const { theme, preferences, toggleTheme } = useTheme("APP_THEME");

  const { icon, title } = useMemo(() => {
    let meta: { icon: string; title: string };

    switch (preferences) {
      case ThemePreferencesEnum.LIGHT: {
        meta = { title: "Light", icon: "☀︎" };
        break;
      }
      case ThemePreferencesEnum.DARK: {
        meta = { title: "Dark", icon: "☾" };
        break;
      }
      case ThemePreferencesEnum.SYSTEM:
      default: {
        meta = { title: "System", icon: "⌽" };
        break;
      }
    }

    return meta;
  }, [preferences]);

  const currentTheme = useMemo(() => (theme == ThemeEnum.DARK ? darkTheme : defaultTheme), [theme]);

  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles/>
        <ThemeToggle onClick={toggleTheme} title={title}>
          {icon}
        </ThemeToggle>
      </ThemeProvider>
    </>
  );
};

export { Theme };
