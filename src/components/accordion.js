import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full mx-auto mt-8">
      {items.map((item, index) => (
        <div key={index} className="mb-4">
          <div
            className="flex justify-between items-center cursor-pointer p-4"
            onClick={() => handleClick(index)}
          >
            <h3 className="text-tiny lg:text-md font-regular font-light">{item.title}</h3>
            {activeIndex === index ? (
              <FaChevronUp className="text-white" />
            ) : (
              <FaChevronDown className="text-white" />
            )}
          </div>
          {activeIndex === index && (
            <div className="p-4 font-hind">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
