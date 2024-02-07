import * as React from "react"
import { graphql, useStaticQuery } from 'gatsby';
import Layout from "../components/layout"
import Seo from "../components/seo";
import { StaticImage } from 'gatsby-plugin-image';
import CardList from "../components/cardlist.js";
import Accordion from "../components/accordion.js";
import Table from "../components/table.js";
import Button from "../components/button.js";



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
          textblue: 'Partner u Odvjetničkom društvu Hrdalo & Krnic, Ovlašteni sudski tumač za engleski jezik',
          titleperson: 'Ivan Krnic',
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
          {
            image: data.image8,
            textblue: 'Osnivačica odvjetničkog društva MOTIKA&Partneri sa sjedištem u Beogradu, Srbija.',
            titleperson: 'Željka Motika',
            textperson: 'Područje stručnosti: trgovačko pravo, korporativno pravo, tehnološke transakcije, intelektualno vlasništvo, softver, licenciranje tehnologije, akvizicije, digitalna imovina i inicijalne ponude tokena (ICOs)',
            textlanguages: 'Jezici: engleski, srpski',
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
            image: data.image9,
            textblue: 'Odvjetnička vježbenica s položenim pravosudnim ispitom u Hrdalo & Krnic odvjetničkom društvu d.o.o.',
            titleperson: 'Karla Krmpotić',
            textperson: 'Područje stručnosti: kripto compliance & VASP registracija, ICT/TMT, ugovori.',
            textlanguages: 'Jezici: engleski, hrvatski',
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
            <a href="mailto:ubikourt@ubik.hr"><Button className="w-full md:w-2/3 lg:w-1/3 2xl:w-1/3 mb-6">Javite nam se</Button></a>
            <div className="flex flex-row items-center justify-start">
            <a download={`Arbitrazna pravila`} href={`/Pravila.pdf`} className={`  active:text-orange1 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-orange1
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out text-orange1 before:duration-300 mr-4`}>Arbitražna pravila</a> 
              <a download={`Arbitration rules`} href={`/Rules.pdf`} className={`text-orange1  active:text-orange1 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-orange1
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 ml-4`}>Arbitration rules</a> 
            </div>
              
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
            <div className="px-4 lg:px-32 font-regular pt-12 lg:pt-0">
            <h1 className="text-left text-md lg:text-lg lg:text-left font-regular font-extralight mb-4 pt-12">Arbitražni odbor</h1>   
            <ul className="text-tiny lg:text-sm text-left font-regular font-normal lg:w-1/2 pt-4 pb-4 ">
                <li className=" pb-2">Predsjednik: Ivan Sumić</li>
                <li className=" pb-2">Dopredsjednici: Vlaho Hrdalo, Luka Porobija</li>
                <li className=" pb-4">Ostatak Odbora: Karla Krmpotić, Filip Šaravanja</li>
            </ul>
            <h1 className="text-left text-md lg:text-lg lg:text-left font-regular font-extralight mb-4">Tajništvo</h1>   
            <ul className="text-tiny lg:text-sm text-left font-regular font-normal lg:w-1/2 pt-4 pb-4 ">
                <li className=" pb-2">Tajnica: Lucija Glavaš</li>
                <li className=" pb-4">Pomoćnica tajnice: Lara Fritz</li>
            </ul>
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
              <h1 className="text-left text-md lg:text-lg lg:text-left font-regular font-extralight mb-4 pt-20">Administrativne pristojbe</h1> 
              <h1 className="text-left font-light lg:text-md text-base1 2xl:text-md2 pt-10 lg:pt-14 2xl:pt-16">Naknada za podnošenje predmeta</h1> 
              <p className="text-tiny lg:text-base1 text-left font-hind 2xl:w-3/4 pt-4 pb-2">
                Pristojba za podnošenje primjenjiva je na sve arbitraže koje vodi UBIKourt.
              </p>
              <p className="text-tiny lg:text-base1 text-left font-hind 2xl:w-3/4 pt-4 pb-2">
                Pristojba za podnošenje u fiksnom iznosu od 2.000,00 EUR za predmete s iznosom u sporu do 100.000,00 EUR plaća se unaprijed uz Zahtjev za arbitražu, Odgovor na zahtjev i svaku protutužbu te je nepovratna.
              </p>
              <p className="text-tiny lg:text-base1 text-left font-hind 2xl:w-3/4 pt-4 pb-2">
               Dodatna pristojba za prijavu u iznosu od 500,00 EUR za svakih započetih 100.000,00 EUR u sporu plaća se u slučajevima kada iznos u sporu premašuje 100.000,00 EUR do maksimalnog iznosa pristojbe za prijavu u iznosu od 25.000,00 EUR.
              </p>
              <p className="text-tiny lg:text-base1 text-left font-hind 2xl:w-3/4 pt-4 pb-2">
               Pristojbe za prijavu pokrivaju sve administrativne troškove i troškove upravljanja predmetima UBIKourta, njegovog odbora i tajništva.
              </p>
              <h1 className="text-left font-light lg:text-md text-base1 2xl:text-md2 pt-10 lg:pt-14 2xl:pt-16">Naknade arbitara</h1> 
              <Table data={tableData1} headerBackgroundColor="orange1" borderColor="orange1" />
              <p className="text-tiny lg:text-base1 text-left font-hind 2xl:w-3/4 pt-4 pb-2">
                Iznos za svakog arbitra u predmetu plaća se unaprijed uz Zahtjev za arbitražu, uz povećanje od 20% za predsjednika suda i u slučajevima kada o sporu odlučuje arbitar pojedinac.
              </p>
              <p className="text-tiny lg:text-base1 text-left font-hind 2xl:w-3/4 pt-4 pb-2">
                 Gore navedene naknade obračunavaju se na temelju poštenog korištenja vremena do 20 sati sudjelovanja u postupku. Odbor UBIKourta može zahtijevati plaćanje dodatnih pristojbi u iznimnim slučajevima kada je takvo plaćanje razumno opravdano složenošću i vremenom arbitara te kada to zahtijeva Sud. U takvim slučajevima Odbor će u roku od 7 dana odlučiti o načinu plaćanja i učinku zahtjeva na predmet koji je u tijeku.
              </p>
              <p className="text-tiny lg:text-base1 text-left font-hind 2xl:w-3/4 pt-4 pb-2">
                Gore navedene naknade primjenjuju se u slučajevima kada se stranke i arbitri ne dogovore o višoj naknadi. Ako se stranke i arbitri dogovore o višoj naknadi, iste se naknade moraju primijeniti na cijeli sud (s povećanjem od 20% za predsjednika suda).
              </p>
               <p className="text-tiny lg:text-base1 text-left font-hind 2xl:w-3/4 pt-4 pb-2">
                U slučajevima kada sud odluči o održavanju saslušanja osobno, arbitri su opravdani u zahtjevu za nadoknadu svojih razumnih putnih troškova uz predočenje računa.
              </p>
              <p className="text-tiny lg:text-base1 text-left font-hind 2xl:w-3/4 pt-4 pb-2">
                Nacionalni porezi, ako postoje, vezani uz iznose plaćene za sudjelovanje u arbitraži, snosit će arbitri.
              </p>
              <h1 className="text-left font-light lg:text-md text-base1 2xl:text-md2 pt-10 lg:pt-14 2xl:pt-16">Naknade stručnjaka</h1> 
              <p className="text-tiny lg:text-base1 text-left font-hind 2xl:w-3/4 pt-4 pb-2">
              U slučajevima kada Arbitražni sud imenuje stručnjaka sukladno Pravilima o arbitraži, imenovani stručnjak ima pravo na naknadu temeljenu na korištenom vremenu rada na predmetu po satnici:
              </p>
              <Table data={tableData2} headerBackgroundColor="cyan" borderColor="cyan" />
              <p className="text-tiny lg:text-base1 text-left font-hind 2xl:w-3/4 pt-4 pb-2">
                Nakon imenovanja stručnjaka od strane suda, sud će zatražiti unaprijednu uplatu naknada stručnjaka od stranaka za broj sati koji sud smatra prikladnim za zadatak. Sud će zatražiti plaćanje dodatnih naknada ako se korištenje vremena stručnjaka razumno premaši unaprijednu uplatu.
              </p>
              <p className="text-tiny lg:text-base1 text-left font-hind 2xl:w-3/4 pt-4 pb-2">
                Gore navedene naknade primjenjuju se u slučajevima kada se stranke i stručnjaci ne dogovore o višoj naknadi.
              </p>
              <p className="text-tiny lg:text-base1 text-left font-hind 2xl:w-3/4 pt-4 pb-2">
                U slučajevima kada sud odluči o održavanju saslušanja osobno, stručnjaci su opravdani u zahtjevu za nadoknadu svojih razumnih putnih troškova uz predočenje računa.
              </p>
              <p className="text-tiny lg:text-base1 text-left font-hind 2xl:w-3/4 pt-4 pb-12">
                Nacionalni porezi, ako postoje, vezani uz iznose plaćene za sudjelovanje u arbitraži, snosit će stručnjaci.
              </p>
              <a download={`Arbitrazne naknade`} href={`/Naknade.pdf`} className={`  relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-orange1
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out text-white before:duration-300 mr-4`}>Arbitražne naknade</a> 
              <a download={`Arbitration fees`} href={`/Fees.pdf`} className={`text-white  relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-orange1
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 ml-4`}>Arbitration fees</a>   
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
