import type { Reducer } from "react";
import type { ThemePreferences } from "./types";

type ThemeReducerState = {
  isDark: boolean;
  isSystemThemeDark: boolean;
  storageKey: string;
  preferences: ThemePreferences | null;
};

const themeReducerInitialState: ThemeReducerState = {
  preferences: null,
  storageKey: "THEME_PREFERENCES",
  isDark: false,
  isSystemThemeDark: false,
};

enum ThemeReducerActions {
  SET_IS_THEME_DARK = "SET_IS_THEME_DARK",
  SET_IS_SYSTEM_THEME_DARK = "SET_IS_SYSTEM_THEME_DARK",
  SET_PREFERENCES = "SET_PREFERENCES",
  CLEAR_PREFERENCES = "CLEAR_PREFERENCES",
}

type ThemeReducerActionIsSetThemeDark = {
  type: ThemeReducerActions.SET_IS_THEME_DARK;
  payload: boolean;
};

type ThemeReducerActionSetIsSystemThemeDark = {
  type: ThemeReducerActions.SET_IS_SYSTEM_THEME_DARK;
  payload: boolean;
};

type ThemeReducerActionSetPreferences = {
  type: ThemeReducerActions.SET_PREFERENCES;
  payload: ThemePreferences;
};

type ThemeReducerActionClearPreferences = {
  type: ThemeReducerActions.CLEAR_PREFERENCES;
};

type ThemeReducerAction =
  | ThemeReducerActionIsSetThemeDark
  | ThemeReducerActionSetIsSystemThemeDark
  | ThemeReducerActionSetPreferences
  | ThemeReducerActionClearPreferences;

const themeReducer: Reducer<ThemeReducerState, ThemeReducerAction> = (prevState, action) => {
  switch (action.type) {
    case ThemeReducerActions.SET_IS_THEME_DARK: {
      return {
        ...prevState,
        isDark: action.payload,
      };
    }

    case ThemeReducerActions.SET_IS_SYSTEM_THEME_DARK: {
      return {
        ...prevState,
        isSystemThemeDark: action.payload,
      };
    }

    case ThemeReducerActions.SET_PREFERENCES: {
      return {
        ...prevState,
        preferences: action.payload,
      };
    }

    case ThemeReducerActions.CLEAR_PREFERENCES: {
      return {
        ...prevState,
        preferences: null,
      };
    }

    default:
      return prevState;
  }
};

export { themeReducerInitialState, themeReducer, ThemeReducerActions };
export type { ThemeReducerState, ThemeReducerAction };
