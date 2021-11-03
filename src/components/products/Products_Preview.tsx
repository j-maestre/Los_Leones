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
    product: {
        type:string,
        nombre:string,
        tamaño:string,
        color: string,
        material:string,
        modelo:number,
        precio: number,
        stock: boolean,
        descuento:number,
        img:string
    }
}


const ProductsPreview: React.FC<ProductsPreviewProps> = (props) =>{
    console.log("PRODUCTS PREVIEW:");
    console.log(props);


    return(
        <section className="products__images">
            <div className="product_container">
                <img src={brick} alt="image" />
                <p>{props.product.material}</p>
            </div>
            
            {/* <img src={chairs} alt="image" />
            <img src={interior} alt="image" />
            <img src={living} alt="image" />
            <img src={wall} alt="image" /> */}
        </section>
    );
};

export default ProductsPreview;