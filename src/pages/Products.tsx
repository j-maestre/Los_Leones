import React, { useContext, useState } from "react";
import { AppContext } from "../State";


// import "./Products.css";
import "../css/bootstrap.min.css"
import Products_List from '../components/products/Products_List';

import Header from "../components/header/HeaderComponent";
import Footer from "../components/footer/Footer";
import products from "../data/articles.json";

const Products = () => {
  const { state, dispatch } = useContext(AppContext);
  
  const productsArray = Object.values(products);
  //Si en el state no hay ningun articulo, cojo y los meto TODOS
  if(state.articles.length==0){
    dispatch ({ type: "SET_ARTICLES", value: products})
  }

  return (
    <>
      <section className="products">
        <Header page={"products"} />
        <Products_List />
        <Footer/>
      </section>
    </>
  );
};

export default Products;
