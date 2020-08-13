import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink } from "reactstrap"

function HeaderNav() {
  const spot = useLocation();

  const [shrunk, setShrink] = useState(true);

  const toggleNavbar = () => setShrink(!shrunk);

  return (
    <>
      <header>
        <Navbar className="navbar navbar-expand-lg navbar-light bg-light" light expand="md">
          <NavbarBrand href="/" className="ml-auto"></NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!shrunk} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className="float" href="/">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/portfolio">Portfolio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          <a className="navbar-brand ml-5 text-primary myName">Ben Acker</a>
        </Navbar>
      </header>
    </>
  );
}

export default HeaderNav;