import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../State";
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import './contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// const cors = require('cors');

const nodemailer = require("nodemailer");

  
  

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
        if(Isvalid){
            this.main();
            // this.SendEmail();
        }else{
            toast.error("Complete los campos");
        }
        //Isvalid?toast.success("Mensaje enviado!") && this.SendEmail():toast.error("Complete los campos");
 
    } 

    

// async..await is not allowed in global scope, must use a wrapper
    main = async () =>{
        console.log("Node mailer");
        console.log(nodemailer);
        nodemailer.headersList = {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
        }

        console.log("ENVIANDO MAIL");
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        console.log("Antes de test acount");
        //let testAccount = await nodemailer.createTestAccount();
        console.log("Despues de test acount");

        console.log("Antes de transporter");
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: "Gmail",
            host: "smtp.ethereal.email",
            port: 3000,
            secure: false, // true for 465, false for other ports
            auth: {
                user: "losleonesweb@gmail.com",
                pass: "a123456789@",
                //user: testAccount.user, // generated ethereal user
                //pass: testAccount.pass, // generated ethereal password
            }
        });

        console.log("Despues de transporter");
        
        let mailOptions = {
            from: 'losleonesweb@gmail.com', // sender address
            to: "losleonesweb@gmail.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
        }
        console.log("Antes de info");
        // send mail with defined transport object
        let info = await transporter.sendMail(mailOptions, function(error,info){
            console.log("Dentro de info sendEmail");
            if (error){
                console.log("Error");
                console.log(error);
                // res.send(500, err.message);
            } else {
                console.log("Email sent");
                // res.status(200).jsonp(req.body);
                console.log("Message sent: %s", info.messageId);
                // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            
                // Preview only available when sending through an Ethereal account
                console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
                // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
            }
        });
        console.log("Despues de info");
    
    
    }

    SendEmail = () =>{
        //Temporal
        //Mailgun or Firebase incoming...
        //Async function sendEmail
        // main();
        // let envio = main().catch(console.error);
        // if(envio){
        //     console.log(nodemailer);
        //     console.log(envio);
        //     toast.error("Error en el envio del mensaje");
        // }else{
        //     toast.success("Mensaje enviado!");
        // }

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
