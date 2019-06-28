/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { faPhone, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';


const CallToAction = (props) => {
  const { headline, body } = props;
  return (
    <Container className="bg-success text-secondary" fluid>
      <Container>
        <Row style={{ minHeight: 250 }}>
          <Col className="text-center pt-5 pb-5" md="7">
            <h4 className="font-weight-bold">{headline}</h4>
            <p className="font-weight-normal">
              {body}
            </p>
            <Link href="/contact-us">
              <a>
                <Button className="text-uppercase" style={{ width: 230 }} color="secondary">
                  Contact us
                </Button>
              </a>
            </Link>
          </Col>
          <Col
            className="text-center"
            md="5"
            style={{
              minHeight: 200,
              backgroundImage: 'url(/static/img/abstract/dark-circle.svg)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: '100% auto'
            }}
          >
            <table style={{ height: '100%', width: '100%' }}>
              <tbody>
                <tr>
                  <td className="align-middle text-center">
                    <h3 className="text-warning">
                      <FontAwesomeIcon size="sm" width="0" icon={faPhone} />
                    </h3>
                    <h2 className="eyebrow font-weight-normal" style={{ fontSize: '2.7rem' }}>
                      <a href="tel:18007337479">+1 800.733.7479</a>
                    </h2>
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default CallToAction;
