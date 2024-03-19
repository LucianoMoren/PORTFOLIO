import React from "react";
import style from "./navbar.module.css";
import { MdOutlineLightMode } from "react-icons/md";
import { Link } from "react-scroll";
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <nav className={style.navBar}>
      <div className={style.divLogo}>
        <img src={logo} alt="luciano-moren-logo" className={style.logo} />
      </div>

      <ul className={style.navBarUl}>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            exact="true"
          >
            ABOUT
          </Link>
        </li>
        <li>
          <Link
            to="education"
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            exact="true"
          >
            EDUCATION
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            exact="true"
          >
            SKILLS
          </Link>
        </li>
        <li>
          <Link
            to="portfolio"
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            exact="true"
          >
            PORTFOLIO
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            exact="true"
          >
            CONTACT
          </Link>
        </li>
        <li>EN</li>
        <li>
          <MdOutlineLightMode className={style.mode} />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
