import "./HeroimgStyle.css";
import React from 'react'

import Introimg from "../assets/intro-bg.jpg"
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={Introimg} alt="Introimg" />
      </div>
      <div className="content">
        <p> HI, I,M A FREELANCER</p>
        <h1>React Devloper</h1>
        <div>
          <Link to="/project" className="btn">Project</Link>
          <Link to="/CONTACT" className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Heroimg
