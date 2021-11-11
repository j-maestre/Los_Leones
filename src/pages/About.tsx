import React, { useContext, useState } from "react";
import { AppContext } from "../State";


// import "./Products.css";
import "../css/bootstrap.min.css"
import About from '../components/about/About';

import Header from "../components/header/HeaderComponent";
import Footer from "../components/footer/Footer";
import products from "../data/articles.json";

const AboutUs = () => {
  const { state, dispatch } = useContext(AppContext);
  
//   const productsArray = Object.values(products);

  return (
    <>
      <section className="About">
        <Header page={"about"} />
        <About page={'about'} />
        <Footer/>
      </section>
    </>
  );
};

export default AboutUs;
