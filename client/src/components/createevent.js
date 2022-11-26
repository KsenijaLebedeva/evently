import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Private event</Popover.Header>
    <Popover.Body>
      Event are <strong>hidden</strong>. Other users can <strong>see information</strong> about the event <strong>if they are invited</strong>.
    </Popover.Body>
  </Popover>
);

function CreateEvent(){
  return (
        <Container>  
          <h1 className="h1">Create your Event</h1>
          <Form>
            <Form.Group className="mb-3 mt-30" controlId="exampleForm.ControlInput1">
              <Form.Control
              type="text"
              placeholder="Event name*"
              />
            </Form.Group>
            <FloatingLabel controlId="floatingTextarea2" label="Description">
              <Form.Control
                as="textarea"
                style={{ height: '300px' }}
              />
            </FloatingLabel> 
            <Form.Group controlId="formFile" className="mb-3 mt-30">
              <Form.Label>Upload event picture</Form.Label>
              <Form.Control type="file" size="md" />
              <Form.Group className="mt-30">
                <Form.Label>Enter event price</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text>EUR</InputGroup.Text>
                  <Form.Control aria-label="Amount" />
                </InputGroup>
              </Form.Group>
            </Form.Group>
            <OverlayTrigger trigger="hover" placement="right" overlay={popover}>
              <Button variant="success">?</Button>
            </OverlayTrigger>
            <Form.Check 
              type="switch"
              id="custom-switch"
              label="Private"
            />
            <Button className="mt-30" type="submit">Create</Button>
          </Form>
        </Container>
  );
}

export default CreateEvent;
