import { useCallback, useContext } from "react";
import { ThemeContext } from "./theme.context";
import type { ThemePreferences } from "./theme-preferences";
import { ThemeReducerActions } from "./theme.reducer";

const useThemePreferences = () => {
  const { state, dispatch } = useContext(ThemeContext);

  const savePreferences = useCallback(
    (data: ThemePreferences) => {
      dispatch({ type: ThemeReducerActions.SET_PREFERENCES, payload: data });
      localStorage.setItem(state.storageKey, data);

      if (state.cookiesKey) {
        document.cookie = `${state.cookiesKey}=${data}`;
      }
    },
    [state.storageKey],
  );

  const clearPreferences = useCallback(() => {
    dispatch({ type: ThemeReducerActions.CLEAR_PREFERENCES });
    localStorage.removeItem(state.storageKey);

    if (state.cookiesKey) {
      document.cookie = `${state.cookiesKey}=""; max-age=0`;
    }
  }, [state.storageKey]);

  return { savePreferences, clearPreferences };
};

export { useThemePreferences };
