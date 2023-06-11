import { useContext, createContext, useState } from "react";
import { DarkTheme } from "./styles";

export const ThemeContext = createContext();
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  //   toggle app theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const themeStyles = {
    light: {
      backgroundColor: "white",
      color: "black",
    },
    dark: {
      backgroundColor: "#1b1b1b",
      color: "white",
    },
  };
  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, toggleTheme, themeStyles }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
