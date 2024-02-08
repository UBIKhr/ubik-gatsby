import React from 'react';

const FeesLinks = ({ language }) => {
  const linkText = language === 'en' ? 'Arbitration Fees' : 'Arbitražne naknade';
  const downloadLink = language === 'en' ? '/Fees.pdf' : '/Naknade.pdf';

  return (
    <a 
      download={linkText} 
      href={downloadLink} 
      className={`  active:text-orange1 relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
        before:bottom-0 before:left-0 before:bg-orange1
        before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
        before:transition before:ease-in-out text-orange1 before:duration-300 mr-4`}
    >
      {linkText}
    </a>
  );
};

export default FeesLinks;