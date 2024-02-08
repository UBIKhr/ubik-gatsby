import * as React from "react"
import { graphql, useStaticQuery } from 'gatsby';
import Layout from "../components/layout"
import Seo from "../components/seo";
import TabComponent from "../components/tabs.js";
import { Link, useTranslation, Trans } from 'gatsby-plugin-react-i18next';

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
    backgroundImage: file(relativePath: { eq: "members.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    image1: file(relativePath: { eq: "vlaho.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    image2: file(relativePath: { eq: "nikola.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    image3: file(relativePath: { eq: "luka.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    image4: file(relativePath: { eq: "edi.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    image5: file(relativePath: { eq: "bruno.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    image6: file(relativePath: { eq: "zoran.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    image7: file(relativePath: { eq: "belma.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    image8: file(relativePath: { eq: "bitfalls.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    image9: file(relativePath: { eq: "electrocoin.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    image10: file(relativePath: { eq: "shardlabs.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    image11: file(relativePath: { eq: "drugakozmicka.jpeg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    image12: file(relativePath: { eq: "hklogo.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    image13: file(relativePath: { eq: "chainsafe.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    linkedinIcon: file(relativePath: { eq: "linkedin.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 24, height: 24)
      }
    }
    webIcon: file(relativePath: { eq: "web.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 24, height: 24)
      }
    }
    mailIcon: file(relativePath: { eq: "mail.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 24, height: 24)
      }
    }
  }
`;
const MembersPage = ({data}) => {
  const { t } = useTranslation();

  const upravniOdbor = [
    {
      image: data.image1.childImageSharp.gatsbyImageData,
      subtitle: t("upravniOdbor.0.subtitle"),
      titleperson: 'Vlaho Hrdalo',
      textperson: t("upravniOdbor.0.textperson"),
      socialLinks: [
        {
          name: "E-mail",
          link: "mailto: vlaho@hkod.hr",
          icon: data.mailIcon.childImageSharp.gatsbyImageData,
        },
        {
          name: "LinkedIn",
          link: "https://hr.linkedin.com/in/vlaho-hrdalo",
          icon: data.linkedinIcon.childImageSharp.gatsbyImageData,
        },
      ],
    },
    {
      image: data.image2.childImageSharp.gatsbyImageData,
      titleperson: 'Nikola Škorić',
      textperson: t("upravniOdbor.1.textperson"),
      socialLinks: [
        {
          name: "Email",
          link: "mailto:nikola@ubik.hr",
          icon: data.mailIcon.childImageSharp.gatsbyImageData,
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/nskoric/",
          icon: data.linkedinIcon.childImageSharp.gatsbyImageData,
        },
      ],
    },
    {
      image: data.image3.childImageSharp.gatsbyImageData,
      titleperson: 'Luka Sučić',
      textperson: t("upravniOdbor.2.textperson"),
      socialLinks: [
        {
          name: "Email",
          link: "mailto:luka@ubik.hr",
          icon: data.mailIcon.childImageSharp.gatsbyImageData,
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/lukasucic/",
          icon: data.linkedinIcon.childImageSharp.gatsbyImageData,
        },
      ],
    },
    {
        image: data.image4.childImageSharp.gatsbyImageData,
        titleperson: 'Edi Sinovčić',
        textperson: t("upravniOdbor.3.textperson"),
        socialLinks: [
          {
            name: "Email",
            link: "mailto:edi@ubik.hr",
            icon: data.mailIcon.childImageSharp.gatsbyImageData,
          },
          {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/edi-sinovcic/",
            icon: data.linkedinIcon.childImageSharp.gatsbyImageData,
          },
        ],
      },
      {
        image: data.image5.childImageSharp.gatsbyImageData,
        titleperson: 'Bruno Škvorc',
        textperson: t("upravniOdbor.4.textperson"),
        socialLinks: [
          {
            name: "Email",
            link: "mailto:bruno@ubik.hr",
            icon: data.mailIcon.childImageSharp.gatsbyImageData,
          },
          {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/swader/",
            icon: data.linkedinIcon.childImageSharp.gatsbyImageData,
          },
        ],
      },
      {
        image: data.image6.childImageSharp.gatsbyImageData,
        titleperson: 'Zoran Balkić',
        textperson: t("upravniOdbor.5.textperson"),
        socialLinks: [
          {
            name: "Email",
            link: "mailto:zoran@ubik.hr",
            icon: data.mailIcon.childImageSharp.gatsbyImageData,
          },
          {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/zbalkic/",
            icon: data.linkedinIcon.childImageSharp.gatsbyImageData,
          },
        ],
      },
      {
        image: data.image7.childImageSharp.gatsbyImageData,
        titleperson: 'Belma Gutlić',
        textperson: t("upravniOdbor.6.textperson"),
        socialLinks: [
          {
            name: "Email",
            link: "mailto:belma@ubik.hr",
            icon: data.mailIcon.childImageSharp.gatsbyImageData,
          },
          {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/belmagutlic/",
            icon: data.linkedinIcon.childImageSharp.gatsbyImageData,
          },
        ],
      },
  ];

  const temeljniClanovi = [
    {
        name: 'Bitfalls',
        logoUrl: data.image8.childImageSharp.gatsbyImageData,
        website: 'https://www.linkedin.com/company/bitfalls/about/',
    },
    {
        name: 'Electrocoin',
        logoUrl: data.image9.childImageSharp.gatsbyImageData,
        website: 'hhttps://electrocoin.eu/',
    },
    {
        name: 'Shardlabs',
        logoUrl: data.image10.childImageSharp.gatsbyImageData,
        website: 'https://shardlabs.io/',
    },
    {
        name: 'Druga kozmicka',
        logoUrl: data.image11.childImageSharp.gatsbyImageData,
    },
    {
        name: 'HK',
        logoUrl: data.image12.childImageSharp.gatsbyImageData,
        website: 'https://www.hkod.hr/',
    },
    {
        name: 'Chainsafe',
        logoUrl: data.image13.childImageSharp.gatsbyImageData,
        website: 'https://chainsafe.io/',
    }
  ];

  return (
  
  <Layout>
    <main className="text-white overflow-hidden">
        <section className="px-5 lg:px-24 pt-20 bg-gradient-to-b from-gradient-start to-gradient-end">
        <TabComponent
          tabs={[
            { label: <Trans i18nKey={"tabs_upravni"}>{"Upravni Odbor"}</Trans>, key: "upravniOdbor" },
            { label: <Trans i18nKey={"tabs_temeljni"}>{"Temeljni Članovi"}</Trans>, key: "temeljniClanovi" },
          ]}
          data={{
            upravniOdbor: upravniOdbor,
            temeljniClanovi: temeljniClanovi,
          }
          }
        />

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


export const Head = () => <Seo title="Members" />

export default MembersPage;
