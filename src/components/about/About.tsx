import React, { useContext, useState } from "react";
import { AppContext } from "../../State";
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import './About.css';

type HeaderProps = {
    page: string;
  }


const About: React.FC<HeaderProps> = (props) =>{
    return(
            <div className="about_container">
                <div className="section-title text-center">
                    <h1>About Us</h1>
                    <p>Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis vehicula enim, non aliquam risus.</p>
                </div>
                

            </div>
    );
};
export default About;