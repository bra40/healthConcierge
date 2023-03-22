import React from "react";
import "./hero.scss";
import Contact from "../Contact/Contact";
// import logo as "/public/Health Concierge logos/JPG/Health Concierge logo ESMERALDA.jpg";
// "../"
// "/health-concierge/public/Health Concierge logos/JPG/Health Concierge logo BLANCO-DEGRADADO.jpg";

function Hero() {
  return (
    <section className="full-screen hero" id="landing">
      <div className="center-container">
        <div className="split pad-inline pad-bottom">
          <div className="body self-center">
            <img
              src={
                process.env.PUBLIC_URL +
                "/Health Concierge logos/JPG/Health Concierge logo ESMERALDA.jpg"
              }
              // src="../"
              alt="logo"
            />
            <div>
              <p>
                Es un sistema integrado de servicios de salud comúnmente
                requeridos por los huéspedes a través de una plataforma digital,
                mejorando así significativamente su experiencia
              </p>
              <div className="align-left">
                <Contact />
              </div>
            </div>
          </div>
          <div className="phone">
            <img
              className="phoneImg"
              src={
                process.env.PUBLIC_URL +
                "/Health Concierge logos/PNG/HealthConciergePhones.png"
              }
              // src="../"
              alt="Phone With Health Concierge Application"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
