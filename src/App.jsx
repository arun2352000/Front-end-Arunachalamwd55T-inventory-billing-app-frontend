import React from 'react';
import UserRegister from './Components/UserRegister';
import Login from './Components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashBoard from './Components/DashBoard';

const App = () => {
  return (
    <div>
      <h1>app comp</h1>
      <UserRegister />
      
      <BrowserRouter>
      <Login />
      <Routes>
        <Route path='/dashboard' element={<DashBoard />}/>
      </Routes>
      </BrowserRouter>
    </div>

  );
};

export default App;