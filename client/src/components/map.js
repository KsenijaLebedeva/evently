import React from 'react';
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Map(){
  return(
    <Container>
      <h1>Find events and establishments</h1>
      <div className="map-filters">
      <Row>
        <Col>
        Country
        </Col>
        <Col>
        City
        </Col>
      </Row>
      <Button variant="primary">Search</Button>{' '}
      </div>



    </Container>


  )


}

export default Map;
