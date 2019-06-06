/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

const Footer = () => {
  return (
    <footer className="page-footer font-small bg-dark pt-4 text-white text-uppercase">
      <Container className="text-center text-md-left pt-5 pb-5 pl-3 pr-3">
        <Row className="pl-md-5">
          <Col md="4" className="mt-md-0 mt-3">
            <img src="/static/img/logos/logo.svg" style={{ width: 150 }} className="mb-1" alt="Modern Marketing & Commerce" />
            <p>
              MODERN MARKETING
              <br />
              & COMMERCE
            </p>
          </Col>
          <hr className="clearfix w-100 d-md-none pb-3" />
          <Col md="3" className="mb-md-0 mb-3">
            <p className="mb-4">
              29 Industrial park dr.
              <br />
              Binghamton, NY 13904
            </p>
            <p>
              <a href="tel:16077547473"> +1 607.754.7475</a>
              <br />
              <a href="mailto:info@mmcweb.com">Info@mmcweb.com</a>
            </p>
          </Col>
          <Col md="3" className="mb-md-0 mb-3">
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#!">Case Studies</a>
              </li>
              <li className="mb-2">
                <a href="#!">Careers</a>
              </li>
              <li className="mb-2">
                <Link href="/contact-us">
                  <a>Contact Us</a>
                </Link>
              </li>
            </ul>
          </Col>
          <Col md="2" className="mb-md-0 mb-3 text-white">
            <FontAwesomeIcon width="0" style={{ marginRight: 10 }} size="lg" icon={['fab', 'facebook-f']} />
            <FontAwesomeIcon width="0" style={{ marginRight: 10 }} size="lg" icon={['fab', 'twitter']} />
            <FontAwesomeIcon width="0" style={{ marginRight: 10 }} size="lg" icon={['fab', 'linkedin-in']} />
          </Col>
        </Row>
      </Container>
      <div className="footer-copyright text-left py-3 pl-5 sub-heading" style={{ backgroundColor: '#000000' }}>
        &copy; 2019 Copyright:
        <a href="https://mdbootstrap.com/education/bootstrap/"> Modern Marketing & Commerce</a>
      </div>
    </footer>
  )
}

export default Footer;
