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
            MMC has been the perfect partner providing the support we need to supplement our local territory sales managers
            in the care of our customer base. From strategic targeting to campaign execution and relationship building;
            MMC has the professional services we need to grow and succeed.
          </h4>
          <SubHeading className="mt-4">&mdash; President of HVACR Distributor</SubHeading>
        </div>
      </Container>
    </Container>
  );
};

export default Quote;
