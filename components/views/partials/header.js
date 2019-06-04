import React, { useState } from 'react';
import Link from 'next/link';
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
import Keycode from './keycode';

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
          <Link href="/" passHref>
            <NavbarBrand>MMC</NavbarBrand>
          </Link>
          <NavbarToggler onClick={() => setCollapsed(!collapsed)} />
          <Collapse isOpen={collapsed} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="mr-4">
                <Link href="/growth-reinvented" passHref>
                  <NavLink>GROWTH REINVENTED</NavLink>
                </Link>
              </NavItem>
              <NavItem className="mr-4">
                <Link href="/resources" passHref>
                  <NavLink>RESOURCES</NavLink>
                </Link>
              </NavItem>
              <NavItem className="mr-4">
                <Link href="/team" passHref>
                  <NavLink>TEAM</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/contact-us" passHref>
                  <NavLink>CONTACT US</NavLink>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header;
