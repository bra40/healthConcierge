import React from "react";
import "./service.scss";

function Service() {
  return (
    <section className="flex-screen" id="servicio">
      <h1 className="title white-on-blue">Modelo De Servicio</h1>

      <div className="pad-inline center-container white-bg pad-block">
        <img
          className="serviceImg"
          src={
            process.env.PUBLIC_URL +
            "/Health Concierge logos/PNG/HealthConciergeServices.png"
          }
          alt="The Services Offered By Health Concierge"
        />
      </div>
    </section>
  );
}

export default Service;
