import axios from 'axios';
import React, { useState } from 'react';

const UserRegister = () => {
    const [username, setUsername]= useState('')
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const [role, setRole]= useState('')
    const [responseMsg, SetResponseMsg]= useState('')
    const handleSubmit = async(e)=>{
        e.preventDefault()
        console.log("reguster api payloads", username, password, email, role);
        const payloads={username, password, email, role}   

        await axios.post('http://localhost:4000/api/user/register',payloads)
        .then((res)=>SetResponseMsg(res.data.message))
        .catch((err)=>{
            console.log(err);
        })
    }

    return (
        <div>
            <h1>UserRegister page</h1>
            <form onSubmit={handleSubmit}>
                <label> username <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} required/></label>
                <label> email <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/></label>
                <label> password <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/></label>
                <label> role <input type="role" value={role} onChange={(e)=>setRole(e.target.value)} required/></label>
                <button type='submit'>Register</button>
            </form>

            <h1> {responseMsg} </h1>
        </div>
    );
};

export default UserRegister;