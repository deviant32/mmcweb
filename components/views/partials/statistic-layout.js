import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import SubHeading from './sub-heading';
import Eyebrow from './eyebrow';

const StatisticLayout = (props) => {
  const { heading, stat1, stat2, description1, description2, summary, className } = props;
  return (
    <React.Fragment>
      <Container className={`text-center ${className}`}>
        <SubHeading>{heading}</SubHeading>
        <Row style={{ maxWidth: 950 }} className="mx-auto">
          <Col xs="12" md={{ size: '3', offset: 1 }}>
            <Eyebrow className="h1">{stat1}</Eyebrow>
            <SubHeading>{description1}</SubHeading>
          </Col>
          <Col xs="12" md={{ size: '2', offset: 1 }}>
            arrow
          </Col>
          <Col xs="12" md={{ size: '3', offset: 1 }}>
            <Eyebrow className="h1">{stat2}</Eyebrow>
            <SubHeading>{description2}</SubHeading>
          </Col>
        </Row>
        <p className="text-secondary mt-5">{summary}</p>
      </Container>
    </React.Fragment>
  );
}

export default StatisticLayout;
