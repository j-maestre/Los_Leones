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

const Products = () => {
  // const { dispatch } = useContext(AppContext);
  const { t } = useTranslation();
  const { state, dispatch } = useContext(AppContext);
  let productos=[];

  //Cojo los articulos del state y se los paso al Products Preview
    for(let key in state.articles.products){
      // productos.push(state.articles.products[key]);
      // productos[key]=state.articles.products[key];
      productos=[...productos,state.articles.products[key]];
    }
    
    console.log("Prueba de fuego state");
    // console.log(state.articles.products)
    console.log(productos);

  function setArticles(type){
    //Si he filtrado algun articulo, cojo los que quiero y los meto en el state
    switch(type){
      case "all":
        dispatch ({ type: "SET_ARTICLES", value: products})
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

      <section className="products__menu button-group filter-button-group"> {/*text-center*/}
        <button className="products__menu-item" id="all" onClick={() => setArticles("all")}>Todo</button>
        <button className="products__menu-item" id="sillas">Sillas</button>
        <button className="products__menu-item" id="armarios">Armarios</button>
        <button className="products__menu-item" id="mesas">Mesas</button>
        <button className="products__menu-item" id="estanterias">Estanterias</button>
		  </section>

     
      {/* Prueba a piñon */}
      <section className="products__images">
      <ProductsPreview product={productos[0]} />
      <ProductsPreview product={productos[1]} />
      <ProductsPreview product={productos[2]} />
      <ProductsPreview product={productos[3]} />
      <ProductsPreview product={productos[4]} />

      {/* Iteracion productos seleccionados en products preview MAP*/}
      {/* PORQUE COÑO CUANDO HAGO EL MAP ME PETA PERO SI LO PONGO APIÑON ARRIBA NO */}
      {productos.map((value,index)=>{
        // console.log("index ",index,"-> ",value)
        // <ProductsPreview product={value}  />
      })}
      </section>
    
      

      
      <Footer/>
    </section>
  );
};

export default Products;
