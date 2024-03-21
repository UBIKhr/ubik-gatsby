import * as React from "react"
import { graphql, useStaticQuery } from 'gatsby';
import Layout from "../components/layout"
import Seo from "../components/seo";
import { StaticImage } from 'gatsby-plugin-image';
import CardList from "../components/cardlist.js";
import Accordion from "../components/accordion.js";
import Table from "../components/table.js";
import Button from "../components/button.js";
import { Link, useTranslation, Trans } from 'gatsby-plugin-react-i18next';
import ArbitrationLinks from "../components/arbitrationlinks.js";
import FeesLinks from "../components/feeslinks.js";


export const query = graphql`
  query ArbitrationPageQuery($language: String!) {
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
    image1: file(relativePath: { eq: "Dora.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    image2: file(relativePath: { eq: "Filip.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    image3: file(relativePath: { eq: "IvanK.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    image4: file(relativePath: { eq: "IvanS.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    image5: file(relativePath: { eq: "LukaP.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    image6: file(relativePath: { eq: "Vedran.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    image7: file(relativePath: { eq: "Hrdalo.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    image8: file(relativePath: { eq: "motika.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    image9: file(relativePath: { eq: "krmpotic.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    linkedinIcon: file(relativePath: { eq: "linkedin.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 24, height: 24)
      }
    }
    mailIcon: file(relativePath: { eq: "mail.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 24, height: 24)
      }
    }
    phoneIcon: file(relativePath: { eq: "phone.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 24, height: 24)
      }
    }
  }
`;


const ArbitrazaPage = ({ data }) => {
    const { t, i18n } = useTranslation();

    
    const upravniOdbor = [
      {
        image: data.image7.childImageSharp.gatsbyImageData,
        textblue: t("upravniOdbor.0.textblue"),
        titleperson: 'Vlaho Hrdalo',
        textpersona: t("upravniOdbor.0.textpersona"),
        textlanguages: t("upravniOdbor.0.textlanguages"),
        socialLinks: [
          {
            name: "Email",
            link: "mailto:vlaho@hkod.hr",
            icon: data.mailIcon.childImageSharp.gatsbyImageData,
          },
          {
            name: "LinkedIn",
            link: "https://hr.linkedin.com/in/vlaho-hrdalo",
            icon: data.linkedinIcon.childImageSharp.gatsbyImageData,
          },
          {
            name: "Phone",
            link: "href='tel:+38598757833'",
            icon: data.phoneIcon.childImageSharp.gatsbyImageData,
          },
        ],
      },
      {
        image: data.image6.childImageSharp.gatsbyImageData,
        textblue: t("upravniOdbor.1.textblue"),
        titleperson: 'Vedran Kologranić',
        textpersona: t("upravniOdbor.1.textpersona"),
        textlanguages: t("upravniOdbor.1.textlanguages"),
        socialLinks: [
          {
            name: "Email",
            link: "mailto:vedrankologranic@gmail.com",
            icon: data.mailIcon.childImageSharp.gatsbyImageData,
          },
          {
            name: "Phone",
            link: "href='tel:+385913779300'",
            icon: data.phoneIcon.childImageSharp.gatsbyImageData,
          },
        ],
      },
      {
        image: data.image9.childImageSharp.gatsbyImageData,
        textblue: t("upravniOdbor.2.textblue"),
        titleperson: 'Karla Krmpotić',
        textpersona: t("upravniOdbor.2.textpersona"),
        textlanguages: t("upravniOdbor.2.textlanguages"),
        socialLinks: [
          {
            name: "Email",
            link: "mailto:karla@hkod.hr",
            icon: data.mailIcon.childImageSharp.gatsbyImageData,
          },
          {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/karlakrmpoti%C4%87/",
            icon: data.linkedinIcon.childImageSharp.gatsbyImageData,
          },
        ],
      },
      {
        image: data.image3.childImageSharp.gatsbyImageData,
        textblue: t("upravniOdbor.3.textblue"),
        titleperson: "Ivan Krnic",
        textpersona: t("upravniOdbor.3.textpersona"),
        textlanguages: t("upravniOdbor.3.textlanguages"),
        socialLinks: [
          {
            name: "Email",
            link: "mailto:ivan@hkod.hr",
            icon: data.mailIcon.childImageSharp.gatsbyImageData,
          },
          {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/ivan-krnic-39649812/",
            icon: data.linkedinIcon.childImageSharp.gatsbyImageData,
          },
          {
            name: "Phone",
            link: "href='tel:+385911314666'",
            icon: data.phoneIcon.childImageSharp.gatsbyImageData,
          },
        ],
      },
      {
        image: data.image8.childImageSharp.gatsbyImageData,
        textblue: t("upravniOdbor.4.textblue"),
        titleperson: 'Željka Motika',
        textpersona: t("upravniOdbor.4.textpersona"),
        textlanguages: t("upravniOdbor.4.textlanguages"),
        socialLinks: [
          {
            name: "Email",
            link: "mailto:zeljka.motika@motika.co.rs",
            icon: data.mailIcon.childImageSharp.gatsbyImageData,
          },
          {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/%C5%BEeljka-motika-00921b39/?originalSubdomain=rs",
            icon: data.linkedinIcon.childImageSharp.gatsbyImageData,
          },
          {
            name: "Phone",
            link: "href='tel:+38162262852'",
            icon: data.phoneIcon.childImageSharp.gatsbyImageData,
          },
        ],
      },
      {
        image: data.image5.childImageSharp.gatsbyImageData,
        textblue: t("upravniOdbor.5.textblue"),
        titleperson: 'Luka Porobija',
        textpersona: t("upravniOdbor.5.textpersona"),
        textlanguages: t("upravniOdbor.5.textlanguages"),
        socialLinks: [
          {
            name: "Email",
            link: "mailto:luka.porobija@psod.hr",
            icon: data.mailIcon.childImageSharp.gatsbyImageData,
          },
          {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/luka-porobija/",
            icon: data.linkedinIcon.childImageSharp.gatsbyImageData,
          },
          {
            name: "Phone",
            link: "href='tel:+385911819688'",
            icon: data.phoneIcon.childImageSharp.gatsbyImageData,
          },
        ],
      },
        {
          image: data.image1.childImageSharp.gatsbyImageData,
          textblue: t("upravniOdbor.6.textblue"),
          titleperson: 'Dora Stazić',
          textpersona: t("upravniOdbor.6.textpersona"),
          textlanguages: t("upravniOdbor.6.textlanguages"),
          socialLinks: [
            {
              name: "E-mail",
              link: "mailto:dora.stazic@psod.hr",
              icon: data.mailIcon.childImageSharp.gatsbyImageData,
            },
            {
              name: "LinkedIn",
              link: "https://hr.linkedin.com/in/dora-stazic",
              icon: data.linkedinIcon.childImageSharp.gatsbyImageData,
            },
            {
              name: "Phone",
              link: "href='tel:+385911268200'",
              icon: data.phoneIcon.childImageSharp.gatsbyImageData,
            },
          ],
        },
        {
          image: data.image4.childImageSharp.gatsbyImageData,
          textblue: t("upravniOdbor.7.textblue"),
          titleperson: 'Ivan Sumić',
          textpersona: t("upravniOdbor.7.textpersona"),
          textlanguages: t("upravniOdbor.7.textlanguages"),
          socialLinks: [
            {
              name: "Email",
              link: "mailto:ivan.sumic@matulicsumic-law.hr",
              icon: data.mailIcon.childImageSharp.gatsbyImageData,
            },
            {
              name: "LinkedIn",
              link: "https://www.linkedin.com/in/ivan-sumi%C4%87-153694182/",
              icon: data.linkedinIcon.childImageSharp.gatsbyImageData,
            },
            {
              name: "Phone",
              link: "href='tel:+385914375702'",
              icon: data.phoneIcon.childImageSharp.gatsbyImageData,
            },
          ],
        },
        {
          image: data.image2.childImageSharp.gatsbyImageData,
          textblue: t("upravniOdbor.8.textblue"),
          titleperson: 'Filip Šaravanja',
          textpersona: t("upravniOdbor.8.textpersona"),
          textlanguages: t("upravniOdbor.8.textlanguages"),
          socialLinks: [
            {
              name: "Email",
              link: "mailto:filip.saravanja@ubik.hr",
              icon: data.mailIcon.childImageSharp.gatsbyImageData,
            },
            {
              name: "LinkedIn",
              link: "https://www.linkedin.com/in/filip-%C5%A1aravanja-974581159/",
              icon: data.linkedinIcon.childImageSharp.gatsbyImageData,
            },
          ],
        },   
      ];
      const tableData1 = [
        { amount: "0 - 1.000.000,00 EUR", fee: "5.000,00 EUR" },
        { amount: "1.000.000,00 - 5.000.000,00 EUR", fee: "7.500,00 EUR" },
        { amount: "5.000.000,00 - 15.000.000,00 EUR", fee: "10.000,00 EUR" },
        { amount: "15.000.000,00 - 50.000.000,00 EUR", fee: "20.000,00 EUR" },
        { amount: "> 50.000.000,00 EUR", fee: "50.000,00 EUR" },
      ];

      const tableData2 = [
        {amount: "0 - 1.000.000,00 EUR", fee: "200,00 EUR"},
        {amount: "1.000.000,00 EUR - 5.000.000,00 EUR", fee: "300,00 EUR"},
        {amount: "1.000.000,00 EUR - 5.000.000,00 EUR", fee: "300,00 EUR"},
        {amount: "5.000.000,00 - 15.000.000,00 EUR", fee: "400,00 EUR"},
        {amount: "15.000.000,00 EUR - 50.000.000,00 EUR", fee: "650,00 EUR"},
        {amount: "> 50.000.000,00 EUR", fee: "1.000,00 EUR"},

      ];

  return (
  <Layout>
    <main className="text-white overflow-hidden">
        <section className="pt-20 lg:pt-32 2xl:pt-72 w-screen relative bg-gradient-to-b from-gradient-start to-gradient-end">
        <div className="px-4 lg:px-32 font-regular pt-12 lg:pt-0 2xl:pt-6">
            <h1 className="text-left text-md2 lg:text-xl lg:text-left font-regular font-extralight mb-4">UBIKourt</h1>
            <p className="text-tiny lg:text-base1 text-left font-regular font-normal xl:w-2/3 pt-4 pb-2 ">{t("UBIKourt je tijelo za rješavanje sporova UBIK-a - hrvatske Udruge za blockchain i kriptovalute. Nastao je primarno kao arbitražna institucija primjerena rješavanju sporova vezanih uz blockchain zbog nedostatka profesionalnog i stručnog načina rješavanja sporova kao što su:")}</p>
            <ul className="text-tiny lg:text-sm text-left font-hind font-normal xl:w-1/2 pt-4 pb-4 ">
                <li className=" pb-2"><Trans i18nKey={"li1"}>Standardni sporovi nevezani za blockchain tehnologiju;</Trans></li>
                <li className=" pb-2"><Trans i18nKey={"li2"}>Sporovi vezani uz kriptoimovinu i pametne ugovore;</Trans></li>
                <li className=" pb-2"><Trans i18nKey={"li3"}>Rješavanje hitnih pitanja bilo koje vrste;</Trans></li>
                <li className=" pb-2"><Trans i18nKey={"li4"}>Pravnih mišljenja;</Trans></li>
                <li className=" pb-2"><Trans i18nKey={"li5"}>Prethodno rješenje za buduće potencijalne sporove;</Trans></li>
                <li className="pb-2"><Trans i18nKey={"li6"}>Naknadno rješenje za nastale sporove.</Trans></li>
                <li className=" pb-2"><Trans i18nKey={"li7"}>Rješavanje sporova vezanih za bilo koje nove tehnologije (AI…)</Trans></li>
            </ul>
            <ArbitrationLinks language={i18n.language} />
              
            <a href="mailto:ubikourt@ubik.hr"><Button className="w-full md:w-2/3 lg:w-1/3 2xl:w-1/3 mb-6">{t("Javite nam se")}</Button></a>
            
        </div>
        <div className="lg:absolute lg:block hidden top-4 xl:top-72 right-0 rotate-90 xl:right-20 transform translate-x-1/2 -translate-y-1/2">
        <StaticImage
          src="../images/join.png"
          className="max-w-full max-h-full"
        />
        </div>
        </section>
        <section className="pt-20 w-screen relative">
            <div className="px-4 lg:px-32 font-regular pt-12 lg:pt-0">
            <h1 className="text-left text-md lg:text-lg lg:text-left font-regular font-extralight mb-4">{t("Lista arbitara")}</h1>   
                 <CardList data={upravniOdbor} />
            </div>
            <div className="px-4 lg:px-32 font-regular pt-12 lg:pt-0">
            <h1 className="text-left text-md lg:text-lg lg:text-left font-regular font-extralight mb-4 pt-12">{t("Arbitražni odbor")}</h1>   
            <ul className="text-tiny lg:text-sm text-left font-regular font-normal lg:w-1/2 pt-4 pb-4 ">
                <li className=" pb-2">{t("Predsjednik")}: Ivan Sumić</li>
                <li className=" pb-2">{t("Dopredsjednici")}: Vlaho Hrdalo, Luka Porobija</li>
                <li className=" pb-4">{t("Ostatak Odbora")}: Karla Krmpotić, Filip Šaravanja</li>
            </ul>
            <h1 className="text-left text-md lg:text-lg lg:text-left font-regular font-extralight mb-4">{t("Tajništvo")}</h1>   
            <ul className="text-tiny lg:text-sm text-left font-regular font-normal lg:w-1/2 pt-4 pb-4 ">
                <li className=" pb-2">{t("Tajnica")}: Lucija Glavaš</li>
                <li className=" pb-4">{t("Pomoćnica tajnice")}: Lara Fritz</li>
            </ul>
            </div>
        </section>
        <section className="pt-20 w-screen relative">
            <div className="px-4 lg:px-32 font-regular pt-12 lg:pt-0">     
            <h1 className="text-left text-md2 lg:text-lg lg:text-left font-regular font-extralight mb-4">UBIKOURT FAQ</h1>
            <Accordion
                items={[
                    {
                        title: t("items.0.title"),
                        content: t("items.0.content"),
                    },
                     {
                        title: t("items.1.title"),
                        content: t("items.1.content"),
                    },
                    {
                        title: t("items.2.title"),
                        content: t("items.2.content")
                    },
                    {
                        title: t("items.3.title"),
                        content: t("items.3.content")
                    },
                     {
                        title: t("items.4.title"),
                        content: t("items.4.content")
                    },
                    {
                        title: t("items.5.title"),
                        content: t("items.5.content")
                    },
                    {
                        title: t("items.6.title"),
                        content: t("items.6.content")
                    },
                    {
                        title:t("items.7.title"),
                        content: t("items.7.content")
                    },
      ]}
    />
            <div>
            <div className="px-4 lg:px-32 font-regular pt-12 lg:pt-0">
            </div>
              <h1 className="text-left text-md lg:text-lg lg:text-left font-regular font-extralight mb-4 pt-20">{t("Administrativne pristojbe")}</h1> 
              <h1 className="text-left font-light lg:text-md text-base1 2xl:text-md2 pt-10 lg:pt-14 2xl:pt-16">{t("Naknada za podnošenje predmeta")}</h1> 
              <p className="text-tiny lg:text-base1 text-left font-hind 2xl:w-3/4 pt-4 pb-2">
                {t("Pristojba za podnošenje primjenjiva je na sve arbitraže koje vodi UBIKourt.")}
              </p>
              <p className="text-tiny lg:text-base1 text-left font-hind 2xl:w-3/4 pt-4 pb-2">
                {t("Pristojba za podnošenje u fiksnom iznosu od 2.000,00 EUR za predmete s iznosom u sporu do 100.000,00 EUR plaća se unaprijed uz Zahtjev za arbitražu, Odgovor na zahtjev i svaku protutužbu te je nepovratna.")}
              </p>
              <p className="text-tiny lg:text-base1 text-left font-hind 2xl:w-3/4 pt-4 pb-2">
               {t("Dodatna pristojba za prijavu u iznosu od 500,00 EUR za svakih započetih 100.000,00 EUR u sporu plaća se u slučajevima kada iznos u sporu premašuje 100.000,00 EUR do maksimalnog iznosa pristojbe za prijavu u iznosu od 25.000,00 EUR.")}
              </p>
              <p className="text-tiny lg:text-base1 text-left font-hind 2xl:w-3/4 pt-4 pb-2">
               {t("Pristojbe za prijavu pokrivaju sve administrativne troškove i troškove upravljanja predmetima UBIKourta, njegovog odbora i tajništva.")}
              </p>
              <h1 className="text-left font-light lg:text-md text-base1 2xl:text-md2 pt-10 lg:pt-14 2xl:pt-16">{t("Naknade arbitrara")}</h1> 
              <Table data={tableData1} headerBackgroundColor="orange1" borderColor="orange1" />
              <p className="text-tiny lg:text-base1 text-left font-hind 2xl:w-3/4 pt-4 pb-2">
                {t("Iznos za svakog arbitra u predmetu plaća se unaprijed uz Zahtjev za arbitražu, uz povećanje od 20% za predsjednika suda i u slučajevima kada o sporu odlučuje arbitar pojedinac.")}
              </p>
              <p className="text-tiny lg:text-base1 text-left font-hind 2xl:w-3/4 pt-4 pb-2">
                 {t("Gore navedene naknade obračunavaju se na temelju poštenog korištenja vremena do 20 sati sudjelovanja u postupku. Odbor UBIKourta može zahtijevati plaćanje dodatnih pristojbi u iznimnim slučajevima kada je takvo plaćanje razumno opravdano složenošću i vremenom arbitara te kada to zahtijeva Sud. U takvim slučajevima Odbor će u roku od 7 dana odlučiti o načinu plaćanja i učinku zahtjeva na predmet koji je u tijeku.")}
              </p>
              <p className="text-tiny lg:text-base1 text-left font-hind 2xl:w-3/4 pt-4 pb-2">
                {t("Gore navedene naknade primjenjuju se u slučajevima kada se stranke i arbitri ne dogovore o višoj naknadi. Ako se stranke i arbitri dogovore o višoj naknadi, iste se naknade moraju primijeniti na cijeli sud (s povećanjem od 20% za predsjednika suda).")}
              </p>
               <p className="text-tiny lg:text-base1 text-left font-hind 2xl:w-3/4 pt-4 pb-2">
                {t("U slučajevima kada sud odluči održati saslušanja uživo, arbitri imaju pravo tražiti naknadu svojih razumnih putnih troškova nakon predočenja potvrda.")}
              </p>
              <p className="text-tiny lg:text-base1 text-left font-hind 2xl:w-3/4 pt-4 pb-2">
                {t("Nacionalne poreze, ako postoje, vezane uz iznose plaćene za sudjelovanje u arbitraži snosit će arbitri.")}
              </p>
              <h1 className="text-left font-light lg:text-md text-base1 2xl:text-md2 pt-10 lg:pt-14 2xl:pt-16">{t("Naknade stručnjaka")}</h1> 
              <p className="text-tiny lg:text-base1 text-left font-hind 2xl:w-3/4 pt-4 pb-2">
              {t("U slučajevima kada Arbitražni sud imenuje vještaka u skladu s Arbitražnim pravilima, imenovani vještak će imati pravo na naknadu na temelju vremena utrošenog na rad na predmetu po satnici od:")}
              </p>
              <Table data={tableData2} headerBackgroundColor="cyan" borderColor="cyan" />
              <p className="text-tiny lg:text-base1 text-left font-hind 2xl:w-3/4 pt-4 pb-2">
                {t("Nakon imenovanja vještaka od strane Sudišta, Sudište će od stranaka zatražiti plaćanje naknade vještaku unaprijed za određeni broj sati koje Sudište smatra odgovarajućim za zadatak. Sudište će zatražiti isplatu dodatnih naknada ako vještakovo korištenje vremena razumno premašuje akontaciju.")}
              </p>
              <p className="text-tiny lg:text-base1 text-left font-hind 2xl:w-3/4 pt-4 pb-2">
                {t("Gore navedene naknade primjenjuju se u slučajevima kada se stranke i Vještak ne dogovore o višoj naknadi.")}
              </p>
              <p className="text-tiny lg:text-base1 text-left font-hind 2xl:w-3/4 pt-4 pb-2">
                {t("U slučajevima kada Sudište odluči održati saslušanja uživo, vještaci imaju pravo zatražiti naknadu svojih razumnih putnih troškova nakon predočenja potvrda.")}
              </p>
              <p className="text-tiny lg:text-base1 text-left font-hind 2xl:w-3/4 pt-4 pb-12">
                {t("Nacionalne poreze, ako ih ima, povezane s iznosima plaćenim za sudjelovanje u arbitraži snosit će vještaci.")}
              </p>
              <FeesLinks language={i18n.language} />   
            </div>
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


export const Head = () => <Seo title="Arbitraza" />

export default ArbitrazaPage;
