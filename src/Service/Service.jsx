import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Service() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const handle = (e) => {
    console.log("ádsa");
  };
  return (
    <div className="service-page margin-top">
      <div className="list-service">
        <div
          className="img"
          data-aos="zoom-out"
          data-aos-easing="linear"
          data-aos-duration="1200"
        >
          <img src="../asset/pic10.jpg" alt="" onClick={handle} />
          <div className="centered main-font font-semiBold  heading-4">
            Service 1
          </div>
        </div>
        <div
          className="img"
          onClick={handle}
          data-aos="zoom-out"
          data-aos-easing="linear"
          data-aos-duration="1200"
        >
          <img src="../asset/pic12.jpg" alt="" />
          <div className="centered main-font font-semiBold  heading-4">
            Service 1
          </div>
        </div>
        <div
          className="img"
          data-aos="zoom-out"
          data-aos-easing="linear"
          data-aos-duration="1200"
        >
          <img src="../asset/pic17.jpg" alt="" onClick={handle} />
          <div className="centered main-font font-semiBold heading-4">
            Service 1
          </div>
        </div>
      </div>
      <>
        <div className="section service-title">
          <div>
            <h3 className="heading-5 main-font font-bold text-color-4 ">
              Services
            </h3>
            <h2 className="heading-2 main-font font-bold">Services 1</h2>
            <p className="text font-regular">
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. Iterative approaches to corporate strategy foster
              collaborative thinking to further the overall value proposition.
              Organically grow the holistic world view of disruptive innovation.
            </p>
          </div>
        </div>
        <div className="section service-detail">
          <h3 className="centered main-font font-semiBold  heading-4">
            Detail Service
          </h3>
          <div className="service-grid">
            <div className="service-item">
              <h5 className="heading-5 font-bold">Strategy</h5>
              <p className="text font-light">
                Strategic planning is an organizatios process for defining their
                strategy so that they can accomplish specific goals and
                objectives
              </p>
            </div>
            <div className="service-item">
              <h5 className="heading-5 font-bold">Strategy</h5>
              <p className="text font-light">
                Strategic planning is an organizatios process for defining their
                strategy so that they can accomplish specific goals and
                objectives
              </p>
            </div>
            <div className="service-item">
              <h5 className="heading-5 font-bold">Strategy</h5>
              <p className="text font-light">
                Strategic planning is an organizatios process for defining their
                strategy so that they can accomplish specific goals and
                objectives
              </p>
            </div>
            <div className="service-item">
              <h5 className="heading-5 font-bold">Strategy</h5>
              <p className="text font-light">
                Strategic planning is an organizatios process for defining their
                strategy so that they can accomplish specific goals and
                objectives
              </p>
            </div>
            <div className="service-item">
              <h5 className="heading-5 font-bold">Strategy</h5>
              <p className="text font-light">
                Strategic planning is an organizatios process for defining their
                strategy so that they can accomplish specific goals and
                objectives
              </p>
            </div>
            <div className="service-item">
              <h5 className="heading-5 font-bold">Strategy</h5>
              <p className="text font-light">
                Strategic planning is an organizatios process for defining their
                strategy so that they can accomplish specific goals and
                objectives
              </p>
            </div>
          </div>
        </div>
        <div className="section service-img">
          <div className="img-list">
            <div className="img-1">
              <img src="../asset/picheight.jpeg" alt="" />
            </div>
            <div className="img-2">
              <img src="../asset/style1.jpg" alt="" />
            </div>
            <div className="img-3">
              <img src="../asset/pexels-photo-6913841.jpeg" alt="" />
            </div>
            <div className="img-4">
              <img src="../asset/pexels-photo-9615797.jpeg" alt="" />
            </div>
            <div className="img-5">
              <img src="../asset/pexels-photo-4200833.jpeg" alt="" />
            </div>
            <div className="img-6">
              <img src="../asset/pic9.jpg" alt="" />
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
