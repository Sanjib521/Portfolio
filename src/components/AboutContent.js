import { Link } from "react-router-dom"
import "./AboutContentStyle.css"
import R1 from "../assets/r1.jpg"
import R2 from "../assets/r2.png"

import React from 'react'

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Who Am I?</h1>
                <p>I am a React Developer. I capable of creating Responsive website.</p>
            </div>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
            <div className="right">
                <div className="image-container">
                    <div className="img-stack top">
                        <img src={R1} className="img" alt="ima"/>
                    </div>

                    <div className="img-stack bottom">
                        <img src={R2} className="img" alt="ima"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent

// ghfghfff