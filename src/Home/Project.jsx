import React from 'react'
import { Link } from "react-router-dom";
import ProjectItem from '../store/ProjectItem';
export default function Project() {
  return (
    <div className="section project-section">
        <h1 className='heading-2 main-font font-semiBold'>Our Project</h1>
        <div className='project-container'>
           
           <ProjectItem />
           <ProjectItem />
           <ProjectItem />
           <ProjectItem />
           <ProjectItem />
           <ProjectItem />
        </div>
        <Link to="project" className='btn-normal' >View more &#8594; </Link>
    </div>
  )
}
