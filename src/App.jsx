import React, {useState} from 'react';
import UserRegister from './Components/UserRegister';
import Login from './Components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashBoard from './Components/DashBoard';
import TestGetCallUsingToken from './Components/TestGetCallUsingToken';

const App = () => {
  const [token, setToken]=useState('')
  return (
    <div>
      <h1>app comp</h1>
      <UserRegister />
      
      <BrowserRouter>
      <Login setToken={setToken} />
      <Routes>
        <Route path='/dashboard' element={<DashBoard />}/>
      </Routes>
      </BrowserRouter>
      <TestGetCallUsingToken token={token}/>
    </div>

  );
};

export default App;