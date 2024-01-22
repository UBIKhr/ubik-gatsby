import * as React from "react"
import { graphql, useStaticQuery } from 'gatsby';
import Layout from "../components/layout"
import Seo from "../components/seo";
import PricesCard from "../components/pricescard.js";


const JoinUsPage = () => {
    const pricesData = [
        {
            price: "20 EUR",
            type: "STUDENT MEMBERSHIP",
            list: [
                "An opportunity to learn and meet experts in the ecosystem",
                "50% discount on UBIK commercial projects and 25% on UBIK conferences (eg Money Motion, BlockSplit)",
                "An advantage when registering for all meetups, educational workshops and similar activities",
                "'Members only workshops' - for all levels of knowledge, from beginners to experienced developers",
                "Invitation to UBIK gatherings for members - pub quizzes and parties",
                "Access to the 'Members only' Telegram group",
                "UBIK promotional t-shirt",
                "Discounts on all UBIK partner conferences and events",
                "25% discount on the House of Blockchain coworking space",
                "Possibility of consultation by email"
            ],
            changeColor: 'orange1',
        },
        {
            price: "65 EUR",
            type: "REGULAR MEMBERSHIP",
            list: [
                "An opportunity to learn and meet the biggest experts in the ecosystem",
                "50% discount on UBIK commercial projects and 25% on UBIK conferences (e.g., Money Motion, BlockSplit)",
                "An advantage when registering for all meetups, educational workshops, and similar activities",
                "\"Members only\" workshops - for all levels of knowledge, from beginners to experienced developers",
                "Invitation to UBIK gatherings for members - pub quizzes and parties",
                "Access to the \"Members only\" Telegram group",
                "UBIK promotional t-shirt",
                "Discounts on all UBIK partner conferences and events",
                "25% discount on the House of Blockchain coworking space",
                "Possibility of consultation by email",
              ],
              changeColor: 'pink2',
        },
        {
            price: "EUR 330",
            type: "CORE MEMBERSHIP",
            list: [
                "The status of the selected core member of the Association",
                "Regular membership benefits for up to 10 employees",
                "Logo on UBIK website",
                "Right to marketing activities (interviews or articles, use of UBIK member badge)",
                "Possibility of entry to organized business networking events for members",
                "Networking and establishment of new business partnerships",
                "A place in the Advisory Board and active involvement in the development of UBIK and the ecosystem in the region",
                "Involvement in UBIK events (through a lecturer or some other form of engagement)",
                "Favorable fees for resolving disputes through UBIKourt",
              ],
              changeColor: 'cyan',
        },
        {
            price: "EUR 175",
            type: "CORPORATE MEMBERSHIP",
            list: [
                "Benefits of regular members for up to 3 employees",
                "The right to marketing activities (interviews or articles, use of the UBIK member badge)",
                "Possibility of entry to organized business networking events for members",
                "Networking and establishment of new business partnerships",
                "1 free online consultation with a member of the UBIK Management board",
                "Possibility to participate in UBIK events (through a lecturer or some other form of engagement)",
                "Favorable fees for resolving disputes through UBIKourt",
              ],
              changeColor: 'pink1',
        }
    ];
    return (
        <main className="text-white">
            <Layout>
            <section className="pt-20 lg:pt-60 2xl:pt-72 w-screen relative bg-gradient-to-b from-gradient-start to-gradient-end">
                <div className="px-4 lg:px-32 font-regular pt-12 lg:pt-0 2xl:pt-6">
                    <h1 className="text-left text-md2 lg:text-xl lg:text-left font-regular font-extralight mb-4">Postani član</h1>
                    <p className="text-tiny lg:text-base1 text-left font-regular font-normal lg:w-2/3 pt-4 pb-2 ">Odaberite svoje članstvo ako želite sudjelovati u našim aktivnostima, podržati rad te dati svoj doprinos u razvoju i rastu blockchain i crypto scene u Hrvatskoj.</p>
                </div>
            </section>
            <section className="pt-12 px-4 lg:px-32">
            <div className="flex flex-col lg:flex-row justify-start items-start lg:space-x-8 space-y-16 lg:space-y-0 mt-8 py-12">
                {pricesData.map((card, index) => (
                <PricesCard key={index} {...card} />
      ))}
    </div>
            </section>
            </Layout>
        </main>
    );
};

export const Head = () => <Seo title="Postani clan" />

export default JoinUsPage;