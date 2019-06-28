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
              <a href="tel:18007337479"> +1 800.733.7479</a>
              <br />
              <a href="mailto:info@mmcweb.com">Info@mmcweb.com</a>
            </p>
          </Col>
          <Col md="3" className="mb-md-0 mb-3">
            <ul className="list-unstyled mx-auto" style={{ maxWidth: 150 }}>
              <li className="mb-2">
                <Link href="/case-studies">
                  <a>Case Studies</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="https://recruiting.ultipro.com/MOD1007MDRN/JobBoard/878dbef4-95e7-a042-ddfc-997e388fe644/?q=&o=postedDateDesc&w=&wc=&we=&wpst=">
                  <a rel="noopener" target="_blank">Careers</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact-us">
                  <a>Contact Us</a>
                </Link>
              </li>
              <li className="mt-2 pt-2" style={{ borderTop: '1px solid rgba(255, 255, 255, .2)' }}>
                <Link href="https://ew41.ultipro.com/Login.aspx">
                  <a rel="noopener" target="_blank">Access Ultipro</a>
                </Link>
              </li>
            </ul>
          </Col>
          <Col md="2" className="mb-md-0 mb-3 text-white">
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/ModernMarketingConcepts/?rf=159596157429485">
              <FontAwesomeIcon width="0" style={{ marginRight: 10 }} size="lg" icon={['fab', 'facebook-f']} />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/mmclive?lang=en">
              <FontAwesomeIcon width="0" style={{ marginRight: 10 }} size="lg" icon={['fab', 'twitter']} />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/modern-marketing-concepts">
              <FontAwesomeIcon href="https://www.linkedin.com/company/modern-marketing-concepts" width="0" style={{ marginRight: 10 }} size="lg" icon={['fab', 'linkedin-in']} />
            </a>
          </Col>
        </Row>
      </Container>
      <div className="footer-copyright text-left py-3 pl-5 sub-heading" style={{ backgroundColor: '#000000' }}>
        &copy;
        {(new Date().getFullYear())}
        &nbsp;Modern Marketing & Commerce, Inc.
      </div>
    </footer>
  )
}

export default Footer;
