import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink }
from 'reactstrap';

const Sitebar = () => {
    const [toggle, setToggle ] = useState(false);


    const navToggle = () => {
        toggle ? setToggle(false) : setToggle(true);
    }

    return (
        <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Someone</NavbarBrand>
        <NavbarToggler onClick={navToggle} />
        <Collapse isOpen={toggle} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Projects</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
};

export default Sitebar;