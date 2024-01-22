import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Hero = ({ imagePosition, backgroundImage, children }) => {
  const bgImage = getImage(backgroundImage);

  const positionClasses = imagePosition === 'right' ? 'flex-col-reverse  lg:flex-row-reverse' : 'flex-col-reverse  lg:flex-row';

  return (
    <div className={`w-screen flex items-center ${positionClasses} bg-gradient-to-b from-gradient-start to-gradient-end`}>
      <div className="w-full lg:h-full -mt-24 lg:mt-0">
        <GatsbyImage
          image={bgImage}
          alt="Background Image"
          className="w-full h-full bg-contain bg-no-repeat"
        />
      </div>
      <div className="w-full text-white ">
      <div className="container mx-auto w-full px-4 lg:pl-32"> 
          {children}
        </div>
      </div>
    </div>
  );
};

export default Hero;