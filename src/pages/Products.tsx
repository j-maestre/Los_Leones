import React from "react";
// import { Geolocation } from '@ionic-native/geolocation';

import "./Products.css";
import "../css/bootstrap.min.css"
// import EventList from "../components/Event/Event_List";

import Header from "../components/header/HeaderComponent";
import Footer from "../components/footer/Footer";

import { useTranslation } from "react-i18next";

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

      <div className="products__menu">
					<button className="products__menu-item" id="all">Todo</button>
					<button className="products__menu-item" id="sillas">Sillas</button>
					<button className="products__menu-item" id="armarios">Armarios</button>
					<button className="products__menu-item" id="mesas">Mesas</button>
					<button className="products__menu-item" id="estanterias">Estanterias</button>			
			</div>
      
      
      <Footer/>
    </section>
  );
};

export default Products;
