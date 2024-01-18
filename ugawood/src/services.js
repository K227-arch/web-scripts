import React from "react";
import "./services.css";

function services() {
  return (
    <div className="contain">
      <div className="title">
        <h1>Our Core Services</h1>
      </div>
      <div className="cardcontainer">
        <div className="scard1">
          <div className="simg">
            <img src="/Residential 1.png" alt="Commercial" />
          </div>
          <div className="stext">
            <h3>Residential Construction</h3>
            <p>
              At Ugawood, we're not just builders; we're dream-weavers. Elevate
              your living experience with our commitment to quality, transparent
              processes, and timely delivery. Your dream home begins here.
            </p>
          </div>
        </div>

        <div className="scard2">
          <div className="simg">
            <img src="/Commercial 1.png" alt="Commercial" />
          </div>
          <div className="stext">
            <h3>Commercial Construction</h3>
            <p>
              Transform your business aspirations into architectural marvels
              with Ugawood. As your dedicated partner in commercial
              construction, we bring expertise, innovation, and efficiency to
              every project.
            </p>
          </div>
        </div>

        <div className="scard3">
          <div className="simg">
            <img src="/Quantity Surveying 1.png" alt="Commercial" />
          </div>
          <div className="stext">
            <h3>Quantity Surveying</h3>
            <p>
              Discover a new standard in construction excellence with Ugawood.
              Our expert quantity surveyors redefine success by seamlessly
              managing costs, optimizing budgets, and ensuring financial clarity
              for your projects.
            </p>
          </div>
        </div>

        <div className="scard4">
          <div className="simg">
            <img src="/Civil Works 1.png" alt="Commercial" />
          </div>
          <div className="stext">
            <h3>Civil Works</h3>
            <p>
              Welcome to Ugawood, where expertise meets earth to forge
              foundations and sculpt landscapes. Specializing in earthworks and
              civil works, we bring precision, innovation, and reliability to
              every project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default services;
