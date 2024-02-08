import React, { useState } from "react";
import Button from "../components/button.js";
import { graphql, useStaticQuery } from 'gatsby';
import { Link, useTranslation, Trans } from 'gatsby-plugin-react-i18next';
import Card from "../components/card.js";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Hero from "../components/hero.js";
import { StaticImage } from "gatsby-plugin-image";

export const query = graphql`
  query IndexPageQuery($language: String!) {
    locales: allLocale(
      filter: { language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
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
`;

const IndexPage = ({ data }) => {
  const { t } = useTranslation();

  const cardsData = [
    {
      image: data.image1.childImageSharp.gatsbyImageData,
      titlefront: t("cards.0.title"),
      textfront: t("cards.0.text"),
    },
    {
      image: data.image2.childImageSharp.gatsbyImageData,
      titlefront: t("cards.1.title"),
      textfront: t("cards.1.text"),
    },
    {
      image: data.image3.childImageSharp.gatsbyImageData,
      titlefront: t("cards.2.title"),
      textfront: t("cards.2.text"),
    },
  ];

  return (
    <Layout>
      <main className="text-white overflow-hidden">
        <Hero imagePosition="right" backgroundImage={data.backgroundImage.childImageSharp.gatsbyImageData}>
          <h1 className="text-center text-md2 pt-24 lg:text-lg lg:text-left font-regular font-extralight mb-4">
            <Trans i18nKey="title">Association for Blockchain and Cryptocurrencies</Trans>
          </h1>
          <p className="text-base2 text-center lg:text-left font-hind font-normal lg:w-full pt-4 pb-12 lg:py-12">
            <Trans i18nKey="content">Education, science, research, and raising awareness about blockchain technology.</Trans>
          </p>
          <Link to={'/join'}>
            <Button className="mb-12">
              <Trans i18nKey="buttonText">Become a MEMBER</Trans>
            </Button>
          </Link>
        </Hero>
        <section className="pt-20 xl:pt-40">
          <div className="flex flex-col md:flex-row justify-center items-center">
            {cardsData.map((card, index) => (
              <Card imageWidthClass="1/2" key={index} {...card} />
            ))}
          </div>
        </section>
        <section className="pt-20 lg:pt-72 w-screen flex flex-col lg:flex-row items-start">
          <div className="w-full px-4 lg:pl-32 xl:px-32 pt-12 flex flex-col justify-center items-center lg:justify-start lg:items-start">
            <h1 className="text-center text-lg lg:text-left font-regular font-extralight pb-12">
              <Trans i18nKey="aboutTitle">About the Association</Trans>
            </h1>
            <p className="text-center text-base1 lg:text-left font-hind font-normal pb-8 2xl:w-1/2">
              <Trans i18nKey="aboutContent1">
                The Association for Blockchain and Cryptocurrencies (UBIK) was established on December 13, 2017, by adopting the Statute at the founding Assembly.
              </Trans>
            </p>
            <p className="text-center text-xs lg:text-left font-regular pb-12 2xl:w-2/3">
              <Trans i18nKey="aboutContent2">
                The Association was registered in the Register of Associations on January 18, 2018. In accordance with its goals, it operates in the field of education, science, and research. The work of the Association is public, and all members of the Association have the right to participate in the work of the Association in accordance with the provisions of the Statute and the Law.
              </Trans>
            </p>
            <Link to={'/join'}>
              <Button className="mb-12 mx-auto">
                <Trans i18nKey="buttonText">Become a MEMBER</Trans>
              </Button>
            </Link>
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
            <h2 className="text-md lg:text-md2 xl:text-lg font-extralight mb-4 text-center lg:text-left pt-12 pb-8">
              <Trans i18nKey="newsletter">Prijavi se na Newsletter</Trans>
            </h2>
            <form className="px-4 flex flex-col lg:flex-row">
              <input
                type="email"
                placeholder={t("newsletter_email")}
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
                <Trans i18nKey="newsletter_btn">Join</Trans>
              </button>
            </form>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default IndexPage;
