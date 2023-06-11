import { Nav, Ul, Li } from "./styles";
import { NavLink, Routes, Route } from "react-router-dom";
import Toggletheme from "./togglebutton";
import { ThemeContext } from "./themecontext";
import { useContext } from "react";
function Navbar() {
  const { theme, toggleTheme, themeStyles } = useContext(ThemeContext);
  return (
    <Nav>
      <Ul>
        <NavLink to="/">
          <Li>Home</Li>
        </NavLink>
        <NavLink to="/about">
          <Li>About us</Li>
        </NavLink>
        <NavLink to="/users">
          <Li>Users</Li>
        </NavLink>
      </Ul>
      <Toggletheme />
    </Nav>
  );
}

export default Navbar;
