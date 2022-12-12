import React from 'react'
import { Link } from "react-router-dom";
export default function ProjectItem() {
  return (
    <div className='project-item'>
                <div className='img'>
                    <img src="../asset/pic10.jpg" alt='' />
                </div>
                <div className='text-content'>
                <h2 className='heading-5 main-font font-semiBold'>Project 1</h2>
                <p className='text'>
                Yellow Hats has full service renovation expertise, we are equipped with the right tools and people to handle projects of all sizes & provide high quality renovation.
                </p>
                <Link to="1" className='btn-bottom-border'>Read more</Link>
                </div>
            </div>
  )
}
