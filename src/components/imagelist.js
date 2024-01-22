import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";


const ImageList = ({ data }) => {
  const { temeljniClanovi } = data;

  return (
    <div className="relative">
      <div className="">
        <div className="flex flex-wrap">
          {data.map((company) => (
            <a
              key={company.id}
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
              className="m-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 lg:p-12"
            >
              <GatsbyImage
                image={getImage(company.logoUrl)}
                alt={company.name}
                className="w-1/2 md:w-full h-auto max-w-full max-h-full m-10 lg:mx-20"
              />
            </a>
          ))}
        </div>
      </div>
      <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
        <StaticImage
          src="../images/members.png"
          className="max-w-full max-h-full"
        />
      </div>
    </div>
  );
};

export default ImageList;
