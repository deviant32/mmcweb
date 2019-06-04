import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { faPhone, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const CallToAction = () => {
  return (
    <Container className="pl-sm-0 pr-sm-0 bg-success text-white" fluid>
      <Container>
        <Row>
          <Col className="text-center pt-5 pb-5" md="7">
            <h3 className="font-weight-bold">Call To Action</h3>
            <p>
              We know any model is only as good as it&apos;s results, and we&apos;re eager to show you ours.
              Across industries our platform accelerates growth at an average of 20% year-over-year.
            </p>
            <Button outline color="white">REQUEST A DEMO</Button>
          </Col>
          <Col className="text-white bg-secondary text-center" md="5">
            <table style={{ minHeight: 200, height: '100%', width: '100%' }}>
              <tbody>
                <tr>
                  <td className="align-middle text-center">
                    <h3 className="text-warning"><FontAwesomeIcon size="sm" width="0" icon={faPhone} /></h3>
                    <h3 className="eyebrow" style={{ fontWeight: 'normal' }}>+1 607.754.7473</h3>
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
