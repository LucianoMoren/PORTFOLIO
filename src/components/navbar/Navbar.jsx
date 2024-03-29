import React, { useState } from "react";
import style from "./navbar.module.css";
import { MdOutlineLightMode } from "react-icons/md";
import { Link } from "react-scroll";
import logo from "../../assets/logo.png";
import { TbMenu2 } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
//! /////////////////////////
import school from "../../assets/school.svg";
import code from "../../assets/code.svg";
import user from "../../assets/user.svg";
import aboutMe from "../../assets/user-check.svg";
function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <nav className={style.navBar}>
      <div className={style.divLogo}>
        <img src={logo} alt="luciano-moren-logo" className={style.logo} />
      </div>

      <ul className={style.navBarUl}>
        <li className={style.desktopli}>
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
        <li className={style.desktopli}>
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
        <li className={style.desktopli}>
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
        <li className={style.desktopli}>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-0}
            spy={true}
            exact="true"
          >
            Contacto
          </Link>
        </li>
        {/* <li>
          <MdOutlineLightMode className={style.mode} />
        </li> */}
        <li className={style.mobileMenuButton} onClick={toggleSidebar}>
          <TbMenu2 />
        </li>
      </ul>

      {showSidebar && (
        <div className={style.sidebar}>
          <div className={style.header}>
            <div className={style.divLogo}>
              <img src={logo} alt="luciano-moren-logo" className={style.logo} />
            </div>
            <button className={style.closeButton} onClick={toggleSidebar}>
              <IoClose />
            </button>
          </div>

          <div className={style.sidebarUl}>
            <ul>
              <li>
                <Link
                  onClick={toggleSidebar}
                  to="about"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  exact="true"
                >
                  <img src={aboutMe} alt="aboput" />
                  Sobre mí
                </Link>
              </li>
              <li>
                <Link
                  onClick={toggleSidebar}
                  to="education"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  exact="true"
                >
                  <img src={school} alt="school" />
                  Educación
                </Link>
              </li>
              <li>
                <Link
                  onClick={toggleSidebar}
                  to="portfolio"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  exact="true"
                >
                  <img src={code} alt="proyectos" />
                  Proyectos
                </Link>
              </li>
              <li>
                <Link
                  onClick={toggleSidebar}
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  exact="true"
                >
                  <img src={user} alt="contacto" />
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div className={style.bottomAside}>
            <p>© 2024 Luciano Moren - Todos los derechos reservados</p>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
