import React from "react";
import { fabric } from "fabric";

const BackgroundImageCanvas = ({ editor }) => {

  const onAddBackground = (e) => {
    const image = e.target.files[0];
    fabric.Image.fromURL(URL.createObjectURL(image), function (img) {
      editor.canvas.setBackgroundImage(img, editor.canvas.renderAll.bind(editor.canvas), {
        scaleX: editor.canvas.width / img.width,
        scaleY: editor.canvas.height / img.height
      });
    });
  };

  return (
    <li class="nav-item">
      <button id="formFileSm" type="button" class="nav-link py-3 px-2">
        <label class="custom-file-upload">
          <input type="file" onChange={onAddBackground} />
          <i class="bi bi-card-image fs-5"></i><br />
          Background
        </label>
      </button>
    </li>
  )
}
export default BackgroundImageCanvas;