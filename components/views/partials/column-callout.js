import React from 'react';
import { Row, Col } from 'reactstrap';

const ColumnCallout = (props) => {
  const { title, description, className } = props;
  return (
    <div className={`text-center callout ${className}`} style={{ minHeight: 330, paddingRight: 30 }}>
      <Row>
        <Col style={{ minHeight: 220 }}>
          <div className="h-100 d-flex justify-content-center flex-column">
            <h2
              style={{ lineHeight: '100%' }}
              className="eyebrow font-weight-normal text-uppercase text-nowrap align-middle"
            >
              {title}
            </h2>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <small>{description}</small>
        </Col>
        {/* <div className={className} style={{ minHeight: 355 }}>
        <div
          className='mx-auto text-center d-flex'
          style={{ minHeight: 250 }}
        >
          <div className="justify-content-center align-self-center mx-auto">
            <h2
              style={{ fontSize: '3rem', lineHeight: '100%' }}
              className="eyebrow font-weight-normal text-uppercase text-nowrap mx-auto"
            >
              {title}
            </h2>
          </div>
        </div>
        <div className="text-center">
          <small>
            {description}
          </small>
        </div>
      </div> */}
      </Row>
    </div>



  )
}

export default ColumnCallout;
