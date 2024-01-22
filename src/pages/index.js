import * as React from "react"
import Button from "../components/button.js"
import { graphql, useStaticQuery } from 'gatsby';
import { Link, useTranslation, Trans } from 'gatsby-plugin-react-i18next';
import Card from "../components/card.js";
import Layout from "../components/layout"
import Seo from "../components/seo";
import Hero from "../components/hero.js";
import { StaticImage } from "gatsby-plugin-image";



const IndexPage = ({}) => {
  const { t } = useTranslation();
  const data = useStaticQuery(graphql`
    query 
    {
      backgroundImage: file(relativePath: { eq: "herohome.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      image1: file(relativePath: { eq: "community.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      image2: file(relativePath: { eq: "information.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      image3: file(relativePath: { eq: "support.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  const cardsData = [
    {
      image: data.image1,
      titlefront: 'Zajednica',
      textfront: 'Stvoriti fokusiranu i snažnu zajednicu ljudi uključenih u blockchain i kripto domenu u Hrvatskoj i okruženju.',
    },
    {
      image: data.image2,
      titlefront: 'Informacije',
      textfront: 'Pružiti relevantne informacije, edukaciju i znanje unutar blockchain tehnologije, mehanike kriptovaluta i cjelokupnog tržišta.',
    },
    {
      image: data.image3,
      titlefront: 'Podrska',
      textfront: 'Omogućiti pravnu, financijsku i tehnološku podršku u razvijanju regulatornih okvira i strateških blockchain projekata.',
    },
  ];

  return (
  <Layout>
    <main className="text-white">
    <Hero imagePosition="right" backgroundImage={data.backgroundImage}>
      <h1 className="text-center text-md2 pt-24 lg:text-lg lg:text-left font-regular font-extralight mb-4">Udruga za blockchain i kriptovalute</h1>
      <p className="text-base2 text-center lg:text-left font-hind font-normal lg:w-full pt-4 pb-12 lg:py-12">Obrazovanje, znanost, istraživanje te širenje svijesti o blockchain tehnologiji. </p>
      <Link to={'/join'}><Button className="w-full md:w-2/3 lg:w-1/2 2xl:w-1/3 mb-12">Postani ČLAN</Button></Link>
    </Hero>
      <section className="pt-20 xl:pt-40">
        <div className="flex flex-col md:flex-row justify-center items-center">
          {cardsData.map((card, index) => (
           <Card imageWidthClass="1/2" key={index} {...card} />
          ))}
        </div>     
      </section>
      <section className="pt-20 lg:pt-72 w-screen flex flex-col lg:flex-row items-center">
        <div className="w-full px-4 lg:px-32">
          <h1 className="text-center text-lg lg:text-left font-regular font-extralight pb-12">O udruzi</h1>
          <p className="text-center text-base1 lg:text-left font-hind font-normal pb-8 2xl:w-1/2">Udruga za blockchain i kriptovalute (UBIK) osnovana je 13.12.2017. usvajanjem Statuta</p>
          <p className="text-center text-xs lg:text-left font-regular pb-12 2xl:w-2/3">Udruge na sjednici osnivačke Skupštine. Udruga je upisana u Registar udruga 18.01.2018. te sukladno ciljevima djeluje na području obrazovanja, znanosti i istraživanja. Rad Udruge je javan i svi članovi Udruge imaju pravo sudjelovati u radu Udruge sukladno odredbama Statuta i Zakona te pravo uvida u rad tijela i odluke koje njena tijela donose. Rad Udruge usmjeren je ka ispunjavanju ciljeva Udruge. Plan rada, stoga, logično proizlazi iz ciljeva.</p>
          <Link to={'/join'}><Button className="w-full md:w-2/3 lg:w-1/2 2xl:w-1/3 mb-12">Postani ČLAN</Button></Link>
        </div>
        <div className="w-full">
          <StaticImage
            src="../images/abouthome.png"
            alt="About"
          />
        </div>
      </section>
      <section className="pt-20 lg:pt-72 w-screen">
      <div className="bg-blue w-screen lg:w-2/3 text-white lg:px-32">
      <h2 className="text-md lg:text-md2 xl:text-lg font-extralight mb-4 text-center lg:text-left pt-12 pb-8">Prijavi se na Newsletter</h2>
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


export const Head = () => <Seo title="Home" />

export default IndexPage;



