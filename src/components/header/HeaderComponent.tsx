import React, { useContext, useEffect } from "react";
import { AppContext } from "../../State";
import { Redirect, Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./header.css";

import '../../../src/css/animate.css';
import '../../../src/css/bootstrap.min.css';
// import '../../../src/css/style.css';
import '../../../src/css/responsive.css';
import '../../../src/css/custom.css';

import logo from "../../data/img/logo2.png";


type HeaderProps = {
  page: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  const { state } = useContext(AppContext);
  const { t } = useTranslation();


  // useEffect(() => {
  //   state.theme === "Dark"
  //     ? document.body.classList.add("dark")
  //     : document.body.classList.remove("dark");
  // });

  const page = props.page;
  return (
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container-fluid">
          <NavLink className="navbar-brand js-scroll-trigger home_logo" activeClassName="inactive" to="home">
            <img className="img-fluid" src={logo} alt="Logo" /> {/*IMAGEN LOGO*/ }
          </NavLink>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav right">
              <li className="nav-item">
                <NavLink className="nav-link" to="home" activeClassName="active">Inicio</NavLink>
              </li>
              <li className="nav-item">
              <NavLink to="products" className="nav-link" activeClassName="active">Productos</NavLink>
              </li>

              <li className="nav-item">
              <NavLink className="nav-link" to="catalogos" activeClassName="active">Catalogos</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="about" activeClassName="active">Sobre nosotros</NavLink>
              </li>
              
              <li className="nav-item">
              <NavLink className="nav-link" to="contact" activeClassName="active">Contacto</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <title>{page}</title>
      </nav>
  );
};

export default Header;
