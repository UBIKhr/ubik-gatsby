import * as React from "react"
import { graphql, useStaticQuery } from 'gatsby';
import Layout from "../components/layout"
import Seo from "../components/seo";
import TabComponent from "../components/tabs.js";


const MembersPage = () => {
    const data = useStaticQuery(graphql`
    query {
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
      image4: file(relativePath: { eq: "ivan.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      image5: file(relativePath: { eq: "bruno.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      image6: file(relativePath: { eq: "boris.png" }) {
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
      image9: file(relativePath: { eq: "chainsafe.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      image10: file(relativePath: { eq: "electrocoin.png" }) {
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
      image13: file(relativePath: { eq: "shardlabs.png" }) {
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
  `);

  const upravniOdbor = [
    {
      image: data.image1,
      subtitle: 'Predsjednik',
      titleperson: 'Vlaho Hrdalo',
      textperson: 'Vlaho Hrdalo je odvjetnik koji se u svom profesionalnom i znanstvenom radu fokusira na fintech, blockchain i kriptovalute.',
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
      image: data.image2,
      titleperson: 'Nikola Škorić',
      textperson: 'Nikola Škorić je osnivač i direktor Electrocoin d.o.o., u sastavu kojeg posluje vodeća hrvatska mjenjačnica kriptovaluta i platni sustav Paycek.',
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
      image: data.image3,
      titleperson: 'Luka Sučić',
      textperson: 'Poduzetnik koji voli nove i neistražene stvari. Aktivno radi na razvoju proizvoda i ekosustava te kao partner u fondu za blockchain startupe MCC.',
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
        image: data.image4,
        subtitle: 'Predsjednik',
        titleperson: 'Ivan Glavaš',
        textperson: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas.',
        socialLinks: [
          {
            name: "Email",
            link: "mailto:ivan@ubik.hr",
            icon: data.mailIcon.childImageSharp.gatsbyImageData,
          },
          {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/ivanglavas/",
            icon: data.linkedinIcon.childImageSharp.gatsbyImageData,
          },
        ],
      },
      {
        image: data.image5,
        titleperson: 'Bruno Škvorc',
        textperson: 'Bruno Škvorc je osnivač RMRK, NFT protokola na Kusama blockchain mreži.',
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
        image: data.image6,
        titleperson: 'Boris Agatić',
        textperson: 'Coder, Data Scientist, AI enthusiast, Blockchainer, UX designer',
        socialLinks: [
          {
            name: "Email",
            link: "mailto:boris@ubik.hr",
            icon: data.mailIcon.childImageSharp.gatsbyImageData,
          },
          {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/borisagatic/",
            icon: data.linkedinIcon.childImageSharp.gatsbyImageData,
          },
        ],
      },
      {
        image: data.image7,
        titleperson: 'Belma Gutlić',
        textperson: 'Belma Gutlić je suosnivačica akvizirane tvrtke NodeFactory, voditeljica Solutions odjela u ChainSafeu.',
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
        logoUrl: data.image8,
        website: 'https://www.linkedin.com/company/bitfalls/about/',
    },
    {
        name: 'Chainsafe',
        logoUrl: data.image9,
        website: 'https://chainsafe.io/',
    },
    {
        name: 'Electrocoin',
        logoUrl: data.image10,
        website: 'hhttps://electrocoin.eu/',
    },
    {
        name: 'Druga kozmicka',
        logoUrl: data.image11,
    },
    {
        name: 'HK',
        logoUrl: data.image12,
        website: 'https://www.hkod.hr/',
    },
    {
        name: 'Shardlabs',
        logoUrl: data.image13,
        website: 'https://shardlabs.io/',
    }
  ];

  return (
  
  <Layout>
    <main className="text-white overflow-hidden">
        <section className="px-5 lg:px-24 pt-20 bg-gradient-to-b from-gradient-start to-gradient-end">
        <TabComponent
          tabs={[
            { label: "Svi", key: "all" },
            { label: "Upravni Odbor", key: "upravniOdbor" },
            { label: "Temeljni Članovi", key: "temeljniClanovi" },
          ]}
          data={{
            upravniOdbor: upravniOdbor,
            temeljniClanovi: temeljniClanovi,
            all: upravniOdbor && temeljniClanovi,
          }
          }
        />

      </section>
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


export const Head = () => <Seo title="Members" />

export default MembersPage;
