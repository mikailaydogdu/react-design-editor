import React, { useState } from "react";
import { fabric } from "fabric";

const TextModal = ({editor}) => {
    const [addText, setAddText] = useState("Text")
    const [objectColor, setObjectColor] = useState("#039BE5")

    const onAddText = () => {
        const text = new fabric.Textbox(addText, {
            radius: 65,
            fill: objectColor,
            left: 0
        });
        editor.canvas.add(text);
        editor.canvas.renderAll();
    };
    return (
        <div
            className="modal fade"
            id="exampleModal1"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel1"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel1">
                            Text
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        />
                    </div>
                    <div className="modal-body">
                        <textarea style={{ color: objectColor }} class="form-control" id="exampleFormControlTextarea1" rows="5"
                            value={addText} onChange={(e) => setAddText(e.target.value)} />
                    </div>
                    <div className="modal-footer">
                        <input type="color" class="form-control form-control-color" id="exampleColorInput" title="Choose your color"
                            value={objectColor} onChange={(e) => setObjectColor(e.target.value)} />
                        <button type="button" className="btn btn-primary" onClick={onAddText} aria-label="Close" data-bs-dismiss="modal">
                            add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TextModal;