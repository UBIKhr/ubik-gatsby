import React from "react";
import Card from "./card.js";
import { StaticImage } from 'gatsby-plugin-image';


const CardList = ({ data }) => {
  const { upravniOdbor } = data;

  return (
    <div className="relative">
      <div className="mx-0 w-full">
      <div className="flex flex-col md:flex-row md:flex-wrap justify-start items-start 2xl:mx-4">
        {data.map((card, index) => (
           <Card imageWidthClass="2/3"  key={index} {...card} />
          ))}
        </div>  
        <div className="hidden lg:block absolute top-1/2 -right-8 lg:-right-20 transform translate-x-1/2 -translate-y-1/2">
        <StaticImage
          src="../images/members.png"
          className="max-w-full max-h-full"
        />
      </div>
      </div>
    </div>
  );
};

export default CardList;

