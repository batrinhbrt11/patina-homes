import React from "react";
import imgSrc from "../ImgSrc";
import { FaDraftingCompass } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Service() {
  return (
    <div className="section service-section">
      <div className="container">
        <div
          className="img"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <img src={imgSrc.Home.Service.img1} alt="" />
        </div>
        <div className="square"></div>
        <div className="content row">
          <div
            className="item"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <FaDraftingCompass />
            <h3 className="font-bold heading-5 main-font">Design Concept</h3>
            <p className="text font-regular sub-font">
              Sample text. Click to select the text box. Click again or double
              click to start editing the text. Excepteur sint occaecat cupidatat
              non proident.
            </p>
            <Link to="services" className="btn-bottom-border ">
              More
            </Link>
          </div>
          <div
            className="item"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <FaDraftingCompass />
            <h3 className="font-bold heading-5 main-font">Design Concept</h3>
            <p className="text font-regular sub-font">
              Sample text. Click to select the text box. Click again or double
              click to start editing the text. Excepteur sint occaecat cupidatat
              non proident.
            </p>
            <Link to="services" className="btn-bottom-border ">
              More
            </Link>
          </div>
          <div
            className="item"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <FaDraftingCompass />
            <h3 className="font-bold heading-5 main-font">Design Concept</h3>
            <p className="text font-regular sub-font">
              Sample text. Click to select the text box. Click again or double
              click to start editing the text. Excepteur sint occaecat cupidatat
              non proident.
            </p>
            <Link to="services" className="btn-bottom-border ">
              More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
