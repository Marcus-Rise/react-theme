import { useCallback, useContext } from "react";
import { useThemePreferences } from "./theme-preferences.hook";
import { ThemeContext } from "./theme.context";
import { ThemePreference } from "./types";

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

  return {
    isDarkTheme: state.isDark,
    preferences: state.preferences,
    toggleTheme,
    setTheme: savePreferences,
    resetThemeToSystem: clearPreferences,
  };
};

export { useTheme };
