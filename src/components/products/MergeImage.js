import logo from "../../data/img/logo48.png";
import mergeImages from 'merge-images';

let merge = (img,id) =>{
    mergeImages([img, logo]).then(b64 => document.documentElement(id).src = b64);
}

export default merge;