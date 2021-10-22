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

import logo from "../../images/logo.png";


type HeaderProps = {
  page: string;
}

console.log("HEADER")
// console.log(props.page);

//  let currentLocation = window.location.href;
//  console.log("current location")
//  console.log(currentLocation);
let menuItem = document.querySelectorAll('a');
  console.log("menu items");
  console.log(menuItem)
//  let menuLength = menuItem.length;
//  for (let i = 0; i<menuLength; i++){
//    console.log("----------------menu item href-----------------");
//    console.log(menuItem[i].href)
//    alert("hola")
//    if(menuItem[i].href == currentLocation){
//      menuItem[i].classList.add("active");
//    }else{
//      menuItem[i].classList.remove("active");
//    }
//  }

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
