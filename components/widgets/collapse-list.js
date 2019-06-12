import React, { useState } from 'react';
import { Row, Col, Collapse, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CollapseList = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { children, title } = props;
  return (

    <ListGroupItem className="text-left p-0" style={{ border: 'none', cursor: 'pointer' }}>
      <ListGroupItemHeading
        className="bg-info font-weight-bold text-uppercase"
        style={{ padding: '.6em' }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Row>
          <Col>
            <h6 className="sub-heading p-0 m-0 font-weight-bold">{title}</h6>
          </Col>
          <Col className="text-right">
            {isOpen ?
              <FontAwesomeIcon className="text-primary" size="xs" width="0" icon={faMinus} />
              :
              <FontAwesomeIcon className="text-primary" size="xs" width="0" icon={faPlus} />
            }
          </Col>
        </Row>

      </ListGroupItemHeading>
      <Collapse isOpen={isOpen}>
        <ListGroupItemText className="p-3">
          {children}
        </ListGroupItemText>
      </Collapse>
    </ListGroupItem>
  )
}

export default CollapseList;
