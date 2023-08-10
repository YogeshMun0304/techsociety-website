import React from "react";
import "./home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import heroimg from "../../assets/heroimg.png";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero2">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, scale: 0, x: -100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <h4> Welcome to</h4>
            <h2>Tech Society</h2>
            <h6> IIIT-Bhubaneswar</h6>
            <hr />
            <p>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0, x: 100 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <img className="hero-img" src={heroimg} alt="hero-img" />
          </motion.div>
        </div>
      </section>
      <section className="home-text">
        <motion.div
          className="about"
          initial={{ opacity: 0, scale: 0.5, x: -100 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
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
        </motion.div>
        <motion.div
          className="director"
          initial={{ opacity: 0, scale: 0.5, x: 100 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
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
        </motion.div>
      </section>
      <motion.section
        className="home-slider"
        initial={{ opacity: 0, scale: 0.5, y: 100 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <h3>Our Achievements</h3>
        <Swiper navigation={true} modules={[Navigation]}>
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </motion.section>
    </div>
  );
}

export default Home;
