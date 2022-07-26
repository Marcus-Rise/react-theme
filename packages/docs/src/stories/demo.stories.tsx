import type { Meta, Story } from "@storybook/react";
import { ThemePreference, ThemeProvider, useTheme } from "@marcus-rise/react-theme";
import styled, { ThemeProvider as StyledComponentsProvider } from "styled-components";
import { useMemo } from "react";
import { darkTheme, defaultTheme, GlobalStyles } from "../styles";

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Config: Meta = {
  title: "Demo",
  parameters: {
    docs: {
      page: null,
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider preferencesStorageKey={"OPTIONAL_APP_THEME_STORAGE_KEY"}>
        <Wrapper>
          <Story />
        </Wrapper>
      </ThemeProvider>
    ),
  ],
};

const ThemeToggle = styled.button`
  background-color: ${({ theme }) => theme.primary};
  border: none;
  border-radius: 0.25rem;
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  color: ${({ theme }) => theme.lightest};

  &:hover {
    cursor: pointer;
  }
`;

const Preferences = styled.span`
  color: ${(props) => props.theme.text};
`;

const Template: Story = () => {
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
    <StyledComponentsProvider theme={currentTheme}>
      <GlobalStyles />
      <ThemeToggle onClick={toggleTheme} title={title}>
        toggle preferences
      </ThemeToggle>
      <br />
      <Preferences>preferences {icon}</Preferences>
    </StyledComponentsProvider>
  );
};

const Default = Template.bind({});

export default Config;
export { Default };
