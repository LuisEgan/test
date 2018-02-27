import React from "react";
import Link from "gatsby-link";

const DescCarousel = ({ carouselName, CarouselDescription, images }) => {
  return (
    <div
      id={carouselName}
      className="description-carousel description-pair-container row"
    >
      <div className="carouselDescription description-container  col-sm-12 col-md-6">
        <CarouselDescription />
      </div>
      <div className="carousel-container col-sm-12 col-md-6">
        <div
          id={`${carouselName}-inner`}
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            {images.map((img, i) => {
              const active = i === 0 ? "active" : "";
              return (
                <div className={`carousel-item ${active}`} key={img}>
                  <img className="d-block w-100" src={img} alt="First slide" />
                </div>
              );
            })}
          </div>
          <a
            className="carousel-control-prev"
            href={`#${carouselName}-inner`}
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href={`#${carouselName}-inner`}
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DescCarousel;
