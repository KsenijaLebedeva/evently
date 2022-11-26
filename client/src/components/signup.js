import React from 'react'
import Button from 'react-bootstrap/Button';

function Register() {
    return (
        <div className='registerForm'>
            <form>
                <h1>Create an account</h1>
                <div className='form-group'>
                    <input
                    type='text'
                    className='form-control'
                    placeholder='Email or phone number'
                    required/>
                </div>
                <div className='form-group'>
                    <input
                    type='text'
                    className='form-control'
                    placeholder='Enter Full Name'
                    required/>
                </div>
                <div className='form-group'>
                    <input
                    type='text'
                    className='form-control'
                    placeholder='Username'
                    required/>
                </div>

                <div className='form-group'>
                    <input
                    type='password'
                    className='form-control'
                    placeholder='Password'
                    required/>
                    <i className="fa fa-eye password-icon" />
                </div>
                <div className='form-group'>
                    <input
                    type='password'
                    className='form-control'
                    placeholder='Repeat Password'
                    required/>
                </div>
                    <p>By creating an account you agree to our <a href="terms_privacy">Terms & Privacy</a>.</p>
            
                    <Button variant="primary" type="submit">Register</Button>
                <div class="container login">
                    <p>Already have an account? <a href="login">Log in</a>.</p>
                </div>
            </form>
        </div>
    )
}
export default Register 