import { Login } from './Login';
import './App.css';
import Register from './Register';
import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import ResetPassword from './ResetPassword';
import ForgotPasword from './ForgotPassword';
import EmailClient from './EmailClient';
import { Link, useNavigate } from "react-router-dom";
import logo from "./logo/background.jpeg";



function App() {

  return (
    <div className="App">
       
        <Routes >
          <Route 
              path='/'
              element={
                <div>
                  <image></image>   
                  <Link to='/login'>Click me Friend</Link>
                </div>}>
          </Route>
          <Route path='/login'  element={<Login></Login>}></Route>
          <Route path='/register'  element={<Register></Register>}></Route>
          <Route path='/forgot-password' element= {<ForgotPasword></ForgotPasword>}></Route>
          <Route path='/reset-password'  element={<ResetPassword></ResetPassword>}></Route> s
        </Routes>   
    </div>
  );
}

export default App;
