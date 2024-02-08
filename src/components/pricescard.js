import * as React from "react";

const PricesCard = ({ price, list, type, peryear, changeColor }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div
        className={`border w-full lg:w-1/4 shadow-inner shadow-orange1 rounded-xl bg-transparent text-white border-orange1 transform motion-safe:hover:scale-110 text-center transition duration-500`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
        <div className={`text-center p-4 rounded-lg ${isHovered ? `bg-${changeColor}` : ""}`}>
            <span className={`text-md text-${changeColor}`}>
            {price}
            </span>
            <p>{peryear}</p>
        </div>
        <span className={`text-sm text-center pt-12 text-${changeColor}`}>{type}</span>
        <ul className="p-4 text-left">
          {list.map((item, index) => (
            <li key={index} className="mb-2 font-regular text-tiny">&#x2713; {item}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default PricesCard;