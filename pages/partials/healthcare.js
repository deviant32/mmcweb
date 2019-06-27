/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'next/link';

import { CategoryTag, SubHeading } from '../../components';


const Healthcare = () => {
  return (
    <Container className="text-center mb-5">
      <Row>
        <Col xs="12" sm="4">
          <a href="/case-studies/healthcare/wound">
            <img src="/static/img/case-studies/woundcare.jpg" className="img-fluid" alt="Wound Care" />
          </a>
          <CategoryTag category="Wound Care" />
          <SubHeading className="text-primary">
            <a className="text-primary" href="/case-studies/healthcare/wound">
              Customer Satisfaction
              <br />
              at a Lower Cost
            </a>
          </SubHeading>
          <p>
            Our advanced wound care client needed to provide in-servicing to its customers, but deploying a clinical team for on-site training was not cost-effective.
          </p>
        </Col>
        <Col xs="12" sm="4">
          <a href="/case-studies/healthcare/pharmaceutical">
            <img src="/static/img/case-studies/pharm.jpg" className="img-fluid" alt="Pharmaceutical" />
          </a>
          <CategoryTag category="Pharmaceutical" />
          <SubHeading className="text-primary">
            <a className="text-primary" href="/case-studies/healthcare/pharmaceutical">
              Reaching Uncovered
              <br />
              Prescribers
            </a>
          </SubHeading>
          <p>
            A major pharmaceutical company was looking to increase TRx of its dermatological brand.
          </p>
        </Col>
        <Col xs="12" sm="4">
          <a href="/case-studies/healthcare/diagnostics">
            <img src="/static/img/case-studies/diagnostic.jpg" className="img-fluid" alt="Diagnostics" />
          </a>
          <CategoryTag category="Diagnostics" />
          <SubHeading className="text-primary mt-0">
            <a className="text-primary" href="/case-studies/healthcare/diagnostics">
              The Power of Multichannel Marketing
            </a>
          </SubHeading>
          <p>
            A major diagnostic company wanted to increase sales of its allergy test to primary care providers and pediatricians.
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default Healthcare;
