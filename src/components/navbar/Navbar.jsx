import React from "react";
import style from "./navbar.module.css";
import { MdOutlineLightMode, MdLightMode } from "react-icons/md";
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <nav className={style.navBar}>
      <div className={style.divLogo}>
        <img src={logo} alt="luciano-moren-logo" className={style.logo} />
      </div>

      <ul className={style.navBarUl}>
        <a href="#about">ABOUT</a>
        <a href="#education">EDUCATION</a>
        <a href="#skills">SKILLS</a>
        <a href="#portfolio">PORTFOLIO</a>
        <a href="#contact">CONTACT</a>
        <li>EN</li>
        <li>
          <MdOutlineLightMode className={style.mode} />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
