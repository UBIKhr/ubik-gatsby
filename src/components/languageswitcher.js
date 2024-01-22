import React from "react"
import { useI18next } from "gatsby-plugin-react-i18next"

const LanguageSwitcher = () => {
  const { languages, changeLanguage, language } = useI18next()

  return (
    <>
    <ul className={`flex flex-col space-y-2 ${isExpanded ? 'block' : 'hidden'}`}>
          {languages.map((lng) => (
            <li key={lng}>
              <Link
                to={originalPath}
                language={lng}
                style={{ textDecoration: i18n.resolvedLanguage === lng ? 'underline' : 'none' }}
                onClick={handleLinkClick}
              >
                {lng}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="inline uppercase ml-12 mt-6">
            {languages.map((lng) => (
              <li className='inline ml-2 pt-12' key={lng}>
               <Link to={originalPath} language={lng} style={{ textDecoration: i18n.resolvedLanguage === lng ? 'underline' : 'none' }}>
                {lng}
              </Link>
            </li>
            ))}
         </ul>

    </>
    
         
  )
}

export default LanguageSwitcher;