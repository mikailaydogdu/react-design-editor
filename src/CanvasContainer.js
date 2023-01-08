import React, { useState } from "react";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import ObjectColor from './data/style'
import "./css/fabricCanvas.css";

import { ContextMenuTrigger, ContextMenu, ContextMenuItem } from 'rctx-contextmenu';

import ImageCanvas from "./components/ImageCanvas";
import BackgroundImageCanvas from "./components/BackgroundImageCanvas";
import CircleCanvas from "./components/CircleCanvas"
import  RectangleCanvas from "./components/RectangleCanvas"
import FullScreen from "./components/FullScreen";
import TextModal from "./components/Modal/TextModal";
import IconModal from "./components/Modal/IconModal";
import BackgroundColorModal from "./components/Modal/BackgroundColorModal"


export default function CanvasContainer() {
  const [toast, setToast] = useState(false)
  const [objectColor, setObjectColor] = useState("#039BE5")
  const { editor, onReady } = useFabricJSEditor();

  const removeObjectFromCanvas = () => {
    editor.canvas.remove(editor.canvas.getActiveObject());
  };



  const DownloadImage = () => {
    const ext = "png";
    const base64 = editor.canvas.toDataURL({
      format: ext,
      enableRetinaScaling: true
    });
    const link = document.createElement("a");
    link.href = base64;
    link.download = `canvaClone.${ext}`;
    link.click();
  };

  const onObjectColor = (e) => {
    editor.canvas.getActiveObject().set({ "fill": objectColor });
    editor.canvas.renderAll();
  };


  const handleObjectColor = (e) => {
    setObjectColor(e.target.value)
  }



  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-1 bg-light">
          <div class="d-flex flex-sm-column flex-row flex-nowrap bg-light align-items-center sticky-top">
            <ul  class="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center align-items-center">
              <li class="nav-item">
                <button class="nav-link py-3 px-2" title=""
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal1"
                  data-bs-placement="right"
                  data-bs-original-title="Customers">
                  <i class="bi bi-fonts fs-5"></i><br />
                  Text
                </button>
              </li>
              <BackgroundImageCanvas editor = {editor}/>
              <ImageCanvas editor = {editor} /> 
              <BackgroundColorModal editor={editor}/>
              <RectangleCanvas editor = {editor} />
              <CircleCanvas editor = {editor}/>
              <li>
                <button class="nav-link py-3 px-2" title=""
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  data-bs-placement="right"
                  data-bs-original-title="Customers">
                  <i class="bi bi-emoji-smile fs-5"></i><br />
                  icon
                </button>
              </li>
              <FullScreen  editor={editor}/>
              <li>
                <button onClick={DownloadImage} class="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Customers">
                  <i class="bi bi-arrow-down-circle-fill fs-5"></i><br />
                  Download
                </button>
              </li>

            </ul>
          </div>
        </div>

        <div class="col-sm-10 p-2 mt-3 min-vh-300 canvasDiv">
          <ContextMenuTrigger id="my-context-menu-1">
            <FabricJSCanvas className="sample-canvas" onReady={onReady} />
          </ContextMenuTrigger>
        </div>
        {toast === false ? null :
          <div class="toast show center-0 position-fixed end-0 p-3" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
              <button style={{ position: "absolute", top: "50%", right: "99%" }} type="button" class="btn btn-close" data-bs-dismiss="toast" aria-label="Close" onClick={() => setToast(false)}></button>

              <strong class="ml-5">Active Object Color</strong>
            </div>
            <div class="toast-body">
              {
                ObjectColor.map((item) => (
                  <>
                    <input value={item.hex} onChange={handleObjectColor} onClick={onObjectColor} type="radio" class="btn-check" id={item.hex} autocomplete="off" />
                    <label style={{ backgroundColor: item.hex, padding: 20, margin: 5, borderRadius: "50%" }} class="btn btn-outline-primary" for={item.hex}></label>
                  </>
                ))
              }
            </div>
          </div>
        }


        {/* Right click */}
        < ContextMenu id="my-context-menu-1">
          <ContextMenuItem onClick={removeObjectFromCanvas}><i class="bi bi-trash-fill fs-3 p-3"></i> Remove</ContextMenuItem><hr />
          <ContextMenuItem onClick={() => setToast(true)}>
            <i class="bi bi-palette-fill fs-5 p-3"></i> color
          </ContextMenuItem>
        </ContextMenu>
      </div>
      <>
        {/* Modal Icon */}
       <IconModal editor={editor}/>

        {/* Modal Text*/}
     <TextModal editor={editor}/>
      </>

    </div>


  );
}
