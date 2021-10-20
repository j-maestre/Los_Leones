import React from "react";
// import { Geolocation } from '@ionic-native/geolocation';

import "./Products.css";
// import EventList from "../components/Event/Event_List";

import Header from "../components/header/HeaderComponent";
import Footer from "../components/footer/Footer";

import { useTranslation } from "react-i18next";

console.log("HOMMMMMMMMMMMME")

const Products = () => {
  // const { dispatch } = useContext(AppContext);
  const { t } = useTranslation();

  return (
    <section className="products">
      <Header page={t("pages.products")} />
      <p>Esto es el products</p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>ole los products</p>
      <Footer/>
    </section>
  );
};

export default Products;
