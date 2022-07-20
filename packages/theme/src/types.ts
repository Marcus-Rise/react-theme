enum ThemePreference {
  DARK = "dark",
  LIGHT = "light",
  SYSTEM = "system",
}

type ThemePreferences = ThemePreference | string;

export { ThemePreference };
export type { ThemePreferences };
