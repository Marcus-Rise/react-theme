import { useCallback, useContext } from "react";
import { ThemeContext } from "./theme.context";
import type { ThemePreferences } from "./types";
import { ThemeReducerActions } from "./theme.reducer";

const useThemePreferences = () => {
  const { state, dispatch } = useContext(ThemeContext);

  const savePreferences = useCallback(
    (data: ThemePreferences) => {
      dispatch({ type: ThemeReducerActions.SET_PREFERENCES, payload: data });
      localStorage.setItem(state.storageKey, data);
    },
    [state.storageKey],
  );

  return { savePreferences };
};

export { useThemePreferences };
