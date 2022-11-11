# React theme

Handle system color scheme and user preferences.

https://react-theme.marcus-rise.dev

## Install

using `npm`

```bash
npm install @marcus-rise/react-theme
```

or using `yarn`

```bash
yarn add @marcus-rise/react-theme
```

## Usage

First of all, we need to initialize `ThemeProvider` context, and after this we can get access with
hook `useTheme`.

```tsx
import {ThemeProvider, useTheme} from "@marcus-rise/react-theme";

const ThemeToggle = () => {
  const {isDarkTheme, preferences, toggleTheme} = useTheme();

  return (
    <>
      <button onClick={toggleTheme}>toggle</button>
      <br/>
      <span>preferences: {JSON.stringify(preferences)}</span>
      <br/>
      <span>isDarkTheme: {isDarkTheme ? "yes" : "no"}</span>
    </>
  )
}

const App = () => (
  <ThemeProvider>
    <ThemeToggle/>
  </ThemeProvider>
)
```

## API

### Context provider `ThemeProvider`

To set custom localStorage key set `preferencesStorageKey` property for user preferences

```tsx
<ThemeProvider preferencesStorageKey={"OPTIONAL_APP_THEME_STORAGE_KEY"}>
```

### Hook `useTheme`

- `isDarkTheme` is a`boolean` what color scheme is selected, basing on user preferences and system
  settings
- `preferences` is a `string` form `enum`

```ts
enum ThemePreference {
  DARK = "dark",
  LIGHT = "light",
}
```

- `toggleTheme` toggle theme from system default to light, from light to dark and from dark to
  system default
- `setTheme` set theme (dark or light)
- `resetThemeToSystem` set theme to system default
