import * as React from "react";
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'react-i18next';
import Layout from "../components/layout"
import Seo from "../components/seo";
import PricesCard from "../components/pricescard.js";
import TypeformLinks from "../components/typeformlink.js";

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
    backgroundImage: file(relativePath: { eq: "heroleft.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;

const JoinUsPage = ({ data }) => {
    const { t, i18n } = useTranslation();

    const pricesData = [
        {
            price: "20 EUR",
            type: t("STUDENT MEMBERSHIP"),
            peryear: t("peryear"),
            list: [
                t("An opportunity to learn and meet experts in the ecosystem"),
                t("50% discount on UBIK commercial projects and 25% on UBIK conferences (eg Money Motion, BlockSplit)"),
                t("An advantage when registering for all meetups, educational workshops and similar activities"),
                t("'Members only workshops' - for all levels of knowledge, from beginners to experienced developers"),
                t("Invitation to UBIK gatherings for members - pub quizzes and parties"),
                t("Access to the 'Members only' Telegram group"),
                t("UBIK promotional t-shirt"),
                t("Discounts on all UBIK partner conferences and events"),
                t("25% discount on the House of Blockchain coworking space"),
                t("Possibility of consultation by email")
            ],
            changeColor: 'orange1',
        },
        {
            price: "65 EUR",
            type: t("REGULAR MEMBERSHIP"),
            peryear: t("peryear"),
            list: [
                t("An opportunity to learn and meet the biggest experts in the ecosystem"),
                t("50% discount on UBIK commercial projects and 25% on UBIK conferences (e.g., Money Motion, BlockSplit)"),
                t("An advantage when registering for all meetups, educational workshops, and similar activities"),
                t("\"Members only\" workshops - for all levels of knowledge, from beginners to experienced developers"),
                t("Invitation to UBIK gatherings for members - pub quizzes and parties"),
                t("Access to the \"Members only\" Telegram group"),
                t("UBIK promotional t-shirt"),
                t("Discounts on all UBIK partner conferences and events"),
                t("25% discount on the House of Blockchain coworking space"),
                t("Possibility of consultation by email"),
            ],
            changeColor: 'pink2',
        },
        {
            price: "EUR 175",
            type: t("CORPORATE MEMBERSHIP"),
            peryear: t("peryear"),
            list: [
                t("Benefits of regular members for up to 3 employees"),
                t("The right to marketing activities (interviews or articles, use of the UBIK member badge)"),
                t("Possibility of entry to organized business networking events for members"),
                t("Networking and establishment of new business partnerships"),
                t("1 free online consultation with a member of the UBIK Management board"),
                t("Possibility to participate in UBIK events (through a lecturer or some other form of engagement)"),
                t("Favorable fees for resolving disputes through UBIKourt"),
            ],
            changeColor: 'pink1',
        },
        {
            price: "EUR 330",
            type: t("CORE MEMBERSHIP"),
            peryear: t("peryear"),
            list: [
                t("The status of the selected core member of the Association"),
                t("Regular membership benefits for up to 10 employees"),
                t("Logo on UBIK website"),
                t("Right to marketing activities (interviews or articles, use of UBIK member badge)"),
                t("Possibility of entry to organized business networking events for members"),
                t("Networking and establishment of new business partnerships"),
                t("A place in the Advisory Board and active involvement in the development of UBIK and the ecosystem in the region"),
                t("Involvement in UBIK events (through a lecturer or some other form of engagement)"),
                t("Favorable fees for resolving disputes through UBIKourt"),
            ],
            changeColor: 'cyan',
        },
    ];
    

    return (
        <main className="text-white overflow-hidden">
            <Layout>
                <section className="pt-20 lg:pt-44 2xl:pt-52 w-screen relative bg-gradient-to-b from-gradient-start to-gradient-end">
                    <div className="px-4 lg:px-32 font-regular pt-12 lg:pt-0 2xl:pt-6">
                        <h1 className="text-left text-md2 lg:text-xl lg:text-left font-regular font-extralight mb-4">{t("Postani član")}</h1>
                        <p className="text-tiny lg:text-base1 text-left font-regular font-normal lg:w-3/4 pt-4 pb-2 ">{t("UBIK nudi jedinstvenu kombinaciju mogućnosti edukacije, sudjelovanja u zajednici i networkinga unutar lokalnog blockchain i kripto svijeta.")}</p>
                        <p className="text-tiny lg:text-base1 text-left font-regular font-normal lg:w-3/4 pt-4 pb-2 ">{t("Kao član, imat ćete pristup informativnim radionicama, susretima i ekskluzivnim grupama za lakšu navigaciju kroz malen, ali složen blockchain i kripto ekosustav. UBIK osigurava ugodno okruženje za osobe iz različitih društvenih sfera. Svaki aktivni član UBIK-a ima pravo na besplatno savjetovanje vezano uz sva pitanja oko blockchaina i kriptovaluta u razumnim okvirima.")}</p>
                        <p className="text-tiny lg:text-base1 text-left font-regular font-normal lg:w-3/4 pt-4 pb-2 ">{t("Nadalje, UBIK kontinuirano radi na promociji blockchain tehnologije i kriptovaluta te aktivno sudjeluje u educiranju i dijalogu s regulatorom, korporacijama, bankama i sličnim sudionicima ekosustava. Uz ostale pogodnosti, ostvarujete i znatne popuste na sve UBIK komercijalne projekte.")}</p>
                    </div>
                </section>
                <section className="pt-12 px-4 lg:px-32">
                    <div className="flex flex-col justify-center items-center">
                        <div className="flex flex-col lg:flex-row justify-start items-start lg:space-x-8 space-y-16 lg:space-y-0 mt-8 py-12">
                            {pricesData.map((card, index) => (
                                <PricesCard key={index} {...card} />
                            ))}
                        </div>
                        <TypeformLinks language={i18n.language} />
                    </div>
                </section>
            </Layout>
        </main>
    );
};

export const Head = () => <Seo title="Postani član" />

export default JoinUsPage;
