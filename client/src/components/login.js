import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import EventlyLogo from '../../EventlyLogo.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Axios from 'axios'; 

const Login = () =>{

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState("");

    // Initialize a boolean state
    const [passwordShown, setPasswordShown] = useState(false);

    // Password toggle handler
  const togglePassword = () => {

    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

    const login = (event) => {
        event.preventDefault();
        Axios.post('http://localhost:3006/login', {
          username: username,
          email: email,
          password: password,
        })
          .then((response) => {
            if (response.data.message){
                setLoginStatus(response.data.message);
            } else {
                setLoginStatus(response.data[0].username)
            }
          })
          .catch((error) => {
            console.error(error.response.data);
          });
      };

    return(
        <Container>
            <Row>
            <Col md={5} sm={5} xs={12}>
            <img className="evently-logo" src={EventlyLogo} alt="EventlyLogo"/>
            <p>Evently helps you to see, create events and track event updates online.</p>
            </Col>
            <Col md={6} sm={7} xs={12}>
        <Form className="form-box">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control 
                type="text" 
                placeholder="Username or e-mail" 
                required
                onChange={(e)=>{
                    setUsername(e.target.value);
                    setEmail(e.target.value);
                }}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control 
            type={passwordShown ? "text" : "password"} 
            placeholder="Password" 
            required 
            onChange={(e)=>{
                setPassword(e.target.value);
            }}
            />
            <Button type="button" className="btn btn-light" onClick={togglePassword}>Show Password</Button>
            </Form.Group>
            <Button className="loginbtn" variant="primary" type="submit" onClick={login}>Log in</Button>
            <h1>{loginStatus}</h1>  
            <div className='forgotPassword-container'>
            <a className='bluelink' href='forgotPassword'>Forgot password?</a>
            </div>
            <hr></hr>
            <Button href='signup' className="loginbtn" variant="success" type="submit">Create new account</Button>
        </Form>
        </Col>
        </Row>
    </Container>
);
}


export default Login;
