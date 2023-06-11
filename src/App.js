import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext, createContext, useState } from "react";
import { ThemeContext, ThemeProvider } from "./components/themecontext";
import About from "./pages/about";
// import { ThemeProvider } from "styled-components";
import Home from "./pages/home";
import { Button, DarkTheme, LightTheme } from "./components/styles";
import { UsersPage } from "./pages/users";

function App() {
  const { theme, themeStyles } = useContext(ThemeContext);
  // theme={theme === "light" ? LightTheme : DarkTheme}
  return (
    <div className="App" style={themeStyles[theme]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<UsersPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
