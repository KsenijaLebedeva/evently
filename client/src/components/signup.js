import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Axios from 'axios'; 
import Container from 'react-bootstrap/Container';

function Signup() {
    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');
    const [emailReg, setEmailReg] = useState('');
    const [phone_numberReg, setPhone_numberReg] = useState('');
    const [nameReg, setNameReg] = useState('');
    const [date_of_birthReg, setDate_of_birthReg] = useState('');
  
    const register = (event) => {
      event.preventDefault();
      Axios.post('http://localhost:3006/signup', {
        username: usernameReg,
        password: passwordReg,
        email: emailReg,
        phone_number: phone_numberReg,
        name: nameReg,
        date_of_birth: date_of_birthReg,
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    };
  

    return (
        <Container>
            <form>
                <h1 className='regTop'>Register</h1>
                <p className='regTop'>Please fill in this form to create an account.</p>
                <hr></hr>
                <div className='form-group'>

                    <input
                    type='text'
                    className='form-control'
                    placeholder='Email'
                    required
                    onChange={(e)=>{
                        setEmailReg(e.target.value);
                    }}
                    />

                     <input
                    type='text'
                    className='form-control'
                    placeholder='Phone number'
                    required
                    onChange={(e)=>{
                        setPhone_numberReg(e.target.value);
                    }}/>

                    <input
                    type='text'
                    className='form-control'
                    placeholder='Name'
                    required
                    onChange={(e)=>{
                        setNameReg(e.target.value);
                    }}
                    />
                    
                    <input
                    type='date'
                    className='form-control'
                    placeholder='Birthday'
                    required
                    onChange={(e)=>{
                        setDate_of_birthReg(e.target.value);
                    }}
                    />

                    <input
                    type='text'
                    className='form-control'
                    placeholder='Username'
                    required
                    onChange={(e)=>{
                        setUsernameReg(e.target.value);
                    }}
                    />

                    <input
                    type='password'
                    className='form-control'
                    placeholder='Password'
                    required
                    onChange={(e)=>{
                        setPasswordReg(e.target.value);
                    }}
                    />


                </div>
                <hr></hr>
                <p className='regTop'>By creating an account you agree to our <a href="termsPolicy">Terms & Privacy</a>.</p>
                <Button variant="primary" type="submit" className='registerbtn' onClick={register}>Register</Button>
                <p className="alreadyRegistered">
                    Already registered? <a className='bluelink' href="/login">Log in</a>.
                </p>
            </form>

        </Container>

    );

}

export default Signup
