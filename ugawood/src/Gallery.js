import React from "react";
import data from "./Images.js";
import "./Gallery.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Gallery() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3
      };

  return (
    <div className="wrapper">
      <div className="wcontainer">
        <Slider {...settings}>
          {data.map((d) => (
            <div className="impcard">
              <div className="cardimg">
                <img src={d.image} alt=" " className="cimg" />
              </div>

              <div className="cardtext">
                <p>{d.name}</p>
                <p>{d.locat}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Gallery;
