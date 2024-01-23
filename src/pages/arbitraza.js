import * as React from "react"
import { graphql, useStaticQuery } from 'gatsby';
import Layout from "../components/layout"
import Seo from "../components/seo";
import { StaticImage } from 'gatsby-plugin-image';
import CardList from "../components/cardlist.js";
import Accordion from "../components/accordion.js";
import Table from "../components/table.js";



const ArbitrazaPage = ({}) => {

    const data = useStaticQuery(graphql`
    query {
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
  `);
    const upravniOdbor = [
        {
          image: data.image1,
          textblue: 'Odvjetnica u Porobija & Špoljarić d.o.o., ovlašteni medijator',
          titleperson: 'Dora Stazić',
          textperson: 'Područje stručnosti: ICT/TMT, ugovori, korporativno poslovanje',
          textlanguages: 'Jezici: engleski, hrvatski, španjolski',
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
          image: data.image2,
          textblue: 'Voditelj digitalne imovine u Aircash-u, suosnivač u Pazar-u, ranije Fintech Koordinator u Hrvatskoj agenciji za nadzor financijskih usluga (Hanfa)',
          titleperson: 'Filip Šaravanja',
          textperson: 'Područje stručnosti: Kriptoimovina, Tržište kapitala',
          textlanguages: 'Jezici: engleski, hrvatski',
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
        {
          image: data.image3,
          textblue: 'Partner u Odvjetničkom društvu Hrdalo & Krnić, Ovlašteni sudski tumač za engleski jezik',
          titleperson: 'Ivan Krnić',
          textperson: 'Područje stručnosti: fintech, blockchain, kriptovalute, pravo društava, trgovačko pravo, diplomacija, bankarstvo, financije, međunarodno pravo i izvoz',
          textlanguages: 'Jezici: engleski, hrvatski',
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
            image: data.image4,
            textblue: 'Managing partner u Odvjetničkom društvu Matulić Sumić & partneri d.o.o. sa sjedištem u Splitu, Hrvatska',
            titleperson: 'Ivan Sumić',
            textperson: 'Područje stručnosti: Pravo – blockchain, ICT, komercijalno, pomorsko, brodogradnja, opći sporovi i arbitraža',
            textlanguages: 'Jezici: engleski, hrvatski',
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
            image: data.image5,
            textblue: 'Odvjetnik u Porobija & Špoljarić d.o.o., ovlašteni medijator',
            titleperson: 'Luka Porobija',
            textperson: 'Područje stručnosti: ICT/TMT, zaštita podataka, ugovori.',
            textlanguages: 'Jezici: engleski, hrvatski',
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
            image: data.image6,
            textblue: ' Odvjetnik sa sjedištem u Splitu, Hrvatska',
            titleperson: 'Vedran Kologranić',
            textperson: 'Područje stručnosti: Pravo blockchain, ICT/TMT, korporativno, komercijalno, stečajno, autorska prava, opće parnice i arbitraža',
            textlanguages: 'Jezici: engleski, hrvatski',
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
            image: data.image7,
            textblue: ' Partner u Odvjetničkom društvu Hrdalo & Krnic d.o.o., voditelj Legal Tech skupine Hrvatske odvjetničke komore, predsjednik UBIK-a, nastavnik na Sveučilištu u Zagrebu, ovlašteni sudski tumač za engleski jezik',
            titleperson: 'Vlaho Hrdalo',
            textperson: 'Područje stručnosti: fintech, blockchain, kriptovalute, pravo društava, trgovačko pravo, diplomacija, bankarstvo, financije, međunarodno pravo i izvoz.',
            textlanguages: 'Jezici: engleski, hrvatski',
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
      ];
      const tableData1 = [
        { amount: "0 to 1.000.000,00 EUR", fee: "5.000,00 EUR" },
        { amount: "1.000.000,00 to 5.000.000,00 EUR", fee: "7.500,00 EUR" },
        { amount: "5.000.000,00 to 15.000.000,00 EUR", fee: "10.000,00 EUR" },
        { amount: "15.000.000,00 to 50.000.000,00 EUR", fee: "20.000,00 EUR" },
        { amount: "Above 50.000.000,00 EUR", fee: "50.000,00 EUR" },
      ];

      const tableData2 = [
        {amount: "0 to 1.000.000,00 EUR", fee: "200,00 EUR"},
        {amount: "1.000.000,00 EUR to 5.000.000,00 EUR", fee: "300,00 EUR"},
        {amount: "1.000.000,00 EUR to 5.000.000,00 EUR", fee: "300,00 EUR"},
        {amount: "5.000.000,00 to 15.000.000,00 EUR", fee: "400,00 EUR"},
        {amount: "15.000.000,00 EUR to 50.000.000,00 EUR", fee: "650,00 EUR"},
        {amount: "Above 50.000.000,00 EUR", fee: "1.000,00 EUR"},

      ];

  return (
  <Layout>
    <main className="text-white overflow-hidden">
        <section className="pt-20 lg:pt-32 2xl:pt-72 w-screen relative bg-gradient-to-b from-gradient-start to-gradient-end">
        <div className="px-4 lg:px-32 font-regular pt-12 lg:pt-0 2xl:pt-6">
            <h1 className="text-left text-md2 lg:text-xl lg:text-left font-regular font-extralight mb-4">UBIKourt</h1>
            <p className="text-tiny lg:text-base1 text-left font-regular font-normal lg:w-2/3 pt-4 pb-2 ">UBIKourt je tijelo za rješavanje sporova UBIK-a - hrvatske Udruge za blockchain i kriptovalute. Nastao je primarno kao arbitražna institucija primjerena rješavanju sporova vezanih uz blockchain zbog nedostatka profesionalnog i stručnog načina rješavanja sporova kao što su:</p>
            <ul className="text-tiny lg:text-sm text-left font-hind font-normal lg:w-1/2 pt-4 pb-4 ">
                <li className=" pb-2">Standardni sporovi nevezani za blockchain tehnologiju;</li>
                <li className=" pb-2">Sporovi vezani uz kriptoimovinu i pametne ugovore;</li>
                <li className=" pb-2">Rješavanje hitnih pitanja bilo koje vrste;</li>
                <li className=" pb-2">Pravnih mišljenja;</li>
                <li className=" pb-2">Prethodno rješenje za buduće potencijalne sporove;</li>
                <li className="pb-2">Naknadno rješenje za nastale sporove.</li>
                <li className=" pb-4">Rješavanje sporova vezanih za bilo koje nove tehnologije (AI…)</li>
            </ul>
            <a download={`Arbitrazna pravila`} href={`/Pravila.pdf`} className={`  active:text-orange1 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-orange1
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out text-orange1 before:duration-300 mr-4`}>Arbitražna pravila</a> 
              <a download={`Arbitration rules`} href={`/Rules.pdf`} className={`text-orange1  active:text-orange1 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-orange1
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 ml-4`}>Arbitration rules</a>   
        </div>
        <div className="lg:absolute lg:block hidden top-4 lg:top-72 right-0 rotate-90 lg:right-20 transform translate-x-1/2 -translate-y-1/2">
        <StaticImage
          src="../images/join.png"
          className="max-w-full max-h-full"
        />
        </div>
        </section>
        <section className="pt-20 w-screen relative">
            <div className="px-4 lg:px-32 font-regular pt-12 lg:pt-0">
            <h1 className="text-left text-md lg:text-lg lg:text-left font-regular font-extralight mb-4">Lista arbitara</h1>   
                 <CardList data={upravniOdbor} />
            </div>
        </section>
        <section className="pt-20 w-screen relative">
            <div className="px-4 lg:px-32 font-regular pt-12 lg:pt-0">     
            <h1 className="text-left text-md2 lg:text-lg lg:text-left font-regular font-extralight mb-4">UBIKOURT FAQ</h1>
            <Accordion
                items={[
                    {
                        title: "Koja je cijena pristojbi za rješavanje sporova putem UBIKourta?",
                        content: "Kako bi se dokazala korisnost UBIKourta, prvih par slučajeva bit će odrađeno po pro bono principu. Za daljnje slučajeve biti će obračunata naknada za usluge UBIKourta, između ostalog i radi zaštite od spamova, kako bismo spriječili zlouporabu samog procesa. Temeljni i korporativni članovi UBIK-a ostvaruju pravo na povoljniju cijenu pristrojbe."
                    },
                     {
                        title: "Kako UBIKourt funkcionira?",
                        content: "Proces apliciranja jednostavno se obavlja putem web stranice ubik.hr. Na početku procesa potrebno je sklopiti ugovor o arbitraži kojim stranke podvrgavaju spor arbitraži u kojem obje stranke daju suglasnost o dobrovoljnom ulasku u spor is kojom istodobno prihvaćaju obvezatnost konačne odluke arbitražnog suda, bez obzira na prirodu dane odluke. UBIKourt održava jednu ili više listu arbitara koji su stručnjaci u području blockchaina i DLT-a. Osim toga, osigurava i ustrojstvo sudova te nadzire učinkovito vođenje postupaka."
                    },
                    {
                        title: "Odvija li se uživo?",
                        content: "Sva dokumentacija podnosi se elektroničkim putem i saslušanja svjedoka odvijaju se online, stoga nije potrebna fiziča prisutnost na određenom mjestu."
                    },
                    {
                        title: "Koliko obično traje proces arbitraže?",
                        content: "Čl. 30 UBIKourt arbitražnih pravila - vremensko ograničenje: Rok unutar kojeg arbitražni sud mora donijeti konačnu odluku je šest mjeseci. Propisano je kada rok počinje teći, te da ga Odbor može produžiti na vlastitu inicijativu ili na zahtjev arb. suda ako smatra da je to potrebno. Ipak, cilj je da proces traje što kraće."
                    },
                     {
                        title: "Je li odluka arbitražnog tijela obvezujuća?",
                        content: "Na početku arbitražnog spora potpisuje se ugovor u kojem obje stranke izjavljuju da se slažu s konačnom odlukom arbitražnog suda, bez obzira na prirodu dane odluke."
                    },
                    {
                        title: "Tko može podnijeti slučaj tijelu za arbitražu?",
                        content: "Bilo tko, pod uvjetom da je predmet arbitrabilan, tj. podoban za rješavanje arbitražom. Slučaj se dobrovoljno može podnijeti putem ubik.hr"
                    },
                    {
                        title: "Što razlikuje UBIKourt od tradicionalnih pravnih procesa?",
                        content: "UBIKourt nudi profesionalan, povjerljiv i stručan način rješavanja sporova unutar blockchain sektora. Stručnost osigurava angažiranjem eksperata u području blockchaina i DLT-a. Također, on pruža sve potrebne resurse i infrastrukturu za arbitražu."
                    },
                    {
                        title: "Tko sve može biti arbitar?",
                        content: "Arbitrom može postati osoba koja podnese valjan zahtjev i pokaže sposobnost za obavljanje tog zadatka, dok će konačnu procjenu o kompetentnosti osobe koja je podnijela zahtjev za vođenje sporova s visokom tehnološkom komponentom donijeti Upravni odbor UBIKourta arbitraže na sjednici."
                    },
      ]}
    />
            <div>
            <div className="px-4 lg:px-32 font-regular pt-12 lg:pt-0">
            </div>
              <h1 className="text-left text-md lg:text-lg lg:text-left font-regular font-extralight mb-4 pt-20">Administrative Fees</h1> 
              <h1 className="text-left font-light lg:text-md text-base1 2xl:text-md2 pt-10 lg:pt-14 2xl:pt-16">Case Filing Fee</h1> 
              <p className="text-tiny lg:text-base1 text-left font-hind 2xl:w-3/4 pt-4 pb-2">
                A filing fee is applicable to all arbitrations administered by the UBIKourt.
              </p>
              <p className="text-tiny lg:text-base1 text-left font-hind 2xl:w-3/4 pt-4 pb-2">
                A filing fee in a fixed amount of 2.000,00 EUR for cases with an amount in dispute up to 100.000,00 EUR is payable in advance with the Request for Arbitration, Reply to the Request and each Counterclaim and is non-refundable.
              </p>
              <p className="text-tiny lg:text-base1 text-left font-hind 2xl:w-3/4 pt-4 pb-2">
               Additional filing fee in the amount of 500,00 EUR for each started 100.000,00 EUR in dispute is payable in cases where the amount in dispute exceeds 100.000,00 EUR up to a maximum filing fee in the amount of 25.000,00 EUR.
              </p>
              <p className="text-tiny lg:text-base1 text-left font-hind 2xl:w-3/4 pt-4 pb-2">
               Filing fees cover all administrative and case management costs of UBIKourt, its Board and Secretariat.
              </p>
              <h1 className="text-left font-light lg:text-md text-base1 2xl:text-md2 pt-10 lg:pt-14 2xl:pt-16">Arbitrators’ Fees</h1> 
              <Table data={tableData1} headerBackgroundColor="orange1" borderColor="orange1" />
              <p className="text-tiny lg:text-base1 text-left font-hind 2xl:w-3/4 pt-4 pb-2">
                The amount for each Arbitrator in the case is payable in advance with the Request for Arbitration, with an increase of 20% for the President of the Tribunal and in cases where the dispute is decided by a sole Arbitrator.
              </p>
              <p className="text-tiny lg:text-base1 text-left font-hind 2xl:w-3/4 pt-4 pb-2">
                 The above fees are calculated on a fair time use basis of up to 20 hours of participation in the procedure. UBIKourt’s Board may require payment of additional fees in exceptional cases when such payment is reasonably justified by the complexity and the Arbitrators’ time and when this is requested by the Tribunal. In such cases the Board will decide within 7 days on the mode of payment, and the effect of the request on the pending case.
              </p>
              <p className="text-tiny lg:text-base1 text-left font-hind 2xl:w-3/4 pt-4 pb-2">
                The above fees apply in cases where the parties and the Arbitrators do not agree on a higher fee. If the parties and the Arbitrators agree on a higher fee, the same fees have to apply to the entire Tribunal (with the 20% increase for the President of the Tribunal).
              </p>
               <p className="text-tiny lg:text-base1 text-left font-hind 2xl:w-3/4 pt-4 pb-2">
                In cases where the tribunal decides to hold hearings in person, Arbitrators are justified in requesting reimbursement of their reasonable travel costs upon presenting the receipts.
              </p>
              <p className="text-tiny lg:text-base1 text-left font-hind 2xl:w-3/4 pt-4 pb-2">
                The national taxes, if any, related to the amounts paid for participating in the arbitration will be borne by the arbitrators.
              </p>
              <h1 className="text-left font-light lg:text-md text-base1 2xl:text-md2 pt-10 lg:pt-14 2xl:pt-16">Experts’ Fees</h1> 
              <p className="text-tiny lg:text-base1 text-left font-hind 2xl:w-3/4 pt-4 pb-2">
              In cases where the Arbitral Tribunal appoints an Expert in accordance with the Arbitration Rules, the appointed Expert will be entitled to compensation based on time used on working on the case at the hourly rate of:
              </p>
              <Table data={tableData2} headerBackgroundColor="cyan" borderColor="cyan" />
              <p className="text-tiny lg:text-base1 text-left font-hind 2xl:w-3/4 pt-4 pb-2">
                Upon appointment of an expert by the Tribunal, the Tribunal will request advance payment of the Expert’s fees from the Parties for a number of hours the Tribunal finds appropriate for the task. The Tribunal will request payment of additional fees if the Expert’s time use reasonably exceeds the advance payment.
              </p>
              <p className="text-tiny lg:text-base1 text-left font-hind 2xl:w-3/4 pt-4 pb-2">
                The above fees apply in case where the parties and the Expert do not agree on a higher fee.
              </p>
              <p className="text-tiny lg:text-base1 text-left font-hind 2xl:w-3/4 pt-4 pb-2">
                In cases where the Tribunal decides to hold hearings in person, Experts are justified in requesting reimbursement of their reasonable travel costs upon presenting the receipts.
              </p>
              <p className="text-tiny lg:text-base1 text-left font-hind 2xl:w-3/4 pt-4 pb-2">
                The national taxes, if any, related to the amounts paid for participating in the arbitration will be borne by the Experts.
              </p>
            </div>
            </div>
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


export const Head = () => <Seo title="Arbitraza" />

export default ArbitrazaPage;
