import { useCallback, useEffect, useMemo, useState } from "react";
import { ThemePreferencesEnum, useThemePreferences } from "./theme-preferences.hook";
import { useThemeSystemDark } from "./theme-system–dark.hook";

enum ThemeEnum {
  LIGHT,
  DARK,
}

/**
 *
 * @param localStorageKey {string} storing value in local storage
 */
const useTheme = (localStorageKey?: string) => {
  const [isDark, setIsDark] = useState(false);
  const [preferences, savePreferences] = useThemePreferences(localStorageKey);
  const isThemeSystemDark = useThemeSystemDark();

  const toggleTheme = useCallback(() => {
    switch (preferences) {
      case ThemePreferencesEnum.LIGHT: {
        savePreferences(ThemePreferencesEnum.DARK);
        break;
      }
      case ThemePreferencesEnum.DARK: {
        savePreferences(ThemePreferencesEnum.SYSTEM);
        break;
      }
      default: {
        savePreferences(ThemePreferencesEnum.LIGHT);
        break;
      }
    }
  }, [preferences, savePreferences]);

  useEffect(() => {
    if (preferences === ThemePreferencesEnum.SYSTEM) {
      setIsDark(isThemeSystemDark);
    } else {
      setIsDark(preferences === ThemePreferencesEnum.DARK);
    }
  }, [isThemeSystemDark, preferences]);

  const theme: ThemeEnum = useMemo(() => (isDark ? ThemeEnum.DARK : ThemeEnum.LIGHT), [isDark]);

  return {
    theme,
    preferences,
    toggleTheme,
  };
};

export { useTheme, ThemeEnum };
