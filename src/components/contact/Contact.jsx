import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import style from "./contact.module.css";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import Swal from "sweetalert2";
import msj from "../../assets/pc.png";
import logo from "../../assets/logo.png";
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_pj5k0hy", "template_1vzvz5c", form.current, {
        publicKey: "nQDt_kHT3GmPW07Bm",
      })
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "¡Mensaje enviado con éxito!",
            text: "Tu mensaje fue enviado correctamente a Luciano.",
            confirmButtonColor: "rgb(14, 81, 182)", // Color azul
            customClass: {
              popup: "black-background",
            },
          });
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className={style.contact} id="contact">
      <div className={style.father}>
        <div className={style.subtitle}>
          <h2>CONTACT</h2>
        </div>
        <div className={style.contenedor}>
          <div className={style.contactme}>
            <div className={style.contactos}>
              <a>
                <BiLogoGmail className={style.iconContact} />
                lucianomorendev@gmail.com
              </a>
              <a
                href="https://www.google.com/maps/place/San+Salvador,+Entre+R%C3%ADos/@-31.623648,-58.5463312,13z/data=!3m1!4b1!4m6!3m5!1s0x95b20381a00c962b:0x75f781891198e2fa!8m2!3d-31.6237603!4d-58.5049631!16s%2Fm%2F026p_lb?entry=ttu"
                target="_blank"
              >
                <FaLocationDot className={style.iconContact} />
                Argentina, Entre Rios, San Salvador
              </a>

              <a
                href="https://www.linkedin.com/in/lucianomoren/"
                target="_blank"
              >
                <FaLinkedin className={style.iconContact} />
                /lucianomoren
              </a>
            </div>

            <div className={style.msj}>
              <img src={msj} alt="msj" />
            </div>
          </div>
          <div className={style.formContact}>
            <form ref={form} onSubmit={sendEmail} className={style.form}>
              <input type="text" name="user_name" placeholder="Name" required />
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                required
              />
              <textarea name="message" placeholder="Message" required />
              <input type="submit" value="SEND" className={style.send} />
            </form>
          </div>
        </div>
      </div>
      <img src={logo} alt="logo-bg" className={style.logoBg} />
    </section>
  );
}

export default Contact;
