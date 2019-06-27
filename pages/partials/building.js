import React from 'react';

import { Container, Row, Col } from 'reactstrap';
import { SubHeading, CategoryTag } from '../../components';


const Building = () => {
  return (
    <Container className="text-center mb-5">
      <Row>
        <Col xs="12" sm="12" md="4">
          <a className="text-primary" href="/case-studies/building-products/big-box-retailer">
            <img src="/static/img/case-studies/bigbox.jpg" className="img-fluid" alt="Big Box" />
          </a>
          <CategoryTag category="Bog Box Retailer" />
          <SubHeading className="text-primary">
            <a className="text-primary" href="/case-studies/building-products/big-box-retailer">
              Retail Sales Growth from Actionable Data
            </a>
          </SubHeading>
          <p>
            A big box retailer with unmanaged accounts had limited marketing data to engage and optimize their sales.
          </p>
        </Col>
        <Col xs="12" sm="12" md="4">
          <a className="text-primary" href="/case-studies/building-products/hvac-res">
            <img src="/static/img/case-studies/hvac-res.jpg" className="img-fluid" alt="HVAC Residential" />
          </a>
          <CategoryTag category="HVAC Manufacturer" />
          <SubHeading className="text-primary">
            <a className="text-primary" href="/case-studies/building-products/hvac-res">
              Managing and Growing Underserved Accounts
            </a>
          </SubHeading>
          <p>
            An HVAC manufacturer needed assistance with their field sales coverage due to the impossibility of only having 200 field sales reps responsible for managing 120,000 accounts.
          </p>
        </Col>
        <Col xs="12" sm="12" md="4">
          <a className="text-primary" href="/case-studies/building-products/roofing">
            <img src="/static/img/case-studies/roofing.jpg" className="img-fluid" alt="Roofing" />
          </a>
          <CategoryTag category="Roofing Manufacturer" />
          <SubHeading className="text-primary mt-0">
            <a className="text-primary" href="/case-studies/building-products/roofing">
              Engaging Downstream Contractors
            </a>
          </SubHeading>
          <p>
            A major roofing materials manufacturer came to MMC because they were unable to identify and communicate with the actual end customers that were purchasing their branded products through distribution.
          </p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <a className="text-primary" href="/case-studies/building-products/distributor">
            <img src="/static/img/case-studies/distributor.jpg" className="img-fluid" alt="Distributor" />
          </a>
          <CategoryTag category="Distributor" />
          <SubHeading className="text-primary">
            <a className="text-primary" href="/case-studies/building-products/distributor">
              Co-op funds used effectively
            </a>
          </SubHeading>
          <p style={{ maxWidth: 375 }} className="mx-auto">
            A National building products manufacturer had no way to identify their end users through independent distribution.
          </p>
        </Col>
        <Col>
          <div>
            <a className="text-primary" href="/case-studies/building-products/hvac">
              <img src="/static/img/case-studies/hvac-manufacturer.jpg" height="360" className="img-fluid" alt="HVAC Manufacturer" />
            </a>
            <CategoryTag category="HVAC Manufacturer" />
            <SubHeading className="text-primary">
              <a className="text-primary" href="/case-studies/building-products/hvac">
                Implementing a supplemental channel to allow a better customer experience
              </a>
            </SubHeading>
            <p style={{ maxWidth: 375 }} className="mx-auto">
              A dominant brand and manufacturer with the highest share of market needed to reinvent its sales strategy.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Building;
