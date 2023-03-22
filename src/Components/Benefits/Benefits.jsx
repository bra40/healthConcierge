import React from "react";
import "./benefits.scss";

function Benefits() {
  return (
    <section className="benefits flex-screen" id="beneficios">
      <h1 className="title white-on-dark-blue">Beneficios</h1>
      <div className="pad-inline center-container">
        <div className="pad-inline left-container white-bg pad-block">
          <img
            className="benefitsImg"
            src={
              process.env.PUBLIC_URL +
              "/Health Concierge logos/PNG/HealthConciergeBenefit.png"
            }
            alt="The Services Offered By Health Concierge"
          />
        </div>
      </div>
    </section>
  );
}

export default Benefits;
