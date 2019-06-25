import React from 'react';

import {
  Container, Row, Col
} from 'reactstrap';
import CategoryTag from './category-tag';
import SubHeading from './sub-heading';


const Healthcare = () => {
  return (
    <Container className="text-center mb-5">
      <Row>
        <Col>
          <img src="https://dummyimage.com/350x200/000/fff" alt="Company" />
          <CategoryTag category="category tag" />
          <SubHeading className="text-primary">Excepteur occaecat cupidatat</SubHeading>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </Col>
        <Col>
          <img src="https://dummyimage.com/350x200/000/fff" alt="Company" />
          <CategoryTag category="category tag" />
          <SubHeading className="text-primary">Excepteur occaecat cupidatat</SubHeading>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </Col>
        <Col>
          <img src="https://dummyimage.com/350x200/000/fff" alt="Company" />
          <CategoryTag category="category tag" />
          <SubHeading className="text-primary mt-0">Excepteur occaecat cupidatat</SubHeading>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <img src="https://dummyimage.com/500x350/000/fff" alt="Company" />
          <CategoryTag category="category tag" />
          <SubHeading className="text-primary">Excepteur occaecat cupidatat</SubHeading>
          <p style={{ maxWidth: 375 }} className="mx-auto">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </Col>
        <Col>
          <div>
            <img src="https://dummyimage.com/500x350/000/fff" alt="Company" />
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

export default Healthcare;
