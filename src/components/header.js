import React, { useState, useEffect } from 'react';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import logo from '../images/logo.png';
import { graphql, useStaticQuery } from 'gatsby';




const Header = () => {
  const {languages, originalPath, i18n} = useI18next();
  const { t } = useTranslation();
  const [isExpanded, toggleExpansion] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState(originalPath);

  const data = useStaticQuery(graphql`
    query HeaderQuery {
      locales: allLocale(filter: { ns: { in: ["common"] } }) {
        edges {
          node {
            ns
            data
            language
          }
        }
      }  
    }
  `);
  const links = [
    {
      text: <Trans i18nKey={"homepage"}>Naslovnica</Trans>,
      url: '/',
    },
    {
      text: <Trans i18nKey={"blog"}>contact</Trans>,
      url: 'https://blog.ubik.hr/',
      external: true,
    },
    {
      text: <Trans i18nKey={"arbitration"}>contact</Trans>,
      url: '/arbitraza',
    },
    {
      text: <Trans i18nKey={"members"}></Trans>,
      url: '/members',
    },
    {
      text: <Trans i18nKey={"contact"}>Kontakt</Trans>,
      url: '/contact',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1024 && isExpanded) {
      setScrolled(true);
    }
  }, [isExpanded]);

  useEffect(() => {
    setCurrentPath(originalPath);
  }, [originalPath]);

  const handleLinkClick = () => {
    if (isExpanded) {
      toggleExpansion(false);
      if (window.innerWidth <= 1024) {
        setScrolled(true);
      }
    }
  };

  const handleButtonClick = () => {
    toggleExpansion(!isExpanded);
  };

  return (
    <header className={`flex fixed z-20 top-0 w-full items-start lg:items-center justify-between px-5 py-8 lg:px-24 xl:px-32 lg:py-10 font-regular text-white text-xs lg:text-tiny xl:text-xs 2xl:text-base1 ${isScrolled ? 'bg-gradient-start' : 'bg-transparent'}`}>
      <Link to="/" onClick={handleLinkClick}>
        <img alt="UBIK logo" width={168} style={{ margin: 0 }} src={logo} />
      </Link>

      <div className="lg:flex hidden items-center justify-between">
        <ul className="flex justify-between items-center space-x-6 lg:space-x-2 xl:space-x-6 h-screen lg:h-auto mt-12 lg:mt-0">
          {links.map((link) => (
            <li
              key={link.url}
              className={`text-white uppercase pt-5 ${currentPath === link.url ? 'active:text-orange2' : ''}  relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-orange2
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300`}
            >
              {link.external ? (
                <a href={link.url} target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
                  <Trans>{link.text} </Trans>
                </a>
              ) : (
                <Link to={link.url} onClick={handleLinkClick}>
                  <Trans>{link.text} </Trans>
                </Link>
              )}
            </li>
          ))}
        </ul>
        <ul className="md:pl-16 mt-5 inline uppercase ">
            {languages.map((lng) => (
              <li className='inline pr-2' key={lng}>
               <Link to={originalPath} language={lng} style={{ textDecoration: i18n.resolvedLanguage === lng ? 'underline' : 'none' }}>
                {lng}
              </Link>
            </li>
            ))}
         </ul>
        <Link to={'/join'} className={`text-cyan hidden lg:block uppercase pt-5 active:text-orange2 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-cyan
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 lg:ml-6 xl:ml-32 text-tiny xl:text-xs 2xl:text-base1 2xl:ml-80`}><Trans i18nKey={"bcm"}>Postani član</Trans></Link>
      </div>

      <div className="lg:hidden w-full mt-4">
        <ul className={`flex flex-col justify-start h-screen items-center pt-12 pr-12 ${isExpanded ? 'block' : 'hidden'}`}>
          {links.map((link) => (
            <li
              key={link.url}
              className={`text-white block uppercase pt-5 ${currentPath === link.url ? 'active:text-orange2' : ''} relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-orange2
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300`} 
            >
              {link.external ? (
                <a href={link.url} target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
                  <Trans>{link.text} </Trans>
                </a>
              ) : (
                <Link to={link.url} onClick={handleLinkClick}>
                  <Trans>{link.text} </Trans>
                </Link>
              )}
            </li>
          ))}
          <ul className="inline uppercase pt-10">
            {languages.map((lng) => (
              <li className='inline pr-2 ' key={lng}>
               <Link to={originalPath} language={lng} style={{ textDecoration: i18n.resolvedLanguage === lng ? 'underline' : 'none' }}>
                {lng}
              </Link>
            </li>
            ))}
         </ul>
          <Link to={'/join'} className={`text-cyan uppercase pt-5 mt-10 active:text-orange2 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-cyan
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 text-tiny`}><Trans i18nKey={"bcm"}>Postani član</Trans></Link>
        </ul>

      </div>

      <div className="relative lg:hidden">
        <button
          className="text-white focus:outline-none"
          onClick={handleButtonClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isExpanded ? (
              <path d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            )}
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;