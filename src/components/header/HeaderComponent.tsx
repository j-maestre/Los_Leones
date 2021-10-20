import React, { useContext, useEffect } from "react";
import { AppContext } from "../../State";
import { Redirect, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./header.css";

import '../../../src/css/animate.css';
import '../../../src/css/bootstrap.min.css';
// import '../../../src/css/style.css';
import '../../../src/css/responsive.css';
import '../../../src/css/custom.css';

import logo from "../../images/logo.png";


type HeaderProps = {
  page: string;
}

console.log("HEADER")
// console.log(props.page);

const Header: React.FC<HeaderProps> = (props) => {
  const { state } = useContext(AppContext);
  const { t } = useTranslation();

  // useEffect(() => {
  //   state.theme === "Dark"
  //     ? document.body.classList.add("dark")
  //     : document.body.classList.remove("dark");
  // });
  console.log(props.page);
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
                <a className="nav-link js-scroll-trigger active" href="home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="products">Products</a> {/*<Link to="/about"></Link>*/}
              </li>
        <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#team">Team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#pricing">Pricing</a>
              </li>
        <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#blog">Blog</a>
              </li>
        <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#contact">Contect Us</a>
              </li>
            </ul>
          </div>
        </div>
        <title>{page}</title>
      </nav>
  );
};

export default Header;
