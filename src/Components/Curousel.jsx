import { useState } from 'react';
import './Carousel.css'; // Import custom styles for the carousel

const carouselItems = [
  {
    imgSrc: 'img/carousel-1.jpg',
    heading: 'Welcome To Our Agency',
    subheading: 'Elevate Your Business Online',
    description: 'At our agency, we specialize in transforming your business vision into a compelling online presence. With innovative strategies and cutting-edge technology, we help you reach and engage your target audience effectively. Discover how we can help you stand out in the digital landscape.',
  },
  {
    imgSrc: 'img/carousel-2.jpg',
    heading: 'Welcome To Our Agency',
    subheading: 'Showcase Your Business to the World',
    description: 'Our expert team is dedicated to boosting your brands visibility across online platforms. From stunning web designs to impactful digital marketing, we provide tailored solutions to elevate your online presence. Partner with us to achieve your business goals and captivate your audience.',
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <div className="carousel-inner">
        <div className="carousel-image-wrapper">
          <img
            src={carouselItems[currentIndex].imgSrc}
            className="carousel-image"
            alt="Carousel"
          />
        </div>
        <div className="carousel-caption">
          <div className="container">
            <div className="row gy-0 gx-5">
              <div className="col-xl-7 animated fadeInLeft">
                <div className="text-sm-center text-md-end">
                  <h4 className="text-primary text-uppercase fw-bold mb-4">{carouselItems[currentIndex].heading}</h4>
                  <h1 className="display-4 text-uppercase text-white mb-4">{carouselItems[currentIndex].subheading}</h1>
                  <p className="mb-5 fs-5">{carouselItems[currentIndex].description}</p>
                  <div className="d-flex justify-content-center justify-content-md-end flex-shrink-0 mb-4">
                    <a className="btn btn-light rounded-pill py-3 px-4 px-md-5 me-2" href="#"><i className="fas fa-play-circle me-2"></i> Watch Video</a>
                    <a className="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2" href="#">Learn More</a>
                  </div>
                  <div className="d-flex align-items-center justify-content-center justify-content-md-end">
                    <h2 className="text-white me-2">Follow Us:</h2>
                    <div className="d-flex justify-content-end ms-2">
                      <a className="btn btn-md-square btn-light rounded-circle me-2" href=""><i className="fab fa-facebook-f"></i></a>
                      <a className="btn btn-md-square btn-light rounded-circle mx-2" href=""><i className="fab fa-twitter"></i></a>
                      <a className="btn btn-md-square btn-light rounded-circle mx-2" href=""><i className="fab fa-instagram"></i></a>
                      <a className="btn btn-md-square btn-light rounded-circle ms-2" href=""><i className="fab fa-linkedin-in"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control prev" onClick={goToPrevious}>
        &#10094;
      </button>
      <button className="carousel-control next" onClick={goToNext}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
