import React from "react";
import "./about.scss";

function About() {
  return (
    <section className="flex-screen" id="quienes-somos">
      <h1 className="title white-on-dark-blue">¿Quiénes Somos?</h1>
      <div className="center-container dark-blue-bg pad-inline pad-bottom">
        <p className="body-white self-center text-aligned-centered">
          Somos un grupo empresarial centrado en la innovación, digitalización y
          automatización de servicios de salud y wellness, especializado en la
          industria hotelera con un enfoque en capacidades de última milla
        </p>
      </div>
    </section>
  );
}

export default About;
