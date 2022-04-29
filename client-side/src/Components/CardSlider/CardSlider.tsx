import React from "react";
import pic from "../../Asset/pic1.jpg";
import "./CardSlider.css";

const CardSlider = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide slide-w"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={pic} alt="First slide" />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://icms-image.slatic.net/images/ims-web/a4d42d15-801b-43f2-9faa-54e88e6392e8.jpg_1200x1200.jpg"
            alt="Second slide"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://icms-image.slatic.net/images/ims-web/de4b4744-2f99-490c-a38c-731892db7cf3.png"
            alt="Third slide"
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default CardSlider;
