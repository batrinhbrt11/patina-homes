import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

export default function ProjectDetail() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className='section project-detail'>
        <h1 className='heading-2 font-regular main-font'>Project Name</h1>
        <img src="../asset/pic10.jpg" alt='' />
        <img src="../asset/pic12.jpg" alt='' />
    </div>
  )
}
