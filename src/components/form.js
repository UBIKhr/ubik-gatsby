import React, { useState } from "react";
import { navigate } from "gatsby-link";
import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql } from "gatsby";

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["common"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

const Form = () => {
  const { t } = useTranslation();

  const initialFormState = {
    name: "",
    email: "",
    lastname: "",
    message: ""
  };

  const [state, setState] = useState(initialFormState);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!state.name) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!state.email) {
      errors.email = "E-mail is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(state.email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    if (!state.subject) {
      errors.subject = "Subject is required";
      isValid = false;
    }


    setErrors(errors);
    return isValid;
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    

    if (validateForm()) {
      const form = e.target;
      const formData = new FormData(form);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    
    .then(() => {
      setState(initialFormState);
      navigate("/");
    } )
    .catch((error) => alert(error));
};
  };

  return (
    <div className="relative w-full lg:w-auto flex flex-col justify-center overflow-hidden">
    <div className="w-full px-3 py-24 bg-transparent">
        <h1 className="text-md2 xl:text-lg lg:pt-14 xl:pt-0 text-center lg:text-left font-regular font-extralight">
            <Trans i18nKey={"form_header"}>Kontaktiraj nas</Trans>
        </h1>
    <form
          onSubmit={handleSubmit}
          method="post"
          data-netlify="true"
          name="contact"
          className="mt-6">
          <input type="hidden" name="form-name" value="contact" />
          <div className="flex flex-col">
          <div className="mb-2">
              <label className="block mb-8" htmlFor="name">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={t("form_name")}
                  value={state.name || ""}
                  onChange={handleChange}
                  className="w-full block px-4 py-3 mt-2 border-b border-cyan focus:outline-none"
                  style={{ background: 'transparent' }}

                />
              </label>
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            
            <div className="mb-2">
              <label className="block mb-8" htmlFor="email">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t("form_email")}
                  value={state.email || ""}
                  onChange={handleChange}
                  className="w-full block px-4 py-3 mt-2 border-b border-cyan focus:outline-none"
                  style={{ background: 'transparent' }}
                />
              </label>
              {errors.email && <span className="error">{errors.email }</span>}
            </div>
            <div className="mb-2">
              <label className="block mb-8" htmlFor="lastname">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder={t("form_subject")}
                  value={state.subject || ""}
                  onChange={handleChange}
                  className="w-full block px-4 py-3 mt-2 border-b border-cyan focus:outline-none"
                  style={{ background: 'transparent' }}                />
              </label>
              {errors.subject && <span className="error">{errors.lastname}</span>}
            </div>
          </div>
            <div className="mb-2">
              <label className="block mb-8" htmlFor="message">
                <textarea
                  type="message"
                  id="message"
                  name="message"
                  placeholder={t("form_message")}
                  value={state.message || ""}
                  onChange={handleChange}
                  className="w-full block px-4 py-3 mt-2 border-b border-cyan focus:outline-none"
                  style={{ background: 'transparent' }}
                  rows="5"
                ></textarea>
              </label>
            </div>
  
            <div className="mb-6 grid grid-cols-1 place-content-center">
              <button type="submit" className="relative overflow-hidden
                py-3 px-16 font-regular uppercase font-base1 font-medium text-white bg-transparent 
                border border-pink1 rounded-full
                transition-colors duration-300 ease-in-out hover:bg-pink1 hover:text-background"><Trans i18nKey={"form_btn"}>POŠALJI PORUKU</Trans></button>
            </div>
           
          </form>
        </div>
      </div>
    );
  };

export default Form;

