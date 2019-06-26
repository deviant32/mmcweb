import React from 'react';

import { Container, Row, Col } from 'reactstrap';
import { SubHeading, CategoryTag } from '../../components';


const Building = () => {
  return (
    <Container className="text-center mb-5">
      <Row>
        <Col xs="12" sm="12" md="4">
          <img src="https://dummyimage.com/350x200/000/fff" className="img-fluid" alt="Company" />
          <CategoryTag category="category tag" />
          <SubHeading className="text-primary">Excepteur occaecat cupidatat</SubHeading>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </Col>
        <Col xs="12" sm="12" md="4">
          <img src="https://dummyimage.com/350x200/000/fff" className="img-fluid" alt="Company" />
          <CategoryTag category="category tag" />
          <SubHeading className="text-primary">Excepteur occaecat cupidatat</SubHeading>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </Col>
        <Col xs="12" sm="12" md="4">
          <img src="https://dummyimage.com/350x200/000/fff" className="img-fluid" alt="Company" />
          <CategoryTag category="category tag" />
          <SubHeading className="text-primary mt-0">Excepteur occaecat cupidatat</SubHeading>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <img src="https://dummyimage.com/540x350/000/fff" className="img-fluid" alt="Company" />
          <CategoryTag category="category tag" />
          <SubHeading className="text-primary">Excepteur occaecat cupidatat</SubHeading>
          <p style={{ maxWidth: 375 }} className="mx-auto">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </Col>
        <Col>
          <div>
            <img src="https://dummyimage.com/540x350/000/fff" className="img-fluid" alt="Company" />
            <CategoryTag category="category tag" />
            <SubHeading className="text-primary">Excepteur occaecat cupidatat</SubHeading>
            <p style={{ maxWidth: 375 }} className="mx-auto">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Building;
