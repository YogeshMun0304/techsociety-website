import React from "react";
import "./home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import heroimg from "../../assets/heroimg.png";

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <div className="hero2">
          <div className="hero-text">
            <h4> Welcome to</h4>
            <h2>Tech Society</h2>
            <h6> IIIT-Bhubaneswar</h6>
            <hr />
            <p>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
          <div>
            <img className="hero-img" src={heroimg} alt="hero-img" />
          </div>
        </div>
      </div>
      <div className="home-text">
        <div className="about">
          <div className="about-text">
            <h3>About</h3>
            <hr />
            <p>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </p>
          </div>
          <img src={heroimg} alt="about-img" />
        </div>
        <div className="director">
          <div className="director-text">
            <h3>From the Director</h3>
            <hr />
            <p>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </p>
          </div>
          <img src={heroimg} alt="director-img" />
        </div>
      </div>
      <div className="home-slider">
        <h3>Our Achievements</h3>
        <Swiper navigation={true} modules={[Navigation]}>
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Home;
