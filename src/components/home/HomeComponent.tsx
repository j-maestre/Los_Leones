import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../State";
import { Link, Redirect,NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import './home.css';
import product_model from "../products/Product.model.js";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import ProductsPreview from "../products/Products_Preview";

import img1 from "../../data/img/furniture1.jpg";
import img2 from "../../data/img/furniture2.jpg";
import img3 from "../../data/img/furniture3.jpg";


type HeaderProps = {
    page: string;
  }

type HomeProps = {
    best_products:{
        type1:string,
        nombre1:string,
        modelo1:number,
        img1:string,
        type2:string,
        nombre2:string,
        modelo2:number,
        img2:string,
        type3:string,
        nombre3:string,
        modelo3:number,
        img3:string
    };
    home_products:{
        type1:string,
        nombre1:string,
        tamano1:string,
        img1:string,
        type2:string,
        nombre2:string,
        tamano2:string,
        img2:string,
        type3:string,
        nombre3:string,
        tamano3:string,
        img3:string
    };
};


const HomeComponent: React.FC<HomeProps> = (props) =>{
    const { state, dispatch } = useContext(AppContext);
    let best_products = props.best_products;


    return(
            <div className="home_container">
                <h1 className="text-center">Nuestros productos mejor valorados</h1>
                <div className="home_container__carousel">

                    {/* interval={3000} default 3000ms*/}
                    {/* onClickItem=function()  */}
                    {/* preventMovementUntilSwipeScrollTolerance  -> hasta que el user no hace un poco de scrool no empieza a moverse */}
                    {/* selectedItem  defaults to 0 */}
                    {/* showStatus defalut true */}
                    <Carousel autoPlay={true} dynamicHeight={true} emulateTouch={true} infiniteLoop={true} stopOnHover={true}>
                        <div>
                            <img src={img1} className="slider_img" />
                            <p className="legend">{best_products.nombre1}</p>
                        </div>
                        <div>
                            <img src={img2} className="slider_img" />
                            <p className="legend">{best_products.nombre2}</p>
                        </div>
                        <div>
                            <img src={img3} className="slider_img" />
                            <p className="legend">{best_products.nombre3}</p>
                        </div>
                    </Carousel>
                </div>
                <h2 className="text-center">Algunos de nuestros productos</h2>
                <div className="home_products">
                <NavLink to="products" className="nav-link" activeClassName="active">
                    <div className="home_product">
                        <img src={props.home_products.img1}/>
                    </div>
                </NavLink>
                <NavLink to="products" className="nav-link" activeClassName="active">
                    <div className="home_product">
                        <img src={props.home_products.img2}/>
                    </div>
                </NavLink>
                <NavLink to="products" className="nav-link" activeClassName="active">
                    <div className="home_product">
                        <img src={props.home_products.img3}/>
                    </div>
                </NavLink>
                </div>
                
            </div>
    );
};
export default HomeComponent;