import { Nav, Ul, Li } from "./styles";
import { NavLink, Routes, Route } from "react-router-dom";
function Navbar() {
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
    </Nav>
  );
}

export default Navbar;
