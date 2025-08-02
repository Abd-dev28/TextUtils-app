import './App.css';
import Header from './Components/header';
import Footer from './Components/Footer';
import Textform from './Components/Textform';
import React, { useState } from 'react';
import Alert from './Components/Alert';
// import About from './Components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App () {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => setAlert(null), 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#041220ff";
      showAlert("Dark Mode has been Enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enabled", "success");
    }
  };

  return (
    // <Router>
      <>
      {/* // <Router> */}
      <Header title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} /><Alert alert={alert} />
        {/* <Routes>
          <Route exact path="/about" element={<About />} />
          <Route
            exact path="/"
            // element={ */}
                  <><div className='container my-3'>
    <Textform
      heading="Enter the text to analyze below"
      mode={mode}
      showAlert={showAlert} />
    {/* }
  />
</Routes> */}
    {/* // </Router> */}
 </div><Footer /></>
</>
 );
}
export default App;
