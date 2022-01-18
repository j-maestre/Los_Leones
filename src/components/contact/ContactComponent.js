import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../State";
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import './contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// const cors = require('cors');
import{ init } from 'emailjs-com';
import emailjs from 'emailjs-com';
import { EMAIL_USERID } from '../../secrets.js';
import { EMAIL_IDSERVICE } from '../../secrets.js';
import { EMAIL_TEMPLATEID } from '../../secrets.js';
import { resolve } from "dns";

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
            
        }else{
            Isvalid = false;
        }
    
        Isvalid?this.SendEmail():toast.error("Complete los campos");
 
    } 

    


    SendEmail = async () =>{

      let templateParams = {
        message: this.message.value,
        phone: this.phone.value,
        email: this.email.value,
        from_name: this.name.value
      }
      
      await init(EMAIL_USERID);
      let succes = true;
        try{
            emailjs.send(EMAIL_IDSERVICE, EMAIL_TEMPLATEID, templateParams, EMAIL_USERID)
            .then(function(response) {
                toast.success("Mensaje enviado!");
            }, function(error) {
                succes = false;
                toast.error("Error en el envio");
            });
            
        }catch(error){
            toast.error("Algo no salió como se esperaba...");
        }
        if(succes){
            this.message.value = "";
            this.phone.value = "";
            this.email.value = "";
            this.name.value = "";
        }
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
                                <button type="submit" id="sendMessageButton" ref={ref => (this.send = ref)} className="btn-send" data-text="Send Message" onClick={this.succes}>Enviar mensaje</button>
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
