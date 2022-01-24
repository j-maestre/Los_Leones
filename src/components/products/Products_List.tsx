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
  

  useEffect(() => {
    setArticles("all",-1,AllProducts.products);
  },[]);

  function onClick(type,model,toActive,articles = null){
    //Filtramos la categoria seleccionada
    setArticles(type,model,articles);
    //Cambiamos el item activo de la subcategoria
    setActive(toActive);
  }

  function filterProducts(products, type="all", model){
    let productsFiltred = [...products];
    console.log("Filtrar productos por modelo "+model);

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

    if(model>=0){
      //Filtramos por modelo (subcategoria)
      productsFiltred = productsFiltred.filter(
        (product) => product.modelo == model
      );
      // dispatch({type:'SET_SUBFILTER',value: model})
    }
    //Cambiamos el item activo
    dispatch({type:'SET_FILTER',value: type});
    return productsFiltred;
  }

  function setArticles(type, model,articles = null){
    console.log("Set articles model: "+model);

    // dispatch({type:'SET_FILTER',value: type}) 
    if(!articles){
      setActive();
      const tempSillasResult = filterProducts(Object.values(state.articles),type,model);
      setFilteredSearch([...tempSillasResult]);
    }else{
      const tempSillasResult = filterProducts(Object.values(articles),type,model);
      setFilteredSearch([...tempSillasResult]);
    }
  }

  function toggleActive(type,group){
    if(type == state.filter && group == "principal"){
      return "products__menu-item active";
    }else if(group == "principal"){
      return "products__menu-item";
    }

    
    if(type == state.subfilter && group == "subfilter"){
      return "products__menu-item subfilter active";
    }else if(group == "subfilter"){
      return "products__menu-item subfilter";
    }
  }

  function setActive(type=""){
    dispatch({type:'SET_SUBFILTER',value: type});
  }

  function toggleFilters(){
    switch(state.filter){
      case 'mesa':
        return <section className="button-group filter-button-group">
                  <div className={toggleActive("comedor","subfilter")} onClick={() => onClick("mesa",0,"comedor")}>Comedor</div>
                  <div className={toggleActive("alta","subfilter")} onClick={() => onClick("mesa",1,"alta")}>Alta</div>
                  <div className={toggleActive("bar","subfilter")} onClick={() => onClick("mesa",2,"bar")}>Bar</div>
                  <div className={toggleActive("mesilla","subfilter")} onClick={() => onClick("mesa",3,"mesilla")}>Mesilla</div>
                  <div className={toggleActive("tocador","subfilter")} onClick={() => onClick("mesa",4,"tocador")}>Tocador</div>
               </section>
      break;
      case 'silla':
        return <section className="button-group filter-button-group">
                  <div className={toggleActive("silla","subfilter")} onClick={() => onClick("silla",0,"silla")}>Sillas</div>
                  <div className={toggleActive("taburete","subfilter")} onClick={() => onClick("silla",1,"taburete")}>Taburetes</div>
                  <div className={toggleActive("banco","subfilter")} onClick={() => onClick("silla",2,"banco")}>Banco</div>
                  <div className={toggleActive("pub","subfilter")} onClick={() => onClick("silla",3,"pub")}>Pub</div>
                  <div className={toggleActive("butaca","subfilter")} onClick={() => onClick("silla",4,"butaca")}>Butaca</div>
               </section>
      break;
      case 'otros':
        return <section className="button-group filter-button-group">
                    <div className={toggleActive("silla","subfilter")} onClick={() => onClick("otros",0,"cabecero")}>Cabeceros</div>
                    <div className={toggleActive("taburete","subfilter")} onClick={() => onClick("otros",1,"taburete")}>Percheros</div>
                    <div className={toggleActive("espejo","subfilter")} onClick={() => onClick("otros",2,"espejo")}>Espejos</div>
                    <div className={toggleActive("pizarra","subfilter")} onClick={() => onClick("otros",3,"pizarra")}>Pizarras</div>
               </section>
      break;
      default:
        return null;
      break;
    }
  }

  return (
    <section className="products">
      <Header page={t("pages.products")} />
      <div className="products-title text-center">
        <h1 >Productos</h1>
        <p>Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, non aliquam risus.</p>
      </div>
      <hr></hr>
      <section className="products__menu button-group filter-button-group"> {/*text-center*/}
        <div className={toggleActive("all","principal")} onClick={() => setArticles("all",-1)}>Todo</div>
        {/* <div className={toggleActive("armario","principal")} onClick={() => setArticles("armario",-1)}>Armarios</div> */}
        <div className={toggleActive("cama","principal")} onClick={() => setArticles("cama",-1)}>Camas</div>
        <div className={toggleActive("estanteria","principal")} onClick={() => setArticles("estanteria",-1)}>Estanterias</div>
        <div className={toggleActive("mesa","principal")} onClick={() => setArticles("mesa",-1)}>Mesas</div>
        <div className={toggleActive("silla","principal")} onClick={() => setArticles("silla",-1)}>Sillas</div>
        <div className={toggleActive("sillon","principal")} onClick={() => setArticles("sillon",-1)}>Sillones</div>
        <div className={toggleActive("sofa","principal")} onClick={() => setArticles("sofa",-1)}>Sofás</div>
        <div className={toggleActive("otros","principal")} onClick={() => setArticles("otros",-1)}>Otros</div>
        <hr></hr>
        <section className="subfilters filter-button-group button-group">
          {toggleFilters()}
        </section>
		  </section>

      <section className="products__images">
        {/* Iteracion productos seleccionados en products preview MAP*/}
        {filteredSearch.map((value,key)=>(
          <ProductsPreview product={value} Key={"img_"+key}/>
          // console.log("_"+key)
        ))}
      </section>
      <Footer/>
    </section>
  );
};

export default Products;
