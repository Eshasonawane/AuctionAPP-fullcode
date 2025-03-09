import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Auction App</h1>
        <p>
          Buy & sell items in the most secure online auctions.  
          <br />
          <span className="small-text">
            An auction is usually a process of buying and selling goods or services by offering them up for bids, taking bids, and then selling the item to the highest bidder or buying the item from the lowest bidder.
          </span>
        </p>
        <Link to="/signup" className="btn">Get Started</Link>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <h3>1. Sign Up</h3>
            <p>Create a free account and get started.</p>
          </div>
          <div className="step">
            <h3>2. Bid or Sell</h3>
            <p>Place bids on items or post your own auctions.</p>
          </div>
          <div className="step">
            <h3>3. Win & Pay</h3>
            <p>Win auctions and complete secure payments.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
