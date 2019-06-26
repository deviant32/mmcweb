import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Title from './title';

const StatisticLayout = (props) => {
  const { heading, color, stats, summary, summaryColor, className } = props;

  return (
    <React.Fragment>
      <Container className={`h-100 text-${color} text-center ${className}`}>
        <Row className="h-100">
          <Col className="my-auto">
            <Row>
              <Col>
                <Title className="h4">{heading}</Title>
              </Col>
            </Row>
            <Row className="mx-auto" style={{ maxWidth: 700 }}>
              {stats.map((stat, index) => {
                return (
                  <Col
                    xs="6"
                    className={`pb-5 m-0 ${index === 0 ? `res-border-right border-${color}` : ''}  `}
                  >
                    <div className="d-inline-block">
                      <img
                        className="d-none d-sm-inline-block"
                        style={{ width: 65, marginRight: 15 }}
                        src={`/static/img/abstract/${stat.image}.svg`}
                        alt={`${stat.number} percent`}
                      />
                    </div>
                    <div className="d-inline-block" style={{ height: 200 }}>
                      <span className="align-middle eyebrow font-weight-bold" style={{ fontSize: '10rem' }}>
                        {stat.number}
                      </span>
                    </div>
                    <div className="d-inline-block">
                      <span className="align-middle eyebrow font-weight-bold text-left" style={{ fontSize: '3rem' }}>
                        %
                      </span>
                    </div>
                    <div className="text-uppercase font-weight-bold">
                      {stat.description}
                    </div>
                  </Col>
                )
              })}
            </Row>
            <div className={`mt-5 text-${summaryColor} font-weight-bold`}>
              {summary}
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default StatisticLayout;
