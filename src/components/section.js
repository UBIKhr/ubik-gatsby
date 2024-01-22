import * as React from "react";

const Section = ({ id, clanak, naziv, children }) => {
  return (
    <section id={id} className="text-white px-4 lg:px-32 pt-32 text-center">
        <h1 className="text-tiny lg:text-sm text-center font-hind font-normal pt-6">{clanak}</h1>
        <h1 className="text-tiny lg:text-sm text-center font-hind font-normal pt-4">{naziv}</h1>
        {children}
    </section>
  );
};

export default Section;
