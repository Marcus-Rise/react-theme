import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeProvider } from "../theme.context";
import type { FC } from "react";
import { useTheme } from "../theme.hook";

const Theme: FC = () => {
  const { isDarkTheme, toggleTheme, preferences } = useTheme();

  return (
    <div>
      <button onClick={toggleTheme}>toggle</button>
      <br />
      <span>preferences: {preferences}</span>
      <br />
      <span>isDarkTheme: {isDarkTheme ? "yes" : "no"}</span>
    </div>
  );
};

const Config: ComponentMeta<typeof Theme> = {
  title: "Theme",
  component: Theme,
  decorators: [
    (Story) => (
      <ThemeProvider preferencesStorageKey={"DEBUG_THEME"}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

const Template: ComponentStory<typeof Theme> = (args) => <Theme {...args} />;

const Default = Template.bind({});

export default Config;
export { Default };
