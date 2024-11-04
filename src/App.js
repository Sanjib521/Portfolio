import React, { useEffect } from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Project from "./routes/Project";

import { Route, Routes } from "react-router-dom";


function App() {
  useEffect(()=>{
    alert("Are Sure To Enter Sanjib Giri Portfolio Site")
  },[])

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/project" element={<Project/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    </>
    //fggfffg
    //REYSHF
  );
}

export default App;
