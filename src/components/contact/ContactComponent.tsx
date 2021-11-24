import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../State";
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import './contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader



type HeaderProps = {
    page: string;
  }


const ContactComponent: React.FC<HeaderProps> = () =>{
    
    const { state, dispatch } = useContext(AppContext);

    // let nameRef = this.name;
    /* ref={this.name} */



    let valid = false;
    const succes = () =>{
        // let name = this.name;
        // console.log(name.innerHTML);
        // console.log(name);
        
        // console.log()
        valid?toast.success("Mensaje enviado!"):toast.error("Complete los campos");;
        
    } 



    return(
            <div className="contact_container">
                
                <section className="contact-title text-center">
                        <h1>Contacte con nosotros</h1>
                        <p>Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, non aliquam risus.</p>
                        <hr></hr>
                </section>

                <section className="contact-form">
                    <div className="contact-form-container">
                        <form>

                            <div className="form__name-email">
                                <input type="text" id="name"  className="first_name" placeholder="Nombre" required={true}  defaultValue=""></input>
                                <input type="email" id="email" className="email" placeholder="Email" required={true} data-validation-required-message="Introduzca su email"></input>
                            </div>

                            <div className="form__phone">
                                <input type="number" id="phone" className="phone" placeholder="Teléfono" required={true} data-validation-required-message="Introduzca su telefono"></input>
                            </div>
                            <div className="form__message">
                                <textarea id="message" className="form-control message" placeholder="Mensaje" required={true} data-validation-required-message="Introduzca el mensaje"></textarea>
                            </div>
                            <div className="form_send">
                                <button id="sendMessageButton" className="btn-send" data-text="Send Message" onClick={succes}>Send Message</button>
                            </div>
                        </form>
                    </div>
                    
                </section>
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div>
    );
};
export default ContactComponent;