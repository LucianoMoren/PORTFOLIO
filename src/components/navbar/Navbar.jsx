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
            Sobre mí
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
            Educación
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
            Proyectos
          </Link>
        </li>
        {/* <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            offset={-70}
            spy={true}
            exact="true"
          >
            Habilidades
          </Link>
        </li> */}
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={0}
            spy={true}
            exact="true"
          >
            Contacto
          </Link>
        </li>
        <li>
          <MdOutlineLightMode className={style.mode} />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
