import React, { useContext, useState } from "react";
import { AppContext } from "../../State";
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import mergeImages from 'merge-images';

import logo from "../../data/img/logo48.png";

import merge from "./MergeImage";


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
    Key:string;
};
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


  // Convert image to base64
  let toDataURL = (url, callback) => {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      var reader = new FileReader();
      reader.onloadend = function () {
        callback(reader.result);
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.send();
  };

  



const ProductsPreview: React.FC<ProductsPreviewProps> = (props) =>{
    const [open, setOpen] = React.useState(false);
    const { dispatch } = useContext(AppContext);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const prueba = () => console.log("Pene gordo");
    console.log(props.Key);

    // merge(props.product.img,props.Key);
    let merge = (base, logo) => {
        toDataURL(logo, function (dataUrl) {
          mergeImages([base, dataUrl]).then((new_image) =>
            console.log(new_image),
            // dispatch({ type: "SET_IMG", value: new_image })
          );
        });
      };
    
      // Convert image to base64
      let toDataURL = async (url, callback) => {
          console.log("ola1");
        var xhr = new XMLHttpRequest();
        console.log("ola2");
        xhr.onload = function () {
            console.log("ola3");
          var reader = new FileReader();
          console.log("ola4");
          reader.onloadend = function () {
            console.log("ola5");
            callback(reader.result);
          };
          console.log("ola6");
          reader.readAsDataURL(xhr.response);
        };
        xhr.open("GET", url);
        console.log("ola7");
        xhr.responseType = "blob";
        console.log("ola8");
        xhr.send();
        console.log("ola9");
      };
    
    //   merge(props.product.img,logo);

    
    
    return(
            <div className="product_container" onClick={handleOpen}>
                <div className="product_container_img">
                    <img src={logo} className="logo" alt="logo" />
                    <img src={props.product.img} id={props.Key} alt="image" />
                    <div className="dimension">
                        <p>{props.product.tamano}</p>
                    </div>
                </div>
                <p className="product_name">{props.product.nombre}</p>
                
                <hr></hr>
                <Modal
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    onBackdropClick={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style} className="modal_content">
                        {/* <Button className="close" onClick={handleClose}>X</Button> */}
                        {/* <Button onClick={prueba}>Close Child Modal</Button> */}
                        <button className="close" onClick={prueba}>X</button>
                        <img src={props.product.img} />
                    </Box>
                </Modal>
            </div>
    );
};
export default ProductsPreview;