import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";




function App() {
  const [mode, setMode] = useState('light')

  //for alerting
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }

  //enabling dark mode

  const toggleMode = () => {
    if (mode === 'light') {

      setMode('dark')
      document.body.style.backgroundColor = '#43499d';
      showAlert(<b>"Dark mode has been enabled"</b>, "success");
    }
    else {

      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert(<b>"Light mode has been enabled"</b>, "success");
    }

  }


  return (
    <>
      {/* due to the import of react-router packages SPA (single page application can be made which render all the packages and when we request service it does not take time to render html page)  <Route exact path="/" element= gives the exact path*/}
      <BrowserRouter>
        <Navbar title="WalkWise" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-4" mode={mode}>
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}></Route>
            <Route
              exact path="/" element={
                <TextForm showAlert={showAlert} heading="WalkWise-Word and Character counter " mode={mode} />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>

      {/* toggle and mode helps to change the color durind switching in dark mode */}
      {/* <Navbar title="WalkWise" mode={mode} toggleMode={toggleMode} /> */}
      {/* alert */}
      {/* <Alert alert={alert} /> */}

      {/* <div className="container mb-3"> */}
      {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze below:" mode={mode} /> */}
      {/* <About /> */}



      {/* </div> */}

    </>
  );
}

export default App;
