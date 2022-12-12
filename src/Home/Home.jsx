import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import imgSrc from '../ImgSrc'
import About from './About'
import BigImg from './BigImg'
import Carousel from './Carousel'
import Project from './Project'
import Service from './Service'


export default function Home() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className='margin-top'>
      <BigImg />
      <About />
      <Service />
      <div
        className="bg-title"
        style={{ backgroundImage: `url(${imgSrc.Home.Service.img1})` }}
      >
        <div>
          <h1 className="heading-1 main-font font-bold">Galery</h1>
        </div>
      </div>
      <Carousel />
      <Project />
    </div>
  )
}
