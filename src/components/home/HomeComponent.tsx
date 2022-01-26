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
    slider:{
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
        img3:string,
        type4:string,
        nombre4:string,
        modelo4:number,
        img4:string,
        type5:string,
        nombre5:string,
        modelo5:number,
        img5:string,
    };
    home_products:{
        type1:string,
        nombre1:string,
        tamano1:string,
        img1:string,
        img1b:string,
        type2:string,
        nombre2:string,
        tamano2:string,
        img2:string,
        img2b:string,
        type3:string,
        nombre3:string,
        tamano3:string,
        img3:string,
        img3b:string,
    };
};


const HomeComponent: React.FC<HomeProps> = (props) =>{
    const { state, dispatch } = useContext(AppContext);
    let best_products = props.slider;


    return(
            <div className="home_container">
                <h1 className="text-center">Nuestros productos mejor valorados</h1>
                <div className="home_container__carousel">

                    {/* interval={3000} default 3000ms*/}
                    {/* onClickItem=function()  */}
                    {/* preventMovementUntilSwipeScrollTolerance  -> hasta que el user no hace un poco de scrool no empieza a moverse */}
                    {/* selectedItem  defaults to 0 */}
                    {/* showStatus defalut true */}
                    <Carousel className="carousel_container" autoPlay={true} dynamicHeight={true} emulateTouch={true} infiniteLoop={true} stopOnHover={true}>
                        <div>
                            <img src={best_products.img1} className="slider_img" />
                            <p className="legend">{best_products.nombre1}</p>
                        </div>
                        <div>
                            <img src={best_products.img2} className="slider_img" />
                            <p className="legend">{best_products.nombre2}</p>
                        </div>
                        <div>
                            <img src={best_products.img3} className="slider_img" />
                            <p className="legend">{best_products.nombre3}</p>
                        </div>
                        <div>
                            <img src={best_products.img4} className="slider_img" />
                            <p className="legend">{best_products.nombre4}</p>
                        </div>
                        <div>
                            <img src={best_products.img5} className="slider_img" />
                            <p className="legend">{best_products.nombre5}</p>
                        </div>
                    </Carousel>
                </div>
                <h2 className="text-center">Algunos de nuestros productos</h2>
                <hr></hr>
                <div className="home_products_container">


                <div className="home_products_first">
                <NavLink to="products" className="nav-link" activeClassName="active">
                    <div className="home_product">
                        <p className="background"><img className="prueba" src={props.home_products.img1}/></p>
                    </div>
                </NavLink>
                <NavLink to="products" className="nav-link" activeClassName="active">
                    <div className="home_product">
                    <p className="background"><img className="prueba" src={props.home_products.img2}/></p>
                    </div>
                </NavLink>
                <NavLink to="products" className="nav-link" activeClassName="active">
                    <div className="home_product">
                    <p className="background"><img className="prueba" src={props.home_products.img3}/></p>
                    </div>
                </NavLink>
                </div>


                <div className="home_products">
                <NavLink to="products" className="nav-link" activeClassName="active">
                    <div className="home_product">
                        {/* <p className="background"><img className="prueba" src={props.home_products.img1b}/></p> */}
                        <img src={props.home_products.img1b}/>
                    </div>
                </NavLink>
                <NavLink to="products" className="nav-link" activeClassName="active">
                    <div className="home_product">
                    {/* <p className="background"><img className="prueba" src={props.home_products.img2b}/></p> */}
                        <img src={props.home_products.img2b}/>
                    </div>
                </NavLink>
                <NavLink to="products" className="nav-link" activeClassName="active">
                    <div className="home_product">
                    {/* <p className="background"><img className="prueba" src={props.home_products.img3b}/></p> */}
                        <img src={props.home_products.img3b}/>
                    </div>
                </NavLink>
                </div>



                
                </div>


                <hr></hr>
                
            </div>
    );
};
export default HomeComponent;