import React from "react";
// import { Geolocation } from '@ionic-native/geolocation';

import "./Products.css";
import "../css/bootstrap.min.css"
// import EventList from "../components/Event/Event_List";

import Header from "../components/header/HeaderComponent";
import Footer from "../components/footer/Footer";

import { useTranslation } from "react-i18next";

import brick from "../data/img/brick-wall.jpg";
import chairs from "../data/img/chairs.jpg";
import interior from "../data/img/interior.jpg";
import living from "../data/img/living-room.jpg";
import wall from "../data/img/wall.jpg";

const Products = () => {
  // const { dispatch } = useContext(AppContext);
  const { t } = useTranslation();

  return (
    <section className="products">
      <Header page={t("pages.products")} />
      <div className="section-title text-center">
        <h1>Productos</h1>
        <p>Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, non aliquam risus.</p>
      </div>

      <section className="products__menu">
					<button className="products__menu-item" id="all">Todo</button>
					<button className="products__menu-item" id="sillas">Sillas</button>
					<button className="products__menu-item" id="armarios">Armarios</button>
					<button className="products__menu-item" id="mesas">Mesas</button>
					<button className="products__menu-item" id="estanterias">Estanterias</button>
			</section>

      <section className="products__images">
        <img src={brick} alt="image" />
        <img src={chairs} alt="image" />
        <img src={interior} alt="image" />
        <img src={living} alt="image" />
        <img src={wall} alt="image" />
      </section>
      

      
      <Footer/>
    </section>
  );
};

export default Products;
