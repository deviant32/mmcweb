/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Link from 'next/link';
import {
  Navbar,
  NavbarToggler,
  Collapse,
  NavLink,
  Nav,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container
} from 'reactstrap';

function Header() {

  const [collapsed, setCollapsed] = useState(false);
  const [growthDropdownVisible, setGrowthDropdownVisible] = useState(false);

  return (
    <Navbar id="menu" className="navbar p-3 navbar-dark mt-0 bg-primary text-white sticky-top" expand="md">
      <Container className="mt-0">
        <Link href="/">
          <a>
            <img className="navbar-brand" src="/static/img/logos/logo.svg" alt="Modern Marketing & Commerce" />
          </a>
        </Link>

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
              <DropdownToggle tag='span' nav caret className="text-uppercase">
                <Link href="/growth-reinvented">
                  <a>Growth Reinvented</a>
                </Link>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag='span'>
                  <Link href="/industries">
                    <a>Our Industries</a>
                  </Link>
                </DropdownItem>
                <DropdownItem tag='span'>
                  <Link href="/capabilities">
                    <a>Our Capabilities</a>
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Link href="/case-studies">
              <NavLink className="mr-4 h-100 my-auto text-uppercase">
                Case Studies
              </NavLink>
            </Link>
            <Link href="/team">
              <NavLink className="mr-4 h-100 my-auto text-uppercase">
                Team
              </NavLink>
            </Link>
            <Link href="/contact-us">
              <NavLink className="mr-0 h-100 my-auto text-uppercase">
                Contact Us
              </NavLink>
            </Link>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;
