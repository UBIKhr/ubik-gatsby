import * as React from 'react';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import logo from '../images/logo.png';
import footerimg from '../images/footer.png';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';


  
const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      locales: allLocale(filter: { ns: { in: ["common"] } }) {
        edges {
          node {
            ns
            data
            language
          }
        }
      }
      linkedinIcon: file(relativePath: { eq: "linkedin.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 32, height: 32)
        }
      }
      twitterIcon: file(relativePath: { eq: "twitter.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 32, height: 32)
        }
      }
      instagramIcon: file(relativePath: { eq: "instagram.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 32, height: 32)
        }
      }
      facebookIcon: file(relativePath: { eq: "facebook.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 32, height: 32)
        }
      }
      youtubeIcon: file(relativePath: { eq: "youtube.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 32, height: 32)
        }
      }
    }
  `);


  const links = [
    
    {
      element: <Link to="/"><Trans i18nKey={"homepage"}>Naslovnica</Trans></Link>
    },
    {
      element: <a href="https://blog.ubik.hr"><Trans i18nKey={"blog"}>Blog</Trans></a>
    },
    {
      element: <Link to="/arbitraza"><Trans i18nKey={"arbitration"}>arbitraza</Trans></Link>
    },
    {
      element: <Link to="/members"><Trans i18nKey={"members"}>members</Trans></Link>
    },
    {
      element: <Link to="/contact"><Trans i18nKey={"contact"}>contact</Trans></Link>
    },
  ];


  const socialLinks = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/company/ubik-udruga-za-blockchain-i-kriptovalute/",
      icon: data.linkedinIcon.childImageSharp.gatsbyImageData,
    },
    {
      name: "Twitter",
      link: "https://x.com/ubikhr",
      icon: data.twitterIcon.childImageSharp.gatsbyImageData,
    },
    {
      name: "Instagram",
      link: "https://instagram.com/udruga_ubik",
      icon: data.instagramIcon.childImageSharp.gatsbyImageData,
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/UBIK.hr",
      icon: data.facebookIcon.childImageSharp.gatsbyImageData,
    },
    {
      name: "Youtube",
      link: "https://www.youtube.com/channel/UCkGBfraJol0oLQEYmkxb_ug",
      icon: data.youtubeIcon.childImageSharp.gatsbyImageData,
    },
  ];

   return (
    <main className='w-full relative bg-gradient-end font-regular text-white px-5 py-8 lg:px-24  xl:px-32 lg:py-10'>
      <Link to="/" >
        <img alt="UBIK logo" width={168} style={{ margin: 0, }} src={logo} className='pt-72' />
      </Link>
      <div className='flex flex-col md:flex-row justify-start items-start pt-6'>
        <ul className='flex flex-col justify-between items-start pt-5 text-left opacity-40 font-hind lg:pb-72'>
            <li className='text-opacity-40 pb-4'>Udruga za blockchain i kriptovalute - UBIK</li>
            <li className='text-opacity-40 pb-4'>Slavonska avenija 6, 10000 Zagreb, Hrvatska</li>
            <li className='text-opacity-40 pb-4'>Email: <a href='mailto:info@ubik.hr'>info@ubik.hr</a></li>
            <li className='text-opacity-40 pb-4'>OIB: 49493768738</li>
            <li className='text-opacity-40 pb-4'><Trans i18nKey={"regbr"}>Registarski broj</Trans>: 21012855</li>
            <li className='text-opacity-40 pb-4'><Trans i18nKey={"racun"}>Transakcijski račun</Trans>: HR0324020061100858697</li>
        </ul>
        <ul className="flex flex-col justify-between items-start md:pb-72 md:pl-14 pt-10 md:pt-0  lg:pl-40 z-10">
          {links.map((link) => (
            <li
              key={link.url}
              className={`text-white uppercase active:text-orange2 pt-5 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-orange2
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300`}
            >
              {link.element}
            </li>
          ))}
        </ul>
        <div className='absolute top-0 right-0 bg-gradient-end hidden md:block'>
            <img src={footerimg}/>
        </div>
      </div> 
      <div className='flex flex-row justify-center items-center space-x-4 pt-6 lg:pt-0'>
      {Array.isArray(socialLinks) &&
            socialLinks.map((social, index) => (
              <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
                <GatsbyImage
                image={getImage(social.icon)}
                alt={`${social.name} icon`}
                className="w-32 h-32"
                imgStyle={{ borderRadius: "50%" }}
                />
              </a>
          ))}
      </div>
      
    </main>

   );
}

export default Footer;