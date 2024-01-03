import React from "react";

const Section = ({ children }) => {
  return (
    <section className="h-screen max-h-screen overflow-hidden ">
      {children}
    </section>
  );
};

export default Section;
