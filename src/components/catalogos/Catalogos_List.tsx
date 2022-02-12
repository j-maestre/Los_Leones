import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../State";

import "./Catalogos.css";
import "../../css/bootstrap.min.css"

import Header from "../../components/header/HeaderComponent";
import Footer from "../../components/footer/Footer";
import catalogos from "../../data/articles.json"

import { useTranslation } from "react-i18next";


type CatalogosProps = {
  page: string;
}


const Catalogos_List: React.FC<CatalogosProps> = (props) => {
  // const { dispatch } = useContext(AppContext);
  const { t } = useTranslation();
  const { state, dispatch } = useContext(AppContext);
  let marcas = catalogos.catalogos;
  let catalogos_list;

  return (
    <section className="catalogos_container">
      <h1 className="text-center">Nuestros catálogos</h1>
      <p className="text-center">Seleccione un proveedor para descargar su catálogo.</p>
      <hr></hr>
      <section className="catalogs_links">
      {Object.keys(marcas).map((value,key)=>{
      return(
        <div className="catalogo_item">
          <h3>{marcas[value].nombre}</h3>{/*{marcas[value].download}*/}
          <a href={marcas[value].download} download={marcas[value].nombre+".pdf"}><img src={marcas[value].img} /></a>
        </div>)
      })}
      </section>
    </section>
  ); 
};

export default Catalogos_List;
