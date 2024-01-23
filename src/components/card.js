import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Card = ({ image, titlefront, titleperson, subtitle, textfront, textblue, textperson, socialLinks, imageWidthClass, textlanguages }) => {
  const cardImage = getImage(image);

  if (!cardImage) {
    console.warn("Missing image prop in Card component");
    return null;
  }
  const altText = titlefront || titleperson || "Card Image";

  return (
    <div className="max-w-sm mx-auto bg-transparent overflow-hidden text-center mt-8 lg:mt-16">
      <GatsbyImage image={cardImage} alt={altText} 
        className={`w-${imageWidthClass}  object-contain mx-auto my-auto p-6`}
        />
      <div className="p-6">
        <p className="text-cyan text-tiny font-hind mb-2 text-left">{subtitle}</p>
        <h2 className="text-white font-regular text-md2 mb-2">{titlefront}</h2>
        <h2 className="text-white font-regular text-md mb-2 text-left pb-4">{titleperson}</h2>
        <p className="text-white font-hind text-xs">{textfront}</p>
        <p className="text-cyan font-hind text-tiny text-left pb-2">{textblue}</p>
        <p className="text-white font-hind text-xs text-left">{textperson}</p>
        <p className="text-white font-hind text-tiny text-left pt-2">{textlanguages}</p>

      </div>

      <div className="flex justify-start items-center space-x-4 p-4">
        {Array.isArray(socialLinks) &&
          socialLinks.map((social, index) => (
            <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
              <GatsbyImage
                image={getImage(social.icon)}
                alt={`${social.name} icon`}
                className="w-24 h-24"
                imgStyle={{ borderRadius: "50%" }}
              />
            </a>
          ))}
      </div>
    </div>
  );
};

export default Card;