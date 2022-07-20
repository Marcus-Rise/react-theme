import type { Reducer } from "react";
import type { ThemePreferences } from "./types";
import { ThemePreference } from "./types";

type ThemeReducerState = {
  isDark: boolean;
  isSystemThemeDark: boolean;
  storageKey: string;
  preferences: ThemePreferences;
};

const themeReducerInitialState: ThemeReducerState = {
  preferences: ThemePreference.SYSTEM,
  storageKey: "THEME_PREFERENCES",
  isDark: false,
  isSystemThemeDark: false,
};

enum ThemeReducerActions {
  SET_IS_THEME_DARK = "SET_IS_THEME_DARK",
  SET_IS_SYSTEM_THEME_DARK = "SET_IS_SYSTEM_THEME_DARK",
  SET_PREFERENCES = "SET_PREFERENCES",
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

type ThemeReducerAction =
  | ThemeReducerActionIsSetThemeDark
  | ThemeReducerActionSetIsSystemThemeDark
  | ThemeReducerActionSetPreferences;

const themeReducer: Reducer<ThemeReducerState, ThemeReducerAction> = (prevState, action) => {
  console.debug(action);

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

    default:
      return prevState;
  }
};

export { themeReducerInitialState, themeReducer, ThemeReducerActions };
export type { ThemeReducerState, ThemeReducerAction };
