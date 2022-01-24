import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../State";

import "./Catalogos.css";
import "../../css/bootstrap.min.css"

import Header from "../../components/header/HeaderComponent";
import Footer from "../../components/footer/Footer";

import { useTranslation } from "react-i18next";


type CatalogosProps = {
  page: string;
}


const Catalogos_List: React.FC<CatalogosProps> = (props) => {
  // const { dispatch } = useContext(AppContext);
  const { t } = useTranslation();
  const { state, dispatch } = useContext(AppContext);



  return (
    <section className="catalogos_container">
      <h1 className="text-center">Nuestros catálogos</h1>
      <hr></hr>
      <section className="catalogs_links">
        <h3>Belfast</h3>
        <a href="../../data/catalogs/BELFAST2021.pdf" download="BELFAST2021.pdf">Download</a>
        <hr></hr>
        <h3>Cosmo</h3>
        <a href="path_to_file" download="proposed_file_name">Download</a>
        <hr></hr>
        <h3>Formas</h3>
        <a href="path_to_file" download="proposed_file_name">Download</a>
        <hr></hr>
        <h3>Basic</h3>
        <a href="path_to_file" download="proposed_file_name">Download</a>
        <hr></hr>
        <h3>Forest</h3>
        <a href="path_to_file" download="proposed_file_name">Download</a>
        <hr></hr>
        <h3>Mood Ros</h3>
        <a href="path_to_file" download="proposed_file_name">Download</a>
        <hr></hr>
        <h3>Seres</h3>
        <a href="path_to_file" download="proposed_file_name">Download</a>
        <hr></hr>

      </section>
    </section>
  ); 
};

export default Catalogos_List;
