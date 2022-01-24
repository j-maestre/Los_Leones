import React, { useContext, useState } from "react";
import { AppContext } from "../State";


// import "./Products.css";
import "../css/bootstrap.min.css"
import Catalogos_List from '../components/catalogos/Catalogos_List';

import Header from "../components/header/HeaderComponent";
import Footer from "../components/footer/Footer";


const Catalogos = () => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <>
      <section className="catalogos">
        <Header page={"catalogos"} />
        <Catalogos_List page={"catalogos"}/>
        <Footer/>
      </section>
    </>
  );
};

export default Catalogos;
