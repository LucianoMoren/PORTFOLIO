import React from "react";
import style from "./skills.module.css";
import {
  SiAdobeillustrator,
  SiExpress,
  SiPostgresql,
  SiRedux,
  SiSequelize,
  SiTailwindcss,
  SiVisualstudiocode,
} from "react-icons/si";

import { FaCss3, FaFigma, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

import logo from "../../assets/logo.png";
import imageSkills from "../../assets/imageskills.png";

function Skills() {
  return (
    <section className={style.skills} id="skills">
      <div className={style.father}>
        <div className={style.subtitle}>
          <h2>SKILLS</h2>
        </div>

        <div className={style.contenedor}>
          <div className={style.containerSkills}>
            <div className={style.skill}>
              <FaHtml5 className={style.iconoSkill} />
            </div>
            <div className={style.skill}>
              <FaCss3 className={style.iconoSkill} />
            </div>
            <div className={style.skill}>
              <SiTailwindcss className={style.iconoSkill} />
            </div>
            <div className={style.skill}>
              <IoLogoJavascript className={style.iconoSkill} />
            </div>
            <div className={style.skill}>
              <FaReact className={style.iconoSkill} />
            </div>
            <div className={style.skill}>
              <SiRedux className={style.iconoSkill} />
            </div>
            <div className={style.skill}>
              <FaNode className={style.iconoSkill} />
            </div>
            <div className={style.skill}>
              <SiExpress className={style.iconoSkill} />
            </div>
            <div className={style.skill}>
              <SiSequelize className={style.iconoSkill} />
            </div>
            <div className={style.skill}>
              <SiPostgresql className={style.iconoSkill} />
            </div>
            <div className={style.skill}>
              <SiVisualstudiocode className={style.iconoSkill} />
            </div>
            <div className={style.skill}>
              <SiAdobeillustrator className={style.iconoSkill} />
            </div>

            <div className={style.skill}>
              <FaFigma className={style.iconoSkill} />
            </div>
          </div>

          <div className={style.imgSkills}>
            <img src={imageSkills} alt="imagen-skills" />
          </div>
        </div>
      </div>
      <img src={logo} alt="logo-bg" className={style.logoBg}></img>
    </section>
  );
}

export default Skills;
