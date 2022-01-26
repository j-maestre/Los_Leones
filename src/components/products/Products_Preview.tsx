import React, { useContext, useState } from "react";
import { AppContext } from "../../State";
import { Link, Redirect, NavLink } from "react-router-dom";
import { RouteComponentProps } from 'react-router-dom';
import { History } from 'history';
import { useHistory } from "react-router-dom";
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import logo from "../../data/img/logo48.png";

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


const ProductsPreview: React.FC<ProductsPreviewProps> = (props) =>{
    const [open, setOpen] = React.useState(false);
    const { dispatch } = useContext(AppContext);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const history = useHistory();
    
    function SetPresupuesto(){
        let presupuesto="Me gustaría recibir un presupuesto para el articulo: "+props.product.nombre;
        dispatch({type:'SET_PRESUPUESTO',value: presupuesto}); 
        history.push("/contact");
    }
    
    
    return(
            <div className="product_container">
                <div className="product_container_img" onClick={handleOpen}>
                    <img src={logo} className="logo" alt="logo" />
                    <img src={props.product.img} className="product_img" id={props.Key} alt="image" />
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
                        <button className="close" onClick={handleClose}>X</button>
                        <div className="modal_container">
                            <img src={props.product.img} />
                            {/* <NavLink to="contact"> */}
                                <button id="sendMessageButton" onClick={SetPresupuesto} className="btn-send" data-text="Send Message">Solicitar presupuesto</button>
                            {/* </NavLink> */}
                            
                        </div>
                    </Box>
                </Modal>
            </div>
    );
};
export default ProductsPreview;