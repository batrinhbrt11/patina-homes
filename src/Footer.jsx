import React from 'react'
import {FaFacebookSquare,FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='section footer'>
        <div className='container'>
            <div>
              <h2 className='sub-font font-bold heading-4'>Contact</h2> 
              <p className='text font-regular'><span className='text-color-4 '>Monday to Sunday</span> from 8:00 am to 20:00 pm</p>
              <p className='text text-color-2'>info@gmail.com</p>
            </div>
            <div>
              <h2 className='sub-font font-bold heading-4'>Showroom 1</h2> 
              <p className='text font-regular'><span className='text-color-4 '>Address:</span> 12 Ton Dat Tien, District 7, HCMC.</p>
              <p className='text font-regular'><span className='text-color-4 '>Phone:</span> (028) 5412 4986 - 5412 4071</p>
            </div>
            <div>
              <h2 className='sub-font font-bold heading-4'>Showroom 1</h2> 
              <p className='text font-regular'><span className='text-color-4 '>Address:</span> 142 Nguyen Van Huong, District 2, HCMC.</p>
              <p className='text font-regular'><span className='text-color-4 '>Phone:</span> 028 7303 1004</p>
            </div>
        </div>
        <hr></hr>
        <div className='bottom-container'>
            <h1 className='heading-2 main-font'>Patina Homes</h1>
            <div className='logo-container'>
                <a href='https://www.facebook.com/' target="_blank" rel="noopener noreferrer" > <FaFacebookSquare className='heading-5'/></a>
                <a href='https://www.instagram.com/' target="_blank" rel="noopener noreferrer" >  <FaInstagramSquare className='heading-5' /></a>
         
            </div>
        </div>
    </div>
  )
}
