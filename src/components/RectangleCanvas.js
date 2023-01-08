import React from "react";

const RectangleCanvas = ({ editor }) => {

  
    const onAddRectangle = () => {
        editor.addRectangle();
      };

    return (
        <li>
        <button onClick={onAddRectangle} class="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Products">
          <i class="bi bi-square fs-5"></i>< br />
          Rectangle
        </button>
      </li>
    )
}
export default RectangleCanvas;