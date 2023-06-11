import { Nav, Ul, Li, StyledLink } from "./styles";
import { NavLink, Routes, Route } from "react-router-dom";
import Toggletheme from "./togglebutton";
import { ThemeContext } from "./themecontext";
import { useContext } from "react";
function Navbar() {
  const { theme, toggleTheme, themeStyles } = useContext(ThemeContext);

  return (
    <Nav>
      <Ul>
        <StyledLink to="/">
          <Li>Home</Li>
        </StyledLink>
        <StyledLink to="/about">
          <Li>About us</Li>
        </StyledLink>
        <StyledLink to="/users">
          <Li>Users</Li>
        </StyledLink>
      </Ul>
      <Toggletheme />
    </Nav>
  );
}

export default Navbar;
