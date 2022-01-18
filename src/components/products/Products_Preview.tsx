import React, { useContext, useState } from "react";
import { AppContext } from "../../State";
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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

const ProductsPreview: React.FC<ProductsPreviewProps> = (props) =>{
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const prueba = () => console.log("Pene gordo");
    return(
            <div className="product_container" onClick={handleOpen}>
                <div className="product_container_img">
                    <img src={props.product.img} alt="image" />
                    <div className="dimension">
                        <p>{props.product.tamano}</p>
                    </div>
                </div>
                <p className="product_name">{props.product.nombre}</p>
                
                <hr></hr>
                <Modal
                    open={open}
                    onClose={handleClose}
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