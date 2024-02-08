import React from 'react';
import Button from './button.js';

const TypeformLinks = ({ language }) => {
  const linkText = language === 'en' ? 'Join us' : 'Postani član';
  const downloadLink = language === 'en' ? 'https://tally.so/r/w4r6Ob' : 'https://tally.so/r/wzY6za';

  return (
    <div className='pb-6'>
        <a 
      href={downloadLink} target="_blank" rel="noopener noreferrer"
    >
    <Button className='px-20 py-5 text-base2'>{linkText}</Button>  
    </a>
    </div>
    
  );
};

export default TypeformLinks;
