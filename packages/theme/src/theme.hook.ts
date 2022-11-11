import { useCallback, useContext, useMemo } from "react";
import { useThemePreferences } from "./theme-preferences.hook";
import { ThemeContext } from "./theme.context";
import { ThemePreference } from "./theme-preferences";

const useTheme = () => {
  const { state } = useContext(ThemeContext);
  const { savePreferences, clearPreferences } = useThemePreferences();

  const toggleTheme = useCallback(() => {
    switch (state.preferences) {
      case ThemePreference.LIGHT: {
        savePreferences(ThemePreference.DARK);
        break;
      }
      case ThemePreference.DARK: {
        clearPreferences();
        break;
      }
      default: {
        savePreferences(ThemePreference.LIGHT);
        break;
      }
    }
  }, [state.preferences, savePreferences]);

  const isDark = useMemo(
    () =>
      !state.preferences ? state.isSystemThemeDark : state.preferences === ThemePreference.DARK,
    [state.isSystemThemeDark, state.preferences],
  );

  return {
    isDarkTheme: isDark,
    preferences: state.preferences,
    toggleTheme,
    setTheme: savePreferences,
    resetThemeToSystem: clearPreferences,
  };
};

export { useTheme };
