import * as React from "react"
import { graphql, useStaticQuery } from 'gatsby';
import Layout from "../components/layout"
import Seo from "../components/seo";
import Hero from "../components/hero.js";
import Form from "../components/form.js";



const ContactPage = ({}) => {
  const data = useStaticQuery(graphql`
    query {
      backgroundImage: file(relativePath: { eq: "contact.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);


  return (<Layout>
    <main className="text-white">
    <Hero imagePosition="right" backgroundImage={data.backgroundImage}>
      <Form />
    </Hero>
      <section className="pt-20 lg:pt-72 w-screen">
      <div className="bg-blue w-screen lg:w-2/3 text-white lg:px-32">
      <h2 className="text-md lg:text-lg font-extralight mb-4 text-center lg:text-left pt-12 pb-8">Prijavi se na Newsletter</h2>
      <form className="px-4 flex flex-col lg:flex-row">
        <input
          type="email"
          placeholder="Upisi svoju email adresu..."
          className="relative overflow-hidden
          py-4 px-6 font-tiny lg:font-base1 text-white bg-blue-dark opacity-60 
          rounded-full mb-8 w-full lg:w-1/2 2xl:w-1/3 h-full"
        />
        <button
          type="submit"
          className={`
            relative overflow-hidden h-full
            py-3 px-16 font-regular uppercase font-base1 font-medium text-white bg-transparent 
            border border-pink1 rounded-full w-full lg:w-1/2 2xl:w-1/3 lg:ml-2 2xl:ml-24 mb-12
            transition-colors duration-300 ease-in-out hover:bg-pink1 hover:text-background
          `}
        >
          Pridruzi se
        </button>
      </form>
    </div>
      </section>
    </main>
  </Layout>
  
  );
  
};


export const Head = () => <Seo title="Contact" />

export default ContactPage;
