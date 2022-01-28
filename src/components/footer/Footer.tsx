// import { IonFooter, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './footer.css';
import { Redirect, Link, NavLink } from "react-router-dom";


/**
 * FOOTER COMPONENT FOR ALL Los Leones APP
 */

const Footer: React.FC = () => {
   
        return (
            <section className="footer">
                        <div className="footer-distributed">
                                <p className="footer-links">
                                    <NavLink className="footer_link" to="home">Inicio</NavLink>
                                    <NavLink className="footer_link" to="products">Productos</NavLink>
                                    <NavLink className="footer_link" to="about">Sobre nosotros</NavLink>
                                    <NavLink className="footer_link" to="contact">Contacto</NavLink>
                                </p>
                                <div className="footer_social_container">
                                    <a className='social_media' href="https://www.instagram.com/muebleslosleones/" target="#blank"><img className="social_footer" src="https://raw.githubusercontent.com/los-leones/images/1dd3af51984d9098fd1b94627dac1174481439e8/social/instagram.svg" /></a>       
                                    <a className='social_media' href="https://www.facebook.com/MueblesLosLeones" target="#blank"><img className="social_footer" src="https://raw.githubusercontent.com/los-leones/images/1dd3af51984d9098fd1b94627dac1174481439e8/social/facebook.svg" /></a>
                                    <a className='social_media' href="https://supple.live/cKAbmBboqgaTonJG8" target="#blank"><img className="social_footer" src="https://raw.githubusercontent.com/los-leones/images/73812c30e28e3608aacbfb97919294a6386a28f4/social/google.svg" /></a>
                                </div>
                                
                                <p className="footer-company-name">All Rights Reserved. &copy; 2022 <a href="#">Muebles Los Leones</a></p>
                        </div>
            </section>
        );
    
}
export default Footer;