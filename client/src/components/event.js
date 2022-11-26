import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Event() {
    return (
        <Container>
                <h1>Event name</h1>
                <Row>
                        <Col lg="6" md="12">
                                <Col>Creator</Col>
                                <Col>Username</Col>
                        </Col>
                        <Col lg="6" md="12">
                                <Col>Date and time:</Col>
                                <Col>Date and time</Col>
                        </Col>
                </Row>
        </Container>
  );
}

export default Event;