import React from "react";
// import { Geolocation } from '@ionic-native/geolocation';

import "./Home.css";
// import EventList from "../components/Event/Event_List";

import Header from "../components/header/HeaderComponent";
import Footer from "../components/footer/Footer";

import { useTranslation } from "react-i18next";

console.log("HOMMMMMMMMMMMME")

const Home = () => {
  // const { dispatch } = useContext(AppContext);
  const { t } = useTranslation();

  return (
    <section className="body">
    <section className="home">
      <Header page={t("pages.home")} />
      <p>Esto es el home</p>
      <p>Esto es el home</p>
      <p>Esto es el home</p>
      <p>Esto es el home</p>
      <p>Esto es el home</p>
      <p>Esto es el home</p>
      <p>Esto es el home</p>
      <p>Esto es el home</p>
      <p>Esto es el home</p>
      <p>Esto es el home</p>
      <p>Esto es el home</p>
      <p>Esto es el home</p>
      <p>Esto es el home</p>
      <p>Esto es el home</p>
      <p>Esto es el home</p>
      <p>Esto es el home</p>
      <p>Esto es el home</p>
      <p>Esto es el home</p>
      <p>Esto es el home</p>
      <p>Esto es el home</p>
      <p>Esto es el home</p>
      <p>Esto es el home</p>
      <p>Esto es el home</p>
      <p>Esto es el home</p>
      <p>Esto es el home</p>
      <p>Esto es el home</p>
      <p>Esto es el home</p>
      <p>Esto es el home</p>
      <p>Esto es el home</p>
      <p>Esto es el home</p>
      <p>Esto es el home</p>
      <p>Esto es el home</p>
      <p>Esto es el home</p>

 
      <p>ole los caracoless</p>
    </section>
    <Footer/>
    </section>
  );
};

export default Home;
