import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../State";
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import './contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


export class ContactComponent extends React.Component {

    constructor(props) {
        super(props);
      }

    CheckChanges = (value) =>{
        let input = value.target;
        !input.value?input.classList.add("error"):input.classList.remove("error");
    }

    succes = (event) =>{

        let Isvalid = false;
        let name = this.name;
        let email = this.email;
        let phone = this.phone;
        let message = this.message;

        if(name.value && email.value && phone.value && message.value){
            event.preventDefault();
            Isvalid = true;
            name.value = "";
            email.value = "";
            phone.value = "";
            message.value = "";
        }else{
            Isvalid = false;
        }
        Isvalid?toast.success("Mensaje enviado!") && this.SendEmail():toast.error("Complete los campos");
 
    } 

    SendEmail = () =>{
        //Temporal
        //Mailgun incoming...
        // alert("enviar mail...");
    }

    render(){

        return(
            <div className="contact_container">
                
                <section className="contact-title text-center">
                        <h1>Contacte con nosotros</h1>
                        <p>Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, non aliquam risus.</p>
                        <hr></hr>
                </section>
                <section className="contact-form">
                    <div className="contact-form-container">
                        <form onSubmit={this.SendEmail} ref={ref => (this.form = ref)}>

                            <div className="form__name-email">
                                <input type="text" ref={ref => (this.name = ref)} onChange={this.CheckChanges} id="name"  className="first_name" placeholder="Nombre" required={true}  defaultValue=""></input>
                                <input type="email" ref={ref => (this.email = ref)} onChange={this.CheckChanges} id="email" className="email" placeholder="Email" required={true} data-validation-required-message="Introduzca su email"></input>
                            </div>

                            <div className="form__phone">
                                <input type="number" ref={ref => (this.phone = ref)} onChange={this.CheckChanges} id="phone" className="phone" placeholder="Teléfono" required={true} data-validation-required-message="Introduzca su telefono"></input>
                            </div>
                            <div className="form__message">
                                <textarea id="message" ref={ref => (this.message = ref)} onChange={this.CheckChanges} className="form-control message" placeholder="Mensaje" required={true} data-validation-required-message="Introduzca el mensaje"></textarea>
                            </div>
                            <div className="form_send">
                                <button type="submit" id="sendMessageButton" ref={ref => (this.send = ref)} className="btn-send" data-text="Send Message" onClick={this.succes}>Send Message</button>
                            </div>
                        </form>
                    </div>
                    
                </section>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
            </div>
        );
  };
};
