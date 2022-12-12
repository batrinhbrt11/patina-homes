import React from "react";
import { Link } from "react-router-dom";
export default function Style({currentStyle}) {
  return (
    <div className="style-section ">
      <div className="style-grid">
        <div className="main-img">
          <img src={currentStyle.mainImg} alt="" />
        </div>
        <div className="content-container">
          <div className="content">
            <div className="text-content">
              <h2 className="heading-2 main-font font-semiBold text-color-3" >
                {currentStyle.styleName}
              </h2>
              <p className="text">
              {currentStyle.description}
              </p>
              <Link to="/product">View more &#8594; </Link>
            </div>
          </div>
          <div className="sub-img">
            <div>
              <img src={currentStyle.subImg1} alt="" />
            </div>
            <div>
              <img src={currentStyle.subImg2} alt="" />
            </div>
            <div>
              <img src={currentStyle.subImg3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
