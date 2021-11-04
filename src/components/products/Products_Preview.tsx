import React, { useContext, useState } from "react";
import { AppContext } from "../../State";
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

import brick from "../../data/img/brick-wall.jpg";
import chairs from "../../data/img/chairs.jpg";
import interior from "../../data/img/interior.jpg";
import living from "../../data/img/living-room.jpg";
import wall from "../../data/img/wall.jpg";

type ProductsPreviewProps = {
    product:{
        type:string;
        nombre:string;
        tamaño:string;
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
    console.log("PRODUCTS PREVIEW:");
    let product = props.product;
    console.log("producto que llega:")
    console.log(typeof(product))
    console.log(product)
    // console.log(product.precio) //PORQUE COÑO NO LO DETECTAAAAAAAAAAAAAAAAAAAAAAAA
    // console.log(Object.values(product))

    return(
        // <section className="products__images">
            <div className="product_container">
                <img src={brick} alt="image" />
                {/* <p>{props.product.material}</p> */}
            </div>
            
            
    );
};

export default ProductsPreview;