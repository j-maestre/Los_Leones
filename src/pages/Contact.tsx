import React, { useContext, useState } from "react";
import { AppContext } from "../State";


// import "./Products.css";
import "../css/bootstrap.min.css"
import { ContactComponent } from '../components/contact/ContactComponent';

import Header from "../components/header/HeaderComponent";
import Footer from "../components/footer/Footer";
import products from "../data/articles.json";

const ContactUs = () => {
  const { state, dispatch } = useContext(AppContext);
  
//   const productsArray = Object.values(products);
  console.log("----------------------------Antes de cargar contact----------------------------");
  console.log(state.presupuesto);

  return (
    <>
      <section className="Contact">
        <Header page={"contact"} />
        <ContactComponent presupuesto={state.presupuesto}/>
        <Footer/>
      </section>
    </>
  );
};

export default ContactUs;
