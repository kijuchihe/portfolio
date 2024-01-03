import React from "react";

const Section = ({ children }) => {
  return (
    <section className="h-screen max-h-screen overflow-x-hidden lg:snap-center ">
      {children}
    </section>
  );
};

export default Section;
