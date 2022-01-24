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
    </section>
  );
};

export default Catalogos_List;
