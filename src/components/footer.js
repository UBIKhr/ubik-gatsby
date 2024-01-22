import * as React from 'react';
import { Link } from 'gatsby';
import logo from '../images/logo.png';
import footerimg from '../images/footer.png';

const links = [
    {
      text: 'Početna',
      url: '/',
    },
    {
      text: 'Blog',
      url: '/blog',
    },
    {
      text: 'ARBITRAŽA',
      url: '/arbitraza',
    },
    {
      text: 'članovi',
      url: '/members',
    },
    {
      text: 'Kontakt',
      url: '/contact',
    },
    {
      text: 'Postani član',
      url: '/join',
    },
  ];

const Footer = () => {
   return (
    <main className='w-full relative bg-gradient-end font-regular text-white px-5 py-8 lg:px-24  xl:px-32 lg:py-10'>
      <Link to="/" >
        <img alt="UBIK logo" width={168} style={{ margin: 0, }} src={logo} className='pt-72' />
      </Link>
      <div className='flex flex-col md:flex-row justify-start items-start pt-6'>
        <ul className='flex flex-col justify-between items-start pt-5 text-left opacity-40 font-hind lg:pb-72'>
            <li className='text-opacity-40 pb-4'>Udruga za blockchain i kriptovalute - UBIK</li>
            <li className='text-opacity-40 pb-4'>Medulićeva 4, 10000 Zagreb, Hrvatska</li>
            <li className='text-opacity-40 pb-4'>Email: <a href='mailto:info@ubik.hr'>info@ubik.hr</a></li>
            <li className='text-opacity-40 pb-4'>Kontakt telefon: <a href='tel:+38514106456'>01/4106-456</a></li>
            <li className='text-opacity-40 pb-4'>OIB: 49493768738</li>
            <li className='text-opacity-40 pb-4'>Registarski broj: 21012855</li>
            <li className='text-opacity-40 pb-4'>Transakcijski račun: HR0324020061100858697</li>
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
              <Link to={link.url}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
        <div className='absolute top-0 right-0 bg-gradient-end hidden md:block'>
            <img src={footerimg}/>
        </div>
      </div>
    </main>

   );
}

export default Footer;