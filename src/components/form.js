import React, { useState } from "react";
import { navigate } from "gatsby-link";

const Form = () => {

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
      navigate("/thankyou");
    } )
    .catch((error) => alert(error));
};
  };

  return (
    <div className="relative w-full lg:w-auto flex flex-col justify-center overflow-hidden">
    <div className="w-full px-3 py-24 bg-transparent">
        <h1 className="text-md2 lg:text-lg text-center lg:text-left font-regular font-extralight">
            Kontaktiraj nas
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
                  placeholder="Ime i prezime"
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
                  placeholder="E-mail adresa"
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
                  placeholder="Naslov"
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
                  placeholder="Poruka"
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
                border border-pink1 rounded-full w-full lg:w-2/3 2xl:w-1/2
                transition-colors duration-300 ease-in-out hover:bg-pink1 hover:text-background">POŠALJI PORUKU</button>
            </div>
           
          </form>
        </div>
      </div>
    );
  };

export default Form;

