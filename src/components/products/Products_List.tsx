import React, { useContext, useState } from "react";
import { AppContext } from "../../State";
// import { Geolocation } from '@ionic-native/geolocation';

import "./Products.css";
import "../../css/bootstrap.min.css"
// import EventList from "../components/Event/Event_List";

import Header from "../../components/header/HeaderComponent";
import Footer from "../../components/footer/Footer";

import { useTranslation } from "react-i18next";
import products from "../../data/articles.json";
import ProductsPreview from "./Products_Preview";
import { IonSelectPopover } from "@ionic/react";

const Products = () => {
  // const { dispatch } = useContext(AppContext);
  const { t } = useTranslation();
  const { state, dispatch } = useContext(AppContext);

  const productsArray = Object.values(products); //Todos los productos
    console.log("producst state:");
    console.log(productsArray)

    // productsArray.forEach(element => console.log("pene",element));

if(state.articles.length==0){
    dispatch ({ type: "SET_ARTICLES", value: productsArray})
}

  function setArticles(type){
    switch(type){
      case "all":
        dispatch ({ type: "SET_ARTICLES", value: productsArray})
      break;
      case "sillas":

      break;
      case "mesas":

      break;
      case "armarios":

      break;
    }
  }

  return (
    <section className="products">
      <Header page={t("pages.products")} />
      <div className="section-title text-center">
        <h1>Productos</h1>
        <p>Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, non aliquam risus.</p>
      </div>

      {/* onClick={() => setFilterPanel(true)} */}

      <section className="products__menu button-group filter-button-group"> {/*text-center*/}
			<button className="products__menu-item" id="all" onClick={() => setArticles("all")}>Todo</button>
			<button className="products__menu-item" id="sillas">Sillas</button>
			<button className="products__menu-item" id="armarios">Armarios</button>
			<button className="products__menu-item" id="mesas">Mesas</button>
			<button className="products__menu-item" id="estanterias">Estanterias</button>
		</section>
        
        {state.articles.map((article, index) => (
            console.log("---------",article),
            <ProductsPreview product={article[index]} />
        ))}
      

        
     

      

      {/* Iteracion productos seleccionados en products preview MAP*/}
    
      

      
      <Footer/>
    </section>
  );
};

export default Products;
