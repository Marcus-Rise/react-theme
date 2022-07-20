import { useCallback, useContext, useEffect } from "react";
import { useThemePreferences } from "./theme-preferences.hook";
import { ThemeContext } from "./theme.context";
import { ThemeReducerActions } from "./theme.reducer";
import { ThemePreference } from "./types";

const useTheme = () => {
  const { dispatch, state } = useContext(ThemeContext);
  const { savePreferences } = useThemePreferences();

  const toggleTheme = useCallback(() => {
    switch (state.preferences) {
      case ThemePreference.LIGHT: {
        savePreferences(ThemePreference.DARK);
        break;
      }
      case ThemePreference.DARK: {
        savePreferences(ThemePreference.SYSTEM);
        break;
      }
      default: {
        savePreferences(ThemePreference.LIGHT);
        break;
      }
    }
  }, [state.preferences, savePreferences]);

  useEffect(() => {
    if (state.preferences === ThemePreference.SYSTEM) {
      dispatch({ type: ThemeReducerActions.SET_IS_THEME_DARK, payload: state.isSystemThemeDark });
    } else {
      dispatch({
        type: ThemeReducerActions.SET_IS_THEME_DARK,
        payload: state.preferences === ThemePreference.DARK,
      });
    }
  }, [state.preferences, state.isSystemThemeDark]);

  return {
    isDarkTheme: state.isDark,
    preferences: state.preferences,
    toggleTheme,
  };
};

export { useTheme };
