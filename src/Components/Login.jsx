import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Login = ({ setToken }) => {

    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const [responseMsg, SetResponseMsg]= useState('')
    

    let navigate = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault()
        console.log("login api payloads", password, email);
        const payloads={password, email}   

        await axios.post('http://localhost:4000/api/user/login',payloads)
        .then((res)=>{
            SetResponseMsg(res.data.message)
            setToken(res.data.token)
            navigate('/dashboard')
    
    })
        .catch((err)=>{
            console.log(err);
            SetResponseMsg(err.response.data.message)
        })
    }

    return (
        <div>
            <h1>login page</h1>
            <form onSubmit={handleSubmit}>
                
                <label> email <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/></label>
                <label> password <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/></label>
                
                <button type='submit'>login</button>
            </form>

            <h1> {responseMsg} </h1>
        </div>
    );
};

export default Login;