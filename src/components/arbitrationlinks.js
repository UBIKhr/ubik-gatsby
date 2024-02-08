import React from 'react';

const ArbitrationLinks = ({ language }) => {
  const linkText = language === 'en' ? 'Arbitration rules' : 'Arbitražna pravila';
  const downloadLink = language === 'en' ? '/Rules.pdf' : '/Pravila.pdf';

  return (
    <div className='pb-6'>
        <a 
      download={linkText} 
      href={downloadLink} 
      className={`  active:text-orange1 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
        before:bottom-0 before:left-0 before:bg-orange1
        before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
        before:transition before:ease-in-out text-orange1 before:duration-300`}
    >
      {linkText}
    </a>
    </div>
    
  );
};

export default ArbitrationLinks;
