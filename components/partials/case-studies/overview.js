import React from 'react';

import { Container, Row, Col } from 'reactstrap';
import { SubHeading, CategoryTag } from '../..';


const CaseStudyOverview = ({ data }) => {
  return (
    <Container className="text-center mb-5">
      <Row>
        {data.slice(0, 3).map((val) => {
          return (
            <Col className="mt-5 mt-md-0" key={val._id} xs="12" sm="12" md="4">
              <a className="text-primary" href={`/case-studies/${val.slug}`}>
                <img src={`${val.main_image}?w=350`} className="img-fluid" alt={val.title} />
              </a>
              <CategoryTag category={val.category} />
              <SubHeading className="text-primary">
                <a className="text-primary" href={`/case-studies/${val.slug}`}>
                  {val.title}
                </a>
              </SubHeading>
              <p>
                {val.summary}
              </p>
            </Col>
          )
        })}
      </Row>
      <Row className="mt-5">
        {data.slice(3, 5).map((val) => {
          return (
            <Col className="mt-5 mt-md-0" xs="12" sm="12" md="6" key={val._id}>
              <a className="text-primary" href={`/case-studies/${val.slug}`}>
                <img src={`${val.main_image}?w=540`} className="img-fluid" alt={val.title} />
              </a>
              <CategoryTag category="Distributor" />
              <SubHeading className="text-primary">
                <a className="text-primary" href={`/case-studies/${val.slug}`}>
                  {val.title}
                </a>
              </SubHeading>
              <p style={{ maxWidth: 375 }} className="mx-auto">
                {val.summary}
              </p>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default CaseStudyOverview;
