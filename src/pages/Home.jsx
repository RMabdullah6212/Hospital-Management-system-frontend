import React from "react";
import Hero from "../componenets/Hero";
import Biography from "../componenets/BioGraphy";
import MessageForm from "../componenets/MessageForm";
import Departments from "../componenets/Departments";

const Home = () => {
  return (
    <>
      <Hero
        title={
          "Welcome to TheCare Medical Institute | Your Trusted Healthcare Provider"
        }
        imageUrl={"/hero.png"}
      />
      <Biography imageUrl={"/about.png"} />
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;
