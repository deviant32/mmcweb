import React from 'react';
import { Container } from 'reactstrap';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { SubHeading } from '../../components';

const Quote = () => {
  return (
    <Container className="bg-building" style={{ height: 500 }} fluid>
      <Container className="h-100 d-table text-center text-white">
        <div className="d-table-cell align-middle">
          <FontAwesomeIcon className="mb-4 text-primary" size="3x" width="0" icon={faQuoteLeft} />
          <h4 className="font-weight-bold" style={{ lineHeight: '200% !important' }}>
            Laboris nisi ut aliquip ex ea commodo
            <br />
            consequat duis auto irure
          </h4>
          <SubHeading>&mdash; Happy Customer</SubHeading>
        </div>
      </Container>
    </Container>
  );
};

export default Quote;
