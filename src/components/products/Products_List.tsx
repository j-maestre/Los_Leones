import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../State";
// import { Geolocation } from '@ionic-native/geolocation';

import product_model from "./Product.model.js";
import "./Products.css";
import "../../css/bootstrap.min.css"

import Header from "../../components/header/HeaderComponent";
import Footer from "../../components/footer/Footer";

import { useTranslation } from "react-i18next";
import AllProducts from "../../data/articles.json";
import ProductsPreview from "./Products_Preview";

type ProductsProps = {
  product:{
      type:string;
      nombre:string;
      tamaño:string;
      color: string;
      material:string;
      descripcion:string;
      modelo:number;
      precio: number;
      stock: boolean;
      descuento:number;
      img:string;
  }[];
};



const Products: React.FC<ProductsProps> = ({product}) => {
  // const { dispatch } = useContext(AppContext);
  const { t } = useTranslation();
  const { state, dispatch } = useContext(AppContext);
  const [filteredSearch, setFilteredSearch] = useState([product_model]);
  console.log("Articles products list-> ", product)
  console.log(product.length);

  

  useEffect(() => {
    console.log("------products-----");
    console.log(AllProducts.products);
    // setFilteredSearch([...props.product]);
    setArticles("all",AllProducts.products);
  },[]);


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

  function setArticles(type, articles = null){

    // dispatch({type:'SET_FILTER',value: type}) 
    if(!articles){
      const tempSillasResult = filterProducts(Object.values(state.articles),type);
      setFilteredSearch([...tempSillasResult]);
    }else{
      console.log("Hay articles, primera vez");
      console.log(articles)
      const tempSillasResult = filterProducts(Object.values(articles),type);
      setFilteredSearch([...tempSillasResult]);
    }
  }

  return (
    <section className="products">
      <Header page={t("pages.products")} />
      <div className="products-title text-center">
        <h1 >Productos</h1>
        <p>Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, non aliquam risus.</p>
      </div>

      <section className="products__menu button-group filter-button-group"> {/*text-center*/}
        <button className="products__menu-item" id="all" onClick={() => setArticles("all")}>Todo</button>
        <button className="products__menu-item" id="sillas" onClick={() => setArticles("silla")}>Sillas</button>
        <button className="products__menu-item" id="armarios" onClick={() => setArticles("armario")}>Armarios</button>
        <button className="products__menu-item" id="mesas" onClick={() => setArticles("mesa")}>Mesas</button>
        <button className="products__menu-item" id="estanterias" onClick={() => setArticles("estanteria")}>Estanterias</button>
		  </section>

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
