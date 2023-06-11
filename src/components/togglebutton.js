import { useContext, createContext, useState } from "react";
import { ThemeContext } from "./themecontext";
import { Button, DarkTheme } from "./styles";
function Toggletheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="App">
      <Button onClick={toggleTheme}>
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </Button>
    </div>
  );
}

export default Toggletheme;
