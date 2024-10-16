import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import TexthtmlForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [btnText, setbtnText] = useState("Enable Darkmode");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      setbtnText("Enable Lightmode");
      showAlert("Dark mode has been enabled", "success");
      document.body.style.backgroundColor = "#042743";
    } else {
      setmode("light");
      setbtnText("Enable Darkmode");
      showAlert("Light mode has been enabled", "success");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="Textutils"
          aboutus="About"
          mode={mode}
          toggleMode={toggleMode}
          btntext={btnText}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route
              path="/"
              element={
                <TexthtmlForm
                  heading="Try Textutils - Word Counter, Character Counter, Remove extra spaces"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
             <Route
              path="/Textutils"
              element={
                <TexthtmlForm
                heading="Try Textutils - Word Counter, Character Counter, Remove extra spaces"
                mode={mode}
                  showAlert={showAlert}
                />
              }
            />
           
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
