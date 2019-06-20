/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Link from 'next/link';
import {
  Navbar,
  NavbarToggler,
  Collapse,
  NavItem,
  Nav,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarBrand,
  Container
} from 'reactstrap';

function Header(props) {

  const [collapsed, setCollapsed] = useState(false);
  const [growthDropdownVisible, setGrowthDropdownVisible] = useState(false);

  const headerStyle = {
    position: 'fixed',
    width: '100%',
    zIndex: '100',
    top: '0',
    minHeight: 75
  };

  const { className } = props;

  return (
    <div>
      <Navbar style={headerStyle} id="menu" className={`navbar p-3 navbar-dark mt-0 bg-primary text-white ${className}`} expand="md">
        <Container className="mt-0">
          <NavbarBrand style={{ cursor: 'pointer' }}>
            <Link href="/">
              <img src="/static/img/logos/logo.svg" alt="Modern Marketing & Commerce" />
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={() => setCollapsed(!collapsed)} />
          <Collapse isOpen={collapsed} navbar>
            <Nav className="ml-auto" navbar>
              <Dropdown
                className="d-inline-block mr-4 mt-n1 h-100 my-auto"
                onMouseOver={() => setGrowthDropdownVisible(true)}
                onFocus={() => setGrowthDropdownVisible(true)}
                onMouseLeave={() => setGrowthDropdownVisible(!growthDropdownVisible)}
                isOpen={growthDropdownVisible}
                nav
                inNavbar
              >
                <DropdownToggle tag='span' nav caret>
                  <Link href="/growth-reinvented">
                    <a>GROWTH REINVENTED</a>
                  </Link>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag='span'>
                    <Link href="/industries">
                      <a>Industries & Expertise</a>
                    </Link>
                  </DropdownItem>
                  <DropdownItem tag='span'>
                    <Link href="/capabilities">
                      <a>Our Capabilities</a>
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <NavItem className="mr-4 h-100 my-auto">
                <Link href="/resources">
                  <a>RESOURCES</a>
                </Link>
              </NavItem>
              <NavItem className="mr-4 h-100 my-auto">
                <Link href="/team">
                  <a>TEAM</a>
                </Link>
              </NavItem>
              <NavItem className="mr-0 h-100 my-auto">
                <Link href="/contact-us">
                  <a>CONTACT US</a>
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
