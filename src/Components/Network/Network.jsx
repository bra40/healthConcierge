import React from "react";
import "./network.scss";

// Images Ambulancias
import ambulance1 from "../../Assets/Logos/Ambulancias/A.E. Ambulancias.jpg";
import ambulance2 from "../../Assets/Logos/Ambulancias/Alfa Merida Assistance.png";
import ambulance3 from "../../Assets/Logos/Ambulancias/AMB Jet Medical.jpg";
import ambulance4 from "../../Assets/Logos/Ambulancias/Sami.jpg";

// Imagenes Hospitales
import hospital1 from "../../Assets/Logos/Hospitales/Centro Medico de Las Americas.png";
import hospital2 from "../../Assets/Logos/Hospitales/Centro Medico Pensiones.jpg";
import hospital3 from "../../Assets/Logos/Hospitales/Clinica de Merida.png";
import hospital4 from "../../Assets/Logos/Hospitales/Clinica Lindavista.jpg";
import hospital5 from "../../Assets/Logos/Hospitales/Clinica Santa Maria.png";
import hospital6 from "../../Assets/Logos/Hospitales/Hospital Amistad Corea Mexico.jpg";
import hospital7 from "../../Assets/Logos/Hospitales/Hospital Faro del Mayab.jpg";
import hospital8 from "../../Assets/Logos/Hospitales/Star Medica.png";

// Imagenes Laboratorios
import laboratorio1 from "../../Assets/Logos/Laboratorios/Biottek Laboratorios.png";
import laboratorio2 from "../../Assets/Logos/Laboratorios/Caribe Denal Family.jpg";
import laboratorio3 from "../../Assets/Logos/Laboratorios/Centro Quimico Playa del Carmen.jpg";
import laboratorio4 from "../../Assets/Logos/Laboratorios/Farmacia del Caribe.jpg";
import laboratorio5 from "../../Assets/Logos/Laboratorios/Farmacia PDC.png";
import laboratorio6 from "../../Assets/Logos/Laboratorios/Farmacia YZA.png";
import laboratorio7 from "../../Assets/Logos/Laboratorios/Laboratorio Analisis Clinico BioLab.png";
import laboratorio8 from "../../Assets/Logos/Laboratorios/Laboratorio Granados.png";
import laboratorio9 from "../../Assets/Logos/Laboratorios/Laboratorio Manzur Playa del Carmen.jpg";

// Imagenes Medicos
import medico1 from "../../Assets/Logos/Medicos/Centro Medico de Las Americas.png";
import medico2 from "../../Assets/Logos/Medicos/Nocrala Selarom.jpg";
import medico3 from "../../Assets/Logos/Medicos/DoctoresStarMedica.jpg";

function Network() {
  // const images1 = [ambulance1, ambulance2, ambulance3, ambulance4];

  // const images2 = [
  //   hospital1,
  //   hospital2,
  //   hospital3,
  //   hospital4,
  //   hospital5,
  //   hospital6,
  //   hospital7,
  //   hospital8,
  // ];

  // const images3 = [
  //   laboratorio1,
  //   laboratorio2,
  //   laboratorio3,
  //   laboratorio4,
  //   laboratorio5,
  //   laboratorio6,
  //   laboratorio7,
  //   laboratorio8,
  //   laboratorio9,
  // ];

  // const images4 = [medico1, medico2, medico3];

  // ----
  const images1 = [
    {
      name: "A.E. Ambulancias",
      image: ambulance1,
    },
    {
      name: "Alfa Merida Assistance",
      image: ambulance2,
    },
    {
      name: "AMB Jet Medical",
      image: ambulance3,
    },
    {
      name: "Sami",
      image: ambulance4,
    },
  ];

  const images2 = [
    {
      name: "Centro Medico de Las Americas",
      image: hospital1,
    },
    {
      name: "Centro Medico Pensiones",
      image: hospital2,
    },
    {
      name: "Clinica de Merida",
      image: hospital3,
    },
    {
      name: "Clinica Lindavista",
      image: hospital4,
    },
    {
      name: "Clinica Santa Maria",
      image: hospital5,
    },
    {
      name: "Hospital Amistad Corea Mexico",
      image: hospital6,
    },
    {
      name: "Hospital Faro del Mayab",
      image: hospital7,
    },
    {
      name: "Star Medica",
      image: hospital8,
    },
  ];

  const images3 = [
    {
      name: "Biottek Laboratorios",
      image: laboratorio1,
    },
    {
      name: "Caribe Dental",
      image: laboratorio2,
    },
    {
      name: "Centro Quimico Playa del Carmen",
      image: laboratorio3,
    },
    {
      name: "Farmacia del Caribe",
      image: laboratorio4,
    },
    {
      name: "Farmacia PDC",
      image: laboratorio5,
    },
    {
      name: "Farmacia YZA",
      image: laboratorio6,
    },
    {
      name: "BioLab Analisis Clinico",
      image: laboratorio7,
    },
    {
      name: "Laboratorio Granados",
      image: laboratorio8,
    },
    {
      name: "Laboratorio Manzur Playa del Carmen",
      image: laboratorio9,
    },
  ];

  const images4 = [
    {
      name: "Centro Medico de Las Americas",
      image: medico1,
    },
    {
      name: "Nocrala Selarom",
      image: medico2,
    },
    {
      name: "Doctores Star Medica",
      image: medico3,
    },
  ];
  // ----

  return (
    <section className="flex-screen" id="nuestra-red">
      <h1 className="title white-on-blue">Nuestra Red</h1>
      <div className="center-container pad-block pad-inline">
        <h3 className="title-style pad-bottom spaced">MERIDA</h3>

        <div className="grid-container body-style pad-inline">
          <div className="col1 justify-center">
            <div className="flex-container">
              {images1.map((item, index) => (
                <span className="flex-item" key={index}>
                  <img src={item.image} alt={`ambulance${index}`} />
                  <div className="body-white name">{item.name}</div>
                </span>
              ))}
            </div>
          </div>
          <div className="col2 justify-center">
            <div className="flex-container">
              {images2.map((item, index) => (
                <span className="flex-item" key={index}>
                  <img src={item.image} alt={`hospital${index}`} />
                  <div className="body-white name">{item.name}</div>
                </span>
              ))}
            </div>
          </div>
          <div className="col3 justify-center">
            <div className="flex-container">
              {images3.map((item, index) => (
                <span className="flex-item" key={index}>
                  <img src={item.image} alt={`laboratorio${index}`} />
                  <div className="body-white name">{item.name}</div>
                </span>
              ))}
            </div>
          </div>
          <div className="col4 justify-center">
            <div className="flex-container">
              {images4.map((item, index) => (
                <span className="flex-item" key={index}>
                  <img src={item.image} alt={`medico${index}`} />
                  <div className="body-white name">{item.name}</div>
                </span>
              ))}
            </div>
          </div>
          <div className="net1 title-style self-center">Ambulancias</div>
          <div className="net2 title-style self-center">Hospitales</div>
          <div className="net3 title-style self-center">Laboratorios</div>
          <div className="net4 title-style self-center">Medicos</div>
        </div>
      </div>
    </section>
  );
}

export default Network;
