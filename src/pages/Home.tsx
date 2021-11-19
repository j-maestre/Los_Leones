import React, { useContext, useState, useEffect } from "react";
// import { Geolocation } from '@ionic-native/geolocation';

import "./Home.css";
// import EventList from "../components/Event/Event_List";

import Header from "../components/header/HeaderComponent";
import Footer from "../components/footer/Footer";
import HomeComponent from "../components/home/HomeComponent";
import { AppContext } from "../State";
import best_products_model from "../components/products/BestProducts.model";
import data from "../data/articles.json";

import { useTranslation } from "react-i18next";

const Home = () => {
  // const { dispatch } = useContext(AppContext);
  const { t } = useTranslation();
  const { state, dispatch } = useContext(AppContext);

  // let articles = [best_products_model]; 
  let articles = data.best_products;

  

  return (
    <section className="body">
    <section className="home">
      <Header page={t("pages.home")} />
      <HomeComponent best_products={articles}/>
    </section>
    <Footer/>
    </section>
  );
};

export default Home;
