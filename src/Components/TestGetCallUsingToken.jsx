import axios from 'axios';
import React, { useState } from 'react';

const TestGetCallUsingToken = ({token}) => {
    const[respnseData, SetResponseData]=useState([])
    const[responseMsg, setResponseMsg]=useState()
    const handleSubmit=async()=>{
        await axios.get('http://localhost:4000/api/user/getuser',{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        .then((res)=>{
            SetResponseData(res.data.data)
            setResponseMsg(res.data.message)
        })
        .catch((err)=>{
            console.log(err);
            setResponseMsg(err.response.data.message)
        })
    }
    return (
        <div>
            <h1>get token test</h1>
            <button onClick={handleSubmit}>user details</button>
            <h1>{responseMsg}</h1>
            {respnseData.map((item, index)=>{
                return(
                    <>
                     <div key={index}>
                        <h3>{item.username}</h3>
                        <h3>{item.email}</h3>
                        <h3>{item.role}</h3>
                     </div>
                    </>
                )
            })}
        </div>
    );
};

export default TestGetCallUsingToken;