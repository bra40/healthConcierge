import React, { useState } from "react";
import "./contact.scss";
import Modal from "react-modal";
import Form from "./Form/Form";
Modal.setAppElement("#root");

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <div className="ContactContainer">
      <div className="">
        <button className="FormOpen" onClick={openModal}>
          Forma De Contacto
        </button>
      </div>

      {isModalOpen ? (
        <div className="modalBgDarken">
          <Modal
            isOpen={isModalOpen}
            onRequestClose={() => closeModal()}
            className="Modal"
            overlayClassName="ContactOverlay"
            onAfterOpen={() => {
              document.body.style.top = `-${window.scrollY}px`;
              document.body.style.position = `fixed`;
            }}
            onAfterClose={() => {
              const scrollY = document.body.style.top;
              document.body.style.position = "";
              document.body.style.top = "";
              window.scrollTo(0, parseInt(scrollY || "0") * -1);
            }}
          >
            <div className="ContactFormHeader">
              <div className="title-white">Contact Form</div>
            </div>
            <div className="ContactFormContainer">
              <Form closeModal={closeModal} />
            </div>
          </Modal>
        </div>
      ) : null}
    </div>
  );
}
