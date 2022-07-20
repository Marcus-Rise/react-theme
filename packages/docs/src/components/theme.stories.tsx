import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Theme } from "./theme.component";
import { ThemeProvider } from "@marcus-rise/react-theme";

const Config: ComponentMeta<typeof Theme> = {
  title: "components/Theme",
  component: Theme,
  decorators: [
    (Story) => (
      <ThemeProvider preferencesStorageKey={"OPTIONAL_APP_THEME_STORAGE_KEY"}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

const Template: ComponentStory<typeof Theme> = (args) => <Theme {...args} />;

const Default = Template.bind({});

export default Config;
export { Default };
