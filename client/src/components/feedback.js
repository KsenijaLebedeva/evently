import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useState } from 'react';


function Feedback() {
  const [comment, setComment] = useState("");
  const displayInfo = () => {
    console.log(comment);
  };
    return (
        <Container>
            <h1>Please rate establishment</h1>
          <Form>
            <div key={'inline-radio'} className="mb-3 mt-30">
              <Form.Check
                inline
                label="1"
                name="group1"
                type="radio"
                id={"inline-radio-1"}
              />
              <Form.Check
                inline
                label="2"
                name="group1"
                type="radio"
                id={"inline-radio-2"}
              />
              <Form.Check
                inline
                label="3"
                name="group1"
                type="radio"
                id={"inline-radio-3"}
              />
              <Form.Check
                inline
                label="4"
                name="group1"
                type="radio"
                id={"inline-radio-4"}
              />
              <Form.Check
                inline
                label="5"
                name="group1"
                type="radio"
                id={"inline-radio-5"}
              />
            </div>
            <FloatingLabel
              controlId="floatingTextarea2"
              label="Comment"
              onChange={(event) => {
                setComment(event.target.value);
              }}
            >
            <Form.Control
              as="textarea"
              style={{ height: '100px' }}
            />
              </FloatingLabel>
              <Button type="submit" onClick={displayInfo}>Submit</Button>
          </Form>
        </Container>
    );
}
  
export default Feedback;