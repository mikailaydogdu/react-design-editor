import React from "react";
import { fabric } from "fabric";

const ImageCanvas = ({ editor}) => {

    const onUploadImage = (e) => {
        const image = e.target.files[0];
        fabric.Image.fromURL(URL.createObjectURL(image), (img) => {
          editor.canvas.add(img);
          editor.canvas.renderAll();
        });
    };

    return ( 
    
    <li class="nav-item">
        <button id="formFileSm" type="button" class="nav-link py-3 px-2">
        <label class="custom-file-upload">
            <input type="file" onChange={onUploadImage} />
            <i class="bi bi-card-image fs-5"></i><br />
            Image
        </label>
        </button>
    </li>
  )
}
export default ImageCanvas;