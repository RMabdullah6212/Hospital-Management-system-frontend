import React from "react";
import Hero from "../componenets/Hero";
import Biography from "../componenets/BioGraphy";
const AboutUs = () => {
  return (
    <>
      <Hero
        title={"Learn More About Us | TheCare Medical Institute"}
        imageUrl={"/about.png"}
      />
      <Biography imageUrl={"/whoweare.png"} />
    </>
  );
};

export default AboutUs;
