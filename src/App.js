import { Login } from './Login';
import './App.css';
import Register from './Register';
import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import ResetPassword from './ResetPassword';
import ForgotPasword from './ForgotPassword';
import EmailClient from './EmailClient';

// route === "login" && <Login setRoute={setRoute} />
// if route === "login" then return <Login />
// if route !== "login" then return fasle

// a && b -> if a is true then return b
// if a is false then return a (false)

// in react we can use any falsy value to render nothing

const routes = [
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }
 
]

function App() {

  return (
    <div className="App">
      
        <Routes >
          <Route path='/login'  element={<Login></Login>}></Route>
          <Route path='/register'  element={<Register></Register>}></Route>
          <Route path='/forgot-password' element= {<ForgotPasword></ForgotPasword>}></Route>
          <Route path='/reset-password'  element={<ResetPassword></ResetPassword>}></Route>
        </Routes>
        <ForgotPasword> </ForgotPasword>
      
      {/* {
        routes.map(route => (
          window.location.href.includes(route.path) ? route.element : null
        ))
      } */}
    </div>
  );
}

export default App;
