import React from "react";
import Illustration from "../assets/stock_prices.svg"

const Landing = () => {
  return (
    <section id="landing">
      <div className="container">
        <div className="row">
          <header>
            <h1 className="orange">Russia's most awarded cryptocurrency tracking platform</h1>
            <input type="text" />
            <figure>
                <img src={Illustration} alt="" />
            </figure>
          </header>
        </div>
      </div>
    </section>
  );
};

export default Landing;
