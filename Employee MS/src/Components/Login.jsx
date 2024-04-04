import React from 'react'
import './style.css'

const Login = () => {
  return (
    <div className = "d-flex justify-content-center align-items-center vh-100 loginPage">
        <div className = "p-3 rounded w-25 border loginForm">
            <h2>Login Page</h2>
            <form>
                <div className='mb-3'>
                    <label htmlFor = "email"><strong>Email:</strong></label>
                    <input type = "email" name = "email" autoComplete='off' placeholder = "Enter your email" className = "form-control rounded-0"/>
                </div>
                <div className='mb-3'>
                    <label htmlFor = "password"><strong>Password:</strong></label>
                    <input type = "password" name = "password" placeholder = "Enter your password" className = "form-control rounded-0"/>
                </div>
                <button className = "btn btn-success w-100 rounded-0 mb-2">Log in</button>
                <div className='mb-1'>
                    <input type = "checkbox" name="tick" id="tick" className='me-2'/>
                    <label htmlFor = "password">You are agree with terms & conditions</label>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login