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
  // const geolocation = Geolocation;

  // (function () {
  //   try{
  //     geolocation.getCurrentPosition().then(pos => {
  //       // console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
  //       let coords = {
  //         latitude: pos.coords.latitude,
  //         longitude: pos.coords.longitude,
  //       }
  //       dispatch({ type: "USER_COORDINATES", value: coords });
  //     });
  //   }catch(e){
  //     console.log("Error get location: ", e)
  //   }
    
  // })();

  return (
    <section className="home">
      <Header page={t("pages.home")} />
      <p>Esto es el home</p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p>ole los caracoles</p>
      <Footer/>
    </section>
  );
};

export default Home;
