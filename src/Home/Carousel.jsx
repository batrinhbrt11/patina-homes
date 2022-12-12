import React, { useEffect, useState } from "react";
import imgSrc from "../ImgSrc";
import Style from "./Style";
export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const styleSrc = [
    {
      id: 1,
      mainImg: imgSrc.Home.Style.img2,
      subImg1: imgSrc.Home.Style.img2,
      subImg2: imgSrc.Home.Style.img2,
      subImg3: imgSrc.Home.Style.img2,
      styleName: "Modern Style",
      description:
        " The home is surrounded by a landscaped garden and there are lots of different neighbours in the area. The average home is created for a single family.",
    },
    {
      id: 2,
      mainImg: imgSrc.Home.Style.img3,
      subImg1: imgSrc.Home.Style.img3,
      subImg2: imgSrc.Home.Style.img3,
      subImg3: imgSrc.Home.Style.img3,
      styleName: "Modern Style",
      description: " dsa",
    },
  ];

  const gotoNext = (currentStyle) => {
    setCurrent(currentStyle);
  };
  const prevSlide = ()=>{
    if (current === 0) {
      setCurrent(styleSrc.length - 1);
    } else {
      setCurrent(current - 1);
    }
  }
  const nextSlide = ()=>{
    if (current === styleSrc.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      if (current === styleSrc.length - 1) {
        setCurrent(0);
      } else {
        setCurrent(current + 1);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [current, styleSrc.length]);
  return (
    <div className="section carousel">
      <Style currentStyle={styleSrc[current]} />
      <div className="carousel-boult">
        {styleSrc.map((id, currentStyle) => (
          <span
            key={currentStyle}
            onClick={() => gotoNext(currentStyle)}
            className={currentStyle === current ? "active" : null}
          ></span>
        ))}
      </div>

      <button className="btn-slide prev" onClick={prevSlide}>❮</button>
      <button className="btn-slide next" onClick={nextSlide}>❯</button>
    </div>
  );
}
