import React, { useContext, useState } from "react";
import { AppContext } from "../../State";
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import './About.css';
import image from '../../data/img/tienda_about.jpg';
import GoogleMaps from '../maps/maps';
import map from "../../data/img/mapa.png";

type HeaderProps = {
    page: string;
  }


const About: React.FC<HeaderProps> = (props) =>{
    return(
            <div className="about_container">
                <div className="section-title text-center">
                        <h1>Bienvenido a Muebles Los Leones </h1>
                        <p>Somos una empresa familiar que lleva más de 50 años al servicio de nuestros clientes.
                            Intentamos distinguirnos de otros negocios dando un trato cercano, familiar y eficaz.
                            Esto lo conseguimos trabajando con los mejores fabricantes españoles, para garantizar
                            precios y plazos inmejorables.
                            Estamos especializados en muebles del hogar y para negocios u oficinas.
                            Descubre en nuestros amplios catálogos cientos de colecciones para satisfacer todas 
                            tus necesidades. Desde amueblar pisos para alquiler hasta las colecciones mas exclusivas 
                            para dar un toque distinguido a tu hogar.
                            No dudes en pedir presupuestos sin compromiso, estaremos encantados de ayudarte.
                        </p>
                        <hr></hr>
                        <address>Carrer dels Lleons nº 48 Valencia</address>
                        <a href="https://www.google.es/maps/place/Muebles+los+Leones/@39.4684744,-0.3472695,19.75z/data=!4m9!1m2!2m1!1slos+leones!3m5!1s0xd6048927277b9fd:0xdf34a04581448c1f!8m2!3d39.4685778!4d-0.3472388!15sCgpsb3MgbGVvbmVzWgwiCmxvcyBsZW9uZXOSAQ9mdXJuaXR1cmVfc3RvcmU?hl=es" target="_blank">
                        <img src={map} className="image_maps" alt="Google Maps image"  />
                        </a>
                
                    
                </div>
                <div className="about_container__image">
                    <img src={image} className="image" alt="imagen tienda" width="675" height="506"/>
                    <hr></hr>
                    <div className="social_container">
                        <a href="https://www.instagram.com/muebleslosleones/" target="#blank"><img className="social" src="https://raw.githubusercontent.com/los-leones/images/1dd3af51984d9098fd1b94627dac1174481439e8/social/instagram.svg" /></a>
                        <a href="https://www.facebook.com/MueblesLosLeones" target="#blank"><img className="social" src="https://raw.githubusercontent.com/los-leones/images/1dd3af51984d9098fd1b94627dac1174481439e8/social/facebook.svg" /></a>
                        <a href="https://supple.live/cKAbmBboqgaTonJG8" target="#blank"><img className="social" src="https://raw.githubusercontent.com/los-leones/images/73812c30e28e3608aacbfb97919294a6386a28f4/social/google.svg" /></a>
                    </div>

                </div>
                {/* <div className="social_media"> */}
                    
                {/* </div> */}

                

                {/* <GoogleMaps /> */}
            </div>
    );
};
export default About;