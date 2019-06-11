import React, { useState } from 'react';
import Link from 'next/link';
import {
  Navbar,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Nav,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarBrand,
  Container
} from 'reactstrap';


function Header() {

  const [collapsed, setCollapsed] = useState(false);
  const [growthDropdownVisible, setGrowthDropdownVisible] = useState(false);

  return (
    <div>
      <Navbar className="navbar p-3 navbar-dark mt-0 bg-primary text-white" expand="md">
        <Container className="mt-0">
          <Link href="/" passHref>
            <NavbarBrand>
              <img src="/static/img/logos/logo.svg" alt="Modern Marketing & Commerce" />
            </NavbarBrand>
          </Link>
          <NavbarToggler onClick={() => setCollapsed(!collapsed)} />
          <Collapse isOpen={collapsed} navbar>
            <Nav className="ml-auto" navbar>
              <Dropdown className="d-inline-block"
                onMouseOver={() => setGrowthDropdownVisible(true)}
                onMouseLeave={() => setGrowthDropdownVisible(!growthDropdownVisible)}
                isOpen={growthDropdownVisible} className="mr-4 mt-n1 h-100 my-auto" nav inNavbar>
                <DropdownToggle nav caret>
                  <Link href="/growth-reinvented" prefetch passHref>
                    <a>GROWTH REINVENTED</a>
                  </Link>
                </DropdownToggle>
                <DropdownMenu right>
                  <Link href="/industries" prefetch passHref>
                    <DropdownItem>
                      Industries & Expertise
                    </DropdownItem>
                  </Link>
                  <Link href="/core-technology" prefetch passHref>
                    <DropdownItem>
                      Core Technology
                    </DropdownItem>
                  </Link>
                </DropdownMenu>
              </Dropdown>
              <NavItem className="mr-4 h-100 my-auto">
                <Link href="/resources" prefetch passHref>
                  <NavLink>RESOURCES</NavLink>
                </Link>
              </NavItem>
              <NavItem className="mr-4 h-100 my-auto">
                <Link href="/team" prefetch passHref>
                  <NavLink>TEAM</NavLink>
                </Link>
              </NavItem>
              <NavItem className="mr-4 h-100 my-auto">
                <Link href="/contact-us" prefetch passHref>
                  <NavLink>CONTACT US</NavLink>
                </Link>
              </NavItem>
              {/* <NavItem
                style={{
                  fontSize: '.5rem !important',
                  backgroundImage: 'url(/static/img/abstract/dark-circle.svg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: '100% auto'
                }}
              >

                <table>
                  <tbody>
                    <tr>
                      <td className="align-middle text-center">
                        <h6 className="text-warning" style={{ paddingTop: 5 }}><FontAwesomeIcon size="sm" width="0" icon={faPhone} /></h6>
                        <h6 className="eyebrow font-weight-normal pr-4 pl-4" style={{ color: '#d8d8d8' }}>+1 607.754.7473</h6>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </NavItem> */}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header;
