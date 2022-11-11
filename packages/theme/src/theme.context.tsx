import type { Dispatch, FC, PropsWithChildren } from "react";
import { createContext, useEffect, useReducer } from "react";
import type { ThemeReducerAction, ThemeReducerState } from "./theme.reducer";
import { themeReducer, ThemeReducerActions, themeReducerInitialState } from "./theme.reducer";
import type { ThemePreferences } from "./theme-preferences";

const ThemeContext = createContext<{
  state: ThemeReducerState;
  dispatch: Dispatch<ThemeReducerAction>;
}>({
  state: themeReducerInitialState,
  dispatch: () => null,
});

type Config = {
  preferencesStorageKey?: string;
};

const ThemeProvider: FC<PropsWithChildren<Config>> = ({ children, preferencesStorageKey }) => {
  const [state, dispatch] = useReducer(themeReducer, {
    ...themeReducerInitialState,
    storageKey: preferencesStorageKey ?? themeReducerInitialState.storageKey,
  });

  /**
   * watching client prefers color scheme
   */
  useEffect(() => {
    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const eventName = "change";
    const eventListener = (event: MediaQueryListEvent) => {
      dispatch({ type: ThemeReducerActions.SET_IS_SYSTEM_THEME_DARK, payload: event.matches });
    };

    dispatch({
      type: ThemeReducerActions.SET_IS_SYSTEM_THEME_DARK,
      payload: darkModeQuery.matches,
    });

    darkModeQuery.addEventListener(eventName, eventListener);

    return () => darkModeQuery.removeEventListener(eventName, eventListener);
  }, []);

  /**
   * restore preferences from client
   */
  useEffect(() => {
    let preferences: ThemePreferences | null;

    try {
      preferences = localStorage.getItem(state.storageKey);
    } catch {
      preferences = null;
    }

    if (preferences) {
      dispatch({
        type: ThemeReducerActions.SET_PREFERENCES,
        payload: preferences,
      });
    }
  }, []);

  return <ThemeContext.Provider value={{ state, dispatch }}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider, ThemeContext };
