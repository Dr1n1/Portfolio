import "./App.css";
import React, { useState } from "react";
import Header from "./statics/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
function App() {
  const [activeSection, setActiveSection] = useState("#home");
 
  return (
    <div className="App">
      <div className="w-full flex-auto">

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="hidden">
                  <Header activeSection={activeSection} />
                </div>
                <Home setActiveSection={setActiveSection} />
              </>
            }
            />
        </Routes>
      </BrowserRouter>
            </div>
    </div>
  );
}

export default App;
