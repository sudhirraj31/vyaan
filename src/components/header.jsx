import React, { useState } from "react";
import logo from "./img/vyaanlogo.png";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = (props) => {
  const [isNavOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isNavOpen);
  console.log(isNavOpen);
  return (
    <div>
      <Navbar light expand="sm" fixed="top">
        <div className="container-fluid">
          <div className="row">
            <NavbarBrand className="col pl-5" href="/">
              <img src={logo} width="20%" height="auto" alt="logo" />
            </NavbarBrand>
            <div className="col align-self-center d-flex justify-content-end">
              <NavbarToggler onClick={toggleNav} />
              <Collapse className="justify-content-end" isOpen={isNavOpen} navbar>
                <Nav navbar>
                  <NavItem>
                    <NavLink className="nav-link  px-md-3 px-lg-4 " to="/">
                      Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link  px-md-3 px-lg-4 " to="/blog">
                      Blog
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link  px-md-3 px-lg-4 " to="/aboutus">
                      About Us
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link  px-md-3 px-lg-4 " to="/contactus">
                      Contact Us
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </div>
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
