import React from "react";
import style from "./about.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import fondoPerfil from "../../assets/fondo-perfil.png";
import logo from "../../assets/logo.png";
import { LuDownload } from "react-icons/lu";

import { RiArrowDownSLine } from "react-icons/ri";
import cv from "../../download/cv-luciano-moren.pdf";

function About() {
  return (
    <section className={style.about} id="about">
      <div className={style.containerAbout}>
        <div className={style.conteinerAbout1}>
          <div className={style.conteinerTitle}>
            <p className={style.title}>
              <span className={style.textGradient}>Hello</span>, It's Me
            </p>

            <h1>Luciano Moren</h1>
            <p className={style.title}>
              I'm{" "}
              <span className={style.textGradient}>FRONT END DEVELOPER</span>
            </p>
          </div>

          <div className={style.conteinerDescription}>
            <p className={style.description}>
              {" "}
              A{" "}
              <span className={style.textGradient}>
                Programming technician
              </span>{" "}
              passionate about creating interactive applications and experiences
              on the web.
            </p>
          </div>

          <div className={style.conteinerIcons}>
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
            <a
              href={cv}
              download="cv-luciano-moren.pdf"
              className={style.resume}
            >
              Download Resume <LuDownload className={style.iconDownload} />
            </a>
          </div>
        </div>
        <div className={style.conteinerAbout2}>
          <img src={fondoPerfil} alt="fondo-perfil" />
        </div>
      </div>
      <RiArrowDownSLine className={style.Arrow} />
      <img src={logo} alt="logo-bg" className={style.logoBg} />
    </section>
  );
}

export default About;
