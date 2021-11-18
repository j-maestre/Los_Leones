import React, { useContext, useState } from "react";
import { AppContext } from "../../State";
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import './home.css';


type HeaderProps = {
    page: string;
  }


const HomeComponent: React.FC<HeaderProps> = (props) =>{
    return(
            <div className="home_container">
                <div className="slider-new-2 owl-carousel owl-theme">
				
                <div className="item slider-screen">
                    <div className="slider-img-full">
                        <img src="uploads/slider-01.jpg" alt="" />
                    </div>
                    <div className="container">
                        <div className="slider-content text-white">
                            <div className="in-box">
                                <h2>INTERIOR DESIGN</h2>
                                <p>Specialized in design and coding graphics and websites.</p>
                                <a className="btn-slider hvr-rectangle-out" href="#">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>	
                
                <div className="item slider-screen">
                    <div className="slider-img-full">
                        <img src="uploads/slider-02.jpg" alt="" />
                    </div>
                    <div className="container">
                        <div className="slider-content text-white">
                            <div className="in-box">
                                <h2>INTERIOR DESIGN</h2>
                                <p>Specialized in design and coding graphics and websites.</p>
                                <a className="btn-slider hvr-rectangle-out" href="#">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="item slider-screen">
                    <div className="slider-img-full">
                        <img src="uploads/slider-03.jpg" alt="" />
                    </div>
                    <div className="container">
                        <div className="slider-content text-white">
                            <div className="in-box">
                                <h2>INTERIOR DESIGN </h2>
                                <p>Specialized in design and coding graphics and websites.</p>
                                <a className="btn-slider hvr-rectangle-out" href="#">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
                
                </div>
            </div>
    );
};
export default HomeComponent;