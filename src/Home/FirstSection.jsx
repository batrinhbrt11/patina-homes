import React from 'react'
import { FaTwitter,FaFacebookF,FaInstagram,FaPinterestP } from "react-icons/fa";
import imgSrc from '../ImgSrc';
import socialLink from '../SocialLink';
export default function FirstSection() {
  return (
    <div className='first-section-home section'>
        <div className='left-content'>
            <div className='text-content'>
                <h5>&mdash; The Art</h5>
                <h5> of Placement</h5>
            </div>
            <div className='social-content'>
                <div className='icon-container'>
                    <a href={socialLink.facebook}><FaFacebookF/></a>
                    <a href={socialLink.twitter}><FaTwitter/></a>
                    <a href={socialLink.instagram}><FaInstagram/></a>
                    <a href={socialLink.pinterest}><FaPinterestP/></a>
                </div>
            </div>
        </div>
        <div className='right-content'>
            <div  className='empty-square'>

            </div>
            <div className='img-square'>
                <img src={imgSrc.Home.FirstSectionImg.img1} alt="" />
            </div>
        </div>
    </div>
  )
}
