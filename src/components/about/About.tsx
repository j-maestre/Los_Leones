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
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting, 
                            remaining essentially unchanged. It was popularised in the 1960s 
                            with the release of Letraset sheets containing Lorem Ipsum passages, 
                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <hr></hr>
                        <address>Carrer dels Lleons nº 48 Valencia</address>
                        <a href="https://www.google.es/maps/place/Muebles+los+Leones/@39.4684744,-0.3472695,19.75z/data=!4m9!1m2!2m1!1slos+leones!3m5!1s0xd6048927277b9fd:0xdf34a04581448c1f!8m2!3d39.4685778!4d-0.3472388!15sCgpsb3MgbGVvbmVzWgwiCmxvcyBsZW9uZXOSAQ9mdXJuaXR1cmVfc3RvcmU?hl=es" target="_blank">
                        <img src={map} className="image_maps" alt="Google Maps image"  />
                        </a>
                
                    
                </div>
                <div className="about_container__image">
                    <img src={image} className="image" alt="imagen tienda" width="675" height="506"/>
                </div>
                <img src="../../data/img/instagram.svg" />

                

                {/* <GoogleMaps /> */}
            </div>
    );
};
export default About;