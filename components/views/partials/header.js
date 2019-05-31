/**
*
* Header
*
*/

import React, { useState } from 'react';
import {
  Navbar,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Nav,
  NavbarBrand,
  Jumbotron,
  Container
} from 'reactstrap';
import DynamicContent from '../../dec/dynamic-content';

function Header() {

  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <Jumbotron className="p-0" style={{ marginBottom: 0 }}>
        <Container className="pt-1 pb-1" style={{ marginBottom: 0 }}>
          <p className="text-right mb-0">CALL US AT +1 607.754.7473</p>
        </Container>
      </Jumbotron>
      <Navbar className="navbar navbar-dark bg-primary text-white" expand="md" style={{ marginTop: 0 }}>
        <Container style={{ marginTop: 0 }}>
          <NavbarBrand href="/">MMC</NavbarBrand>
          <NavbarToggler onClick={() => setCollapsed(!collapsed)} />
          <Collapse isOpen={collapsed} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="mr-4">
                <NavLink href="/growth-reinvented">GROWTH REINVENTED</NavLink>
              </NavItem>
              <NavItem className="mr-4">
                <NavLink href="/resources">RESOURCES</NavLink>
              </NavItem>
              <NavItem className="mr-4">
                <NavLink href="/team">TEAM</NavLink>
              </NavItem>
              <DynamicContent package_codes={['joe123']}>
                <NavItem>
                  <NavLink href="/contact-us">CONTACT US</NavLink>
                </NavItem>
              </DynamicContent>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  )

}

export default Header;
