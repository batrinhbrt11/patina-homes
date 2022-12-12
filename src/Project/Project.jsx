import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import ProjectItem from '../store/ProjectItem'

export default function Project() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className='section project-page margin-top'>
        <div className=' title '>
          <div>
          <h1 className='heading-2 main-font text-color-3 font-semiBold '>Our Portfolio</h1>
          <p className='heading-5 sub-font font-light'>We Make Your Home Better</p>
          </div>  
        </div>
        <div className='project-container'>
           <ProjectItem />
           <ProjectItem />
           <ProjectItem />
           <ProjectItem />
           <ProjectItem />
           <ProjectItem />
        </div>
    </div>
  )
}
