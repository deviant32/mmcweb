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
  Container
} from 'reactstrap';

function Header() {

  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <Navbar className="navbar navbar-dark pt-3 pb-3 mt-0 bg-primary text-white" expand="md">
        <Container className="mt-0">
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
