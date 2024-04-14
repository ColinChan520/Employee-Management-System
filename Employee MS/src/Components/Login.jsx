import React, {useState} from 'react'
import './style.css'
import axio from 'axios'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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

                <br/>

                <div className='mb-3'>
                <TextField
                    label="Email" 
                    variant="outlined" 
                    value={email} 
                    onChange={(event) => setEmail(event.target.value)} 
                    sx={{
                        input: {
                            color: 'white', 
                          },
                          label: {
                            color: 'white', 
                          },
                          '& label.Mui-focused': {
                            color: 'white', 
                          },
                        '& label.Mui-focused': {
                          color: 'white',
                        },
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: 'white',
                          },
                          '&:hover fieldset': {
                            borderColor: 'white',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: 'white',
                          },
                        }
                      }}
                      fullWidth
                    />
                </div>
                
                <div className='mb-3'>
                <TextField
                    label="password" 
                    variant="outlined" 
                    type='password'
                    value={password} 
                    onChange={(event) => setPassword(event.target.value)} 
                    sx={{
                        input: {
                            color: 'white',
                          },
                          label: {
                            color: 'white', 
                          },
                          '& label.Mui-focused': {
                            color: 'white', 
                          },
                        '& label.Mui-focused': {
                          color: 'white',
                        },
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: 'white',
                          },
                          '&:hover fieldset': {
                            borderColor: 'white',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: 'white',
                          },
                        }
                      }}
                      fullWidth
                    />
                </div>

                <div style={{ textAlign: 'right' }}>
                <Button variant="contained" onClick={handleSunmit}>Log in</Button>
                </div>

        </div>
    </div>
  )
}

export default Login