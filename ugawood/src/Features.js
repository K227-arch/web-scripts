import React from "react";
import "./Features.css";

function Features() {
  return (
    <div className="container">
      <div className="contents">
        <div className="image">
          <img src="./feature.JPG" alt="feauture" width={800} height={600} />
        </div>
        <div className="text">
          <div className="Tagline">
            <h1>Quality, Speed and Affordability</h1>
            <p>
              Ugawood Limited is a general civil works contractor based in
              western region of uganda. we specialize in building construction
              of residential and industrial projects as well as earth work
              contracts.{" "}
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
