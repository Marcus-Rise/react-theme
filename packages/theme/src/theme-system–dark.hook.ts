import { useEffect, useState } from "react";

const useThemeSystemDark = (): boolean => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const eventName = "change";
    const eventListener = (event: MediaQueryListEvent) => {
      setIsDark(event.matches);
    };

    setIsDark(darkModeQuery.matches);

    darkModeQuery.addEventListener(eventName, eventListener);

    return () => darkModeQuery.removeEventListener(eventName, eventListener);
  }, []);

  return isDark;
};

export { useThemeSystemDark };
