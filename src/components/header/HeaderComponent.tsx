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

import logo from "../../data/img/logo1.png";


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
          <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <img className="img-fluid" src={logo} alt="" /> {/*IMAGEN LOGO*/ }
          </a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link js-scroll-trigger" to="home" activeClassName="active">Home</NavLink>
              </li>
              <li className="nav-item">
              <NavLink to="products" className="nav-link js-scroll-trigger" activeClassName="active">Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link js-scroll-trigger" to="about" activeClassName="active">About</NavLink>
              </li>
              
              <li className="nav-item">
              <NavLink className="nav-link js-scroll-trigger" to="contact" activeClassName="active">Contact Us</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <title>{page}</title>
      </nav>
  );
};

export default Header;
