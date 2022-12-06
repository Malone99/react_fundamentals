import { Login } from './Login';
import './App.css';
import Register from './Register';
import React, {useState} from 'react';
function App() {

  const [route, setRoute]= useState("login")

  return (
    <div className="App">

      {
    
      }
      <Login></Login>
   
    </div>
  );
}

export default App;
