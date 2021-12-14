import React, { useState } from 'react'
import "./login.css"
import { Facebook, GitHub } from '@material-ui/icons'
import { Google } from '@mui/icons-material';
import PropTypes from 'prop-types';


async function loginUser (credentials){
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}



export default function Login({ setToken }) {
        const [username, setUserName ] = useState();
        const [password, setPassword ] = useState();

        const handleSubmit = async e => {
            e.preventDefault();
            console.log("test")
            const token = await loginUser({
                username,
                password
            });
            setToken(token);
        }

    return (
      
            <div className="login">
                
                <div className="loginContainer">
                    <div className="loginleft">

                        <div className="loginButton google"><Google className="icon"/>Google</div>
                        <div className="loginButton facebook"><Facebook  className="icon"/>Facebook</div>
                        <div className="loginButton github"><GitHub  className="icon"/>Github</div>
                        
                    </div>

                    <div className="center">
                        <div className="line"/>
                        <div className="or">OR</div>
                    </div>

                    <form className="loginright" onSubmit={handleSubmit}>
                        
                            <input type="text" placeholder="email" onChange = {e => setUserName(e.target.value)}/>
                            <input type="password" placeholder="password" onChange = {e => setPassword(e.target.value) }/>
                        
                        <button type="submit" className="loginButton2">Login</button>
                    </form>
                    
                </div>
            </div>
      
    )
}

Login.propTypes  = {
    setToken: PropTypes.func.isRequired
}