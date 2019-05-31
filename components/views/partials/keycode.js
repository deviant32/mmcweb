import React, { useState } from 'react';
import {
  Container, Form, FormGroup, Input, Button, Row, Col
} from 'reactstrap';
import axios from 'axios';


function Keycode() {

  const [keycode, setKeycode] = useState('');

  const submitKeycode = () => {
    axios.get('http://localhost:8080/auth?keycode=' + keycode)
      .then((res) => {
        const data = res.data;
      })
  }


  return (
    <Container fluid className="bg-white p-4 text-center">
      <Row>
        <Col>
          <Form className="justify-content-center" inline>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Input onChange={(e) => setKeycode(e.target.value)} placeholder="Enter your keycode" />
            </FormGroup>
            <Button onClick={() => submitKeycode()} color="success">Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )

}

export default Keycode;
