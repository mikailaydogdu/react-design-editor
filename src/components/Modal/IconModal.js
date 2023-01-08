import React, { useState } from "react";
import { fabric } from "fabric";
import IconList from '../../data/icon'

const IconModal = ({editor}) => {
    const [iconAdd, setIconAdd] = useState("😎")

    const addIcon = () => {
        const text = new fabric.Text(iconAdd)
        editor.canvas.add(text);
        editor.canvas.renderAll();
      };
      const handleIcon = (e) => {
        setIconAdd(e.target.value);
      }

    return (
        <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                icon
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              {IconList.map((item, index) => (
                <>
                  <input style={{ fontSize: "35px" }} type="button" class="btn" value={item.icon} onClick={handleIcon} key={index} />
                </>
              ))}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={addIcon} aria-label="Close" data-bs-dismiss="modal">
                add
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default IconModal;