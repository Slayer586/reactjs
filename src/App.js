import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/about';
import React, { useState } from 'react'
import {Route ,Routes } from "react-router-dom"

function App() {

  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    if (mode === 'dark') {
      document.title = 'TextUtils-DarkMode'
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    }
    else {
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success")
      document.title = 'TextUtils-LightMode'
    }
  }
  return (
    <>

     <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/> 
     <Alert alert={alert}/>
     <Routes>
      {/* <Route path='/' element={<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/> } />  */}
      <Route exat path='/' element={<TextForm showAlert={showAlert} heading="Enter text here to analysis" mode={mode}/>} /> 
      <Route exat path='/about' element={<About/>} /> 

      </Routes>

 
 </>
  );
}

export default App;
