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
  // const productsArray = Object.values(products);

  let articles = []; 
  articles = [...Object.values(state.articles)];

  return (
    <>
      <section className="products">
        <Header page={"products"} />
        <Products_List product={articles}/>
        <Footer/>
      </section>
    </>
  );
};

export default Products;
