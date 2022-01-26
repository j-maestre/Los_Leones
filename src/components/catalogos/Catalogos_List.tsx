import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../State";

import "./Catalogos.css";
import "../../css/bootstrap.min.css"

import Header from "../../components/header/HeaderComponent";
import Footer from "../../components/footer/Footer";
import catalogos from "../..//data/articles.json"

import { useTranslation } from "react-i18next";


type CatalogosProps = {
  page: string;
}


const Catalogos_List: React.FC<CatalogosProps> = (props) => {
  // const { dispatch } = useContext(AppContext);
  const { t } = useTranslation();
  const { state, dispatch } = useContext(AppContext);
  let marcas = catalogos.catalogos;
  console.log("MARCAS");
  console.log(marcas);
  // console.log(Object.size(marcas));

  let catalogos_list;
  // catalogos_list = Object.keys(marcas).map((value,key)=>{
  //   <div className="catalogo_item">
  //     <h3>{marcas[value].nombre}</h3>
  //     <a href="https://github.com/j-maestre/Los_Leones/raw/master/src/data/catalogs/BELFAST2021.pdf" download="BELFAST2021.pdf"><img src={marcas[value].img} /></a>
  //   </div>
  // });
  console.log("Catalogos list");
  console.log(catalogos_list)
    // <h3>{marcas[value].nombre}</h3>
    // <h3>marcas[value].nombre</h3>
    // <img src={marcas[value].img} />
    // console.log(marcas[value].nombre)
  



  return (
    <section className="catalogos_container">
      <h1 className="text-center">Nuestros catálogos</h1>
      <hr></hr>
      <section className="catalogs_links">
      {Object.keys(marcas).map((value,key)=>{
      return(
        <div className="catalogo_item">
          <h3>{marcas[value].nombre}</h3>
          <a href={marcas[value].download} download={marcas[value].nombre+".pdf"}><img src={marcas[value].img} /></a>
        </div>)
      })}

        {/* <h3>Belfast</h3>
        <a href="https://github.com/j-maestre/Los_Leones/raw/master/src/data/catalogs/BELFAST2021.pdf" download="BELFAST2021.pdf">Download</a>
        <hr></hr>
        <h3>Cosmo</h3>
        <a href="https://github.com/j-maestre/Los_Leones/raw/master/src/data/catalogs/Catalogo_Eos_Cosmo_2020.pdf" download="Catalogo_Eos_Cosmo_2020">Download</a>
        <hr></hr>
        <h3>Formas</h3>
        <a href="https://github.com/j-maestre/Los_Leones/raw/master/src/data/catalogs/Catalogo_Formas_19.pdf" download="Catalogo_Formas_19.pdf">Download</a>
        <hr></hr>
        <h3>Basic</h3>
        <a href="https://github.com/j-maestre/Los_Leones/raw/master/src/data/catalogs/DORMITORIOS_BASIC.pdf" download="DORMITORIOS_BASIC">Download</a>
        <hr></hr>
        <h3>Forest</h3>
        <a href="https://github.com/j-maestre/Los_Leones/raw/master/src/data/catalogs/FOREST_2021.pdf" download="FOREST_2021.pdf">Download</a>
        <hr></hr>
        <h3>Mood Ros</h3>
        <a href="https://github.com/j-maestre/Los_Leones/raw/master/src/data/catalogs/MOOD_ROS_MINI_2020.pdf" download="MOOD_ROS_MINI_2020.pdf">Download</a>
        <hr></hr>
        <h3>Seres</h3>
        <a href="https://github.com/j-maestre/Los_Leones/raw/master/src/data/catalogs/SERES_Cat%C3%A1logo%202020.pdf" download="SERES_Catálogo 2020.pdf">Download</a>
        <hr></hr> */}

      </section>
    </section>
  ); 
};

export default Catalogos_List;
