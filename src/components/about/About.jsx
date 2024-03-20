import React from "react";
import style from "./about.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import fondoPerfil from "../../assets/fondo-perfil.png";
import { Link } from "react-scroll";

import { LuDownload } from "react-icons/lu";
import { RxDoubleArrowDown } from "react-icons/rx";
import { RiArrowDownSLine } from "react-icons/ri";
import cv from "../../download/cv-luciano-moren.pdf";

function About() {
  return (
    <section className={style.about} id="about">
      <div className={style.containerAbout}>
        <div className={style.conteinerAbout1}>
          <div className={style.conteinerTitle}>
            <div>
              <p className={style.title}>Aloooo, soy</p>
              <h1 className={style.textGradient}>Luciano Moren</h1>
            </div>
            <div className={style.conteinerDescription}>
              <p className={style.description}>
                {" "}
                Un{" "}
                <span className={style.tecnico}>
                  Técnico de programación
                </span>{" "}
                de Entre Rios, Argentina 🇦🇷. Especializado en el desarrollo
                Front end de aplicaciones unicas.
              </p>
            </div>
          </div>

          <div className={style.conteinerIcons}>
            <a
              href={cv}
              download="cv-luciano-moren.pdf"
              className={style.resume}
            >
              Descargar CV <LuDownload className={style.iconDownload} />
            </a>
            <a
              href="https://github.com/LucianoMoren"
              target="_blank"
              className={style.iconsRed}
            >
              <FaGithub className={style.githubIcon} />
            </a>

            <a
              href="https://www.linkedin.com/in/lucianomoren/"
              target="_blank"
              className={style.iconsRed}
            >
              <FaLinkedin className={style.linkedinIcon} />
            </a>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              exact="true"
            >
              <div className={style.work}>
                <span className={style.openToWork}>OPEN TO WORK</span>
                <RxDoubleArrowDown className={style.arrowWork} />
              </div>
            </Link>
          </div>
        </div>
        <div className={style.conteinerAbout2}>
          <img src={fondoPerfil} alt="fondo-perfil" />
        </div>
      </div>
      <Link
        to="education"
        smooth={true}
        duration={500}
        offset={-70}
        spy={true}
        exact="true"
        className={style.linkArrow}
      >
        <RiArrowDownSLine className={style.Arrow} />
      </Link>
    </section>
  );
}

export default About;
