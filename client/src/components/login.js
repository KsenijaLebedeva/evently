import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Login = () =>{
    return(
        <div className="container">
    <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Enter email or phone number" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" required/>
        </Form.Group>
        <Button variant="primary" type="submit">Log in</Button>
        <div class="container login">
          <p>Don't have an account? <a href="signup">Sign up</a>.</p>
        </div>
    </Form>
</div>
)
}


export default Login;