import React, { useState, useEffect } from "react";
import "./form.scss";
import "react-datepicker/dist/react-datepicker.css";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";

import emailjs from "emailjs-com";
import Swal from "sweetalert2";
const SERVICE_ID = "gmail";
const TEMPLATE_ID = "hire_template";
const USER_ID = "CN0RNMNddtaLSaAyj";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  company: "",
  budget: "",
  message: "",
  start: "",
  end: "",
  question: "",
};

const validate = (values) => {
  let errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9.%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Please Enter Your Email";
  }

  return errors;
};

export default function Form({ closeModal }) {
  const [val, setVal] = useState(false);

  const onSubmit = (values, actions) => {
    SendEmail(values);
    actions.setSubmitting(false);
  };

  function SendEmail(object) {
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, object, USER_ID)

      .then(
        (result) => {
          Swal.fire({
            icon: "success",
            title: "Message Sent Successfully",
          });
          setVal(true);
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Ooops, something went wrong",
            text: error.text,
          });
          setVal(true);
        }
      );
  }

  useEffect(() => {
    if (val) {
      setTimeout(() => {
        closeModal();
      }, 1500);
    }
  }, [val, closeModal]);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => onSubmit(values, actions, closeModal)}
      validate={validate}
    >
      {(formik) => {
        return (
          <FormikForm>
            <div className="FormContainerMinimized fs-button">
              <div className="FormInputContainer FormInputName">
                <label className="FormName body-white FormLabel">Name</label>
                <Field
                  className="FormName FormInput"
                  placeholder="First Last"
                  name="name"
                  type="text"
                  required
                />
              </div>

              <div className="FormInputContainer FormInputEmail">
                <label className="FormEmail body-white FormLabel">Email</label>
                <Field
                  className="FormEmail FormInput"
                  placeholder="example@email.com"
                  name="email"
                  type="email"
                  required
                />
              </div>
              <div className="FormErrorContainer">
                <ErrorMessage name="email">
                  {(errorMsg) => (
                    <div className="FormError">{errorMsg}</div>
                  )}
                </ErrorMessage>
              </div>

              <div className="FormInputContainer FormInputPhone">
                <label className="FormPhone body-white FormLabel">
                  Phone Number
                </label>
                <Field
                  className="FormPhone FormInput"
                  placeholder="(___) ___-____"
                  name="phone"
                  type="text"
                />
              </div>

              <div className="FormInputContainer FormInputCompany">
                <label className="FormCompany body-white FormLabel">
                  Company
                </label>
                <Field
                  className="FormCompany FormInput"
                  placeholder="Your Company"
                  name="company"
                  type="text"
                />
              </div>

              <div className="FormInputContainer FormInputMessage">
                <label className="FormMessage body-white FormLabel">
                  Message
                </label>
                <Field
                  className="FormMessage FormInput"
                  as="textarea"
                  placeholder="Reach out with your message here..."
                  name="message"
                  required
                />
              </div>

              <div className="FormInputContainer FormInputQuestion">
                <label className="FormQuestion body-white FormLabel">
                  How'd You About Us?
                </label>
                <Field
                  className="FormQuestion FormInput"
                  as="select"
                  name="question"
                  type="text"
                >
                  <option value="Discovered On The Web">
                    Discovered On The Web
                  </option>
                  <option value="Through An Advertisment">
                    Through An Advertisment
                  </option>
                  <option value="In Search Of Service">
                    In Search Of Service
                  </option>
                  <option value="Through A Recommendation">
                    Through A Recommendation
                  </option>
                  <option value="Found On Social Media">
                    Found On Social Media
                  </option>
                </Field>
              </div>

              <div className="FormButtonContainer">
                <button
                  className="FormButton"
                  type="submit"
                  disabled={!(formik.dirty && formik.isValid)}
                >
                  Submit
                </button>
              </div>
            </div>
          </FormikForm>
        );
      }}
    </Formik>
  );
}
