import {
  HamburgerIconContainer,
  LogoContainer,
  Menu,
  MenuItem,
  MenuItemLink,
  NavbarContainer,
  NavbarWrapper,
} from "./NavbarStyles";
import { DiReact } from "react-icons/di";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <NavbarContainer>
        <NavbarWrapper>
          <LogoContainer>
            <DiReact size={50} color={"#61dbfb"} />
          </LogoContainer>
          <HamburgerIconContainer onClick={handleClick}>
            {click ? (
              <FaTimes size={30} color={"#61dbfb"} />
            ) : (
              <FaBars size={30} color={"#61dbfb"} />
            )}
          </HamburgerIconContainer>
          <Menu click={click}>
            <MenuItem onClick={handleClick}>
              <MenuItemLink
                to={"/"}
                className={`${({ isActive }) => (isActive ? "active" : "")}`}
              >
                Home
              </MenuItemLink>
            </MenuItem>
            <MenuItem onClick={handleClick}>
              <MenuItemLink
                to={"/about"}
                className={`${({ isActive }) => (isActive ? "active" : "")}`}
              >
                About Me
              </MenuItemLink>
            </MenuItem>
            <MenuItem onClick={handleClick}>
              <MenuItemLink
                to={"/portfolio"}
                className={`${({ isActive }) => (isActive ? "active" : "")}`}
              >
                Portfolio
              </MenuItemLink>
            </MenuItem>
            <MenuItem onClick={handleClick}>
              <MenuItemLink
                to={"/contact"}
                className={`${({ isActive }) => (isActive ? "active" : "")}`}
              >
                Contact
              </MenuItemLink>
            </MenuItem>
          </Menu>
        </NavbarWrapper>
      </NavbarContainer>
    </>
  );
};
