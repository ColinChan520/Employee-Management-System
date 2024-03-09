import React from 'react'

const Login = () => {
  return (
    <div className = "d-flex justify-content-center align-items-center vh-100 loginPage">
        <div className = "p-3 rounded w-25 border loginForm">
            <h2>Login Page</h2>
            <form>
                <div>
                    <label htmlFor = "email"><strong>Email:</strong></label>
                    <input type = "email" name = "email" autoComplete='off' placeholder = "Enter your email" className = "form-control rounded-0"/>
                </div>
                <div>
                    <label htmlFor = "password"><strong>Password:</strong></label>
                    <input type = "password" name = "password" placeholder = "Enter your password" className = "form-control rounded-0"/>
                </div>
                <button className = "btn btn-success w-100 rounded-0">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Login