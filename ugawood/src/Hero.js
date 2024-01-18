import React from "react";
import "./Hero.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import heroData from "./heroimages.js";

function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
  };

  return (
    <div className="hwrapper">
      <Slider {...settings} className="slide">
        <div className="imgWrap">
          <img src={"/HeroImage 1.png"} alt="Hero1 " />
          <div className="htext">
            <h1>JC Apartments</h1>
            <p>Plot 273 Banga Road Kampala Uganda</p>
          </div>
        </div>
        <div className="imgWrap">
          <img src={"/Hero2.png"} alt="Hero2 " />
          <div className="htext">
            <h1>Bishop Stuart 2015</h1>
            <p>Plot 273 Banga Road Kampala Uganda</p>
          </div>
        </div>
        <div className="imgWrap">
          <img src={"/Hero3.png"} alt="Hero3 " /><div className="htext">
            <h1>Karera Site 2013</h1>
            <p>Plot 273 Banga Road Kampala Uganda</p>
          </div>

        </div>
      </Slider>
    </div>
  );
}

export default Hero;

// {heroData.map((d) => (
//   <div className="">
//     <div className="">
//       <img src={d.image} alt=" " className="himg" />
//       <div className="">
//         <h1>{d.name}</h1>
//         <p>{d.locat}</p>
//       </div>
//     </div>
//   </div>
// ))}
