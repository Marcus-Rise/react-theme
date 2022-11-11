import { ThemeProvider, useTheme } from "@marcus-rise/react-theme";

const ThemeToggle = () => {
  const { isDarkTheme, preferences, toggleTheme } = useTheme();

  return (
    <>
      <button onClick={toggleTheme}>toggle</button>
      <br />
      <span>preferences: {preferences}</span>
      <br />
      <span>isDarkTheme: {isDarkTheme ? "yes" : "no"}</span>
    </>
  );
};

const App = () => (
  <ThemeProvider>
    <ThemeToggle />
  </ThemeProvider>
);

export { App };
