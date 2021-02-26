import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";

import {
  Container,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Collapse,
} from "reactstrap";

import "./navbar.styles.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="navigation">
      <Navbar dark expand="sm" className="mb-5">
        <Container>
          <NavLink className="special-font" href="/">
            User Management System
          </NavLink>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className="special-font" to="/categories">
                  Categories{" "}
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default withRouter(NavBar);
