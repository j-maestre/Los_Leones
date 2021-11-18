import React, { useContext, useState } from "react";
import { AppContext } from "../../State";
// import { Geolocation } from '@ionic-native/geolocation';

import product_model from "./Product.model.js";
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
  const [filteredSearch, setFilteredSearch] = useState([product_model]);

  // if(filteredSearch){
  //   console.log("No hay naaaa----------------------");
  //   console.log(filteredSearch)
  // }

  // filterProducts()
  function filterProducts(products, type="all"){
    let productsFiltred = [...products];

    // let type=state.filter;

    if(type=="all"){
      //Todos los productos
      productsFiltred = productsFiltred.filter(
        (product) => product.type
      );
    }else{
      //Filtramos por type
      productsFiltred = productsFiltred.filter(
        (product) => product.type == type
      );
    }

    return productsFiltred;
  }

  function setArticles(type){

    // dispatch({type:'SET_FILTER',value: type}) 

    const tempSillasResult = filterProducts(Object.values(state.articles),type);
    setFilteredSearch([...tempSillasResult]);
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
        <button className="products__menu-item" id="sillas" onClick={() => setArticles("silla")}>Sillas</button>
        <button className="products__menu-item" id="armarios" onClick={() => setArticles("armario")}>Armarios</button>
        <button className="products__menu-item" id="mesas" onClick={() => setArticles("mesa")}>Mesas</button>
        <button className="products__menu-item" id="estanterias" onClick={() => setArticles("estanteria")}>Estanterias</button>
		  </section>

     
      {/* Prueba a piñon */}
      <section className="products__images">
        {/* Iteracion productos seleccionados en products preview MAP*/}
        {filteredSearch.map((value,key)=>(
            <ProductsPreview product={value} key={"_"+key}/>
        ))}
      </section>
      <Footer/>
    </section>
  );
};

export default Products;
