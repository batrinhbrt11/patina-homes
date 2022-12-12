import React from "react";
import imgSrc from "../ImgSrc";

export default function About() {
  return (
    <div className="about-section section">
      <div className="row">
        <div
          className="left-content"
          style={{ marginBottom: "20px" }}
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <div className="text-content ">
            <h3 className="heading-3 font-bold main-font">About us</h3>
            <p className="text font-light">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="right-content ">
          <div className="img-content">
            <div
              className="square1"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1000"
            ></div>
            <div
              className="square2"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
            ></div>
            <div
              className="img"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="2000"
            >
              <img src={imgSrc.Home.About.img1} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="right-content">
          <div className="img-content ">
            <div
              className="square1"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1000"
            ></div>
            <div
              className="square2"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
            ></div>
            <div
              className="img"
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="2000"
            >
              <img src={imgSrc.Home.About.img1} alt="" />
            </div>
          </div>
        </div>
        <div
          className="left-content"
          style={{ marginTop: "20px" }}
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <div className="text-content ">
            <h3
              className="heading-3 font-bold main-font"
              style={{ textAlign: "center" }}
            >
              Our History
            </h3>
            <p className="text font-light ">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
