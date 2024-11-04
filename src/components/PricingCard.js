import { Link } from "react-router-dom"
import "./PricingCardStyle.css"

import React from 'react'

const PricingCard = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>- Basic -</h3>
                <span className="bar"></span>
                <p className="btc">₹8000</p>
                <p>- 3 Days -</p>
                <p>- 3 Pages -</p>
                <p>- Feature -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btn">
                    PURCHASE NOW
                </Link>
            </div>

            <div className="card">
                <h3>- Premium -</h3>
                <span className="bar"></span>
                <p className="btc">₹17000</p>
                <p>- 5 Days -</p>
                <p>- 7 Pages -</p>
                <p>- Feature -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btn">
                    PURCHASE NOW
                </Link>
            </div>

            <div className="card">
                <h3>- Extra Premium -</h3>
                <span className="bar"></span>
                <p className="btc">₹28000</p>
                <p>- 15 Days -</p>
                <p>- 23 Pages -</p>
                <p>- Feature -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btn">
                    PURCHASE NOW
                </Link>
            </div>
        </div>
      
    </div>
  )
}

export default PricingCard
