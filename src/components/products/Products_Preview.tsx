import React, { useContext, useState } from "react";
import { AppContext } from "../../State";
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

import silla from "../../data/img/silla1.png";


type ProductsPreviewProps = {
    product:{
        type:string;
        nombre:string;
        tamano:string;
        color: string;
        material:string;
        modelo:number;
        precio: number;
        stock: boolean;
        descuento:number;
        img:string;
    };
};

const ProductsPreview: React.FC<ProductsPreviewProps> = (props) =>{
    return(
            <div className="product_container">
                <div className="product_container_img">
                    <img src={props.product.img} alt="image" />
                    <div className="dimension">
                        <p>{props.product.tamano}</p>
                    </div>
                </div>
                
                <p>{props.product.nombre}</p>
                <hr></hr>
            </div>
    );
};
export default ProductsPreview;