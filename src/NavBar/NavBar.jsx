import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getContent, setLanguage } from "../actions/language";

export default function NavBar() {
  const navRef = useRef();
  const lang = useSelector((state) => state.language);
  const dispatch = useDispatch();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const handleChangeLanguage = (event) => {
    dispatch(setLanguage(event.target.value));
  };

  return (
    <div className="nav-bar-container">
      <div className="nav-bar">
        <Link to="/">
          <h3 className="font-bold heading-4 text-color-2 ">Patina Homes</h3>
        </Link>

        <nav ref={navRef} >
          <Link to="product" onClick={showNavBar} className="sub-font">
            {getContent(lang, "navMenuProduct")}
          </Link>
          <Link to="project" onClick={showNavBar} className="sub-font">
            {getContent(lang, "navMenuProject")}
          </Link>
          <Link to="service" onClick={showNavBar} className="sub-font">
            {getContent(lang, "navMenuService")}
          </Link>
          <button onClick={showNavBar} className="nav-btn nav-close-btn">
            <FaTimes />
          </button>
          <select
            className="language-btn language-desktop"
            defaultValue={lang}
            onChange={handleChangeLanguage}
          >
            <option value="EN">EN</option>
            <option value="VN">VN</option>
          </select>
        </nav>
        <div className="btn-mobile">
          <select
            className="language-btn language-mobile"
            defaultValue={lang}
            onChange={handleChangeLanguage}
          >
            <option value="EN">EN</option>
            <option value="VN">VN</option>
          </select>
          <button className="nav-btn" onClick={showNavBar}>
            <FaBars />
          </button>
        </div>
      </div>
    </div>
  );
}
