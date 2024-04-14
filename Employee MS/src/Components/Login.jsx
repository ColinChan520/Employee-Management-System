import React, {useState} from 'react'
import './style.css'
import axio from 'axios'
import TextField from '@mui/material/TextField';

const Login = () => {

        // Define two state variables, email and password, with initial values as empty strings.
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // Define a function handleSunmit that will be called when the form is submitted.
    const handleSunmit = (event) => {
        event.preventDefault()
        console.log(email)
        console.log(password)
        axio.post('http://localhost:3000/auth/adminlogin',
        {
            email: email,
            password: password,
          }).then(result => console.log(result)).catch(err => console.log(err))
    }

  return (
    <div className = "d-flex justify-content-center align-items-center vh-100 loginPage">
        <div className = "p-3 rounded w-25 border loginForm">
            <h2>Login Page</h2>
            <form onSubmit={handleSunmit}>
                <div className='mb-3'>
                <TextField
                    label="Email" 
                    variant="outlined" 
                    value={email} 
                    onChange={(event) => setEmail(event.target.value)} 
                    />
                </div>
                
                <div className='mb-3'>
                <TextField
                    label="password" 
                    variant="outlined" 
                    type='password'
                    value={password} 
                    onChange={(event) => setPassword(event.target.value)} 
                    />
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