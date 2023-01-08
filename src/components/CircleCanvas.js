import React from "react";
import { fabric } from "fabric";

const CircleCanvas = ({ editor }) => {

    const onAddCircle = () => {
        const circle = new fabric.Circle({
            radius: 65,
            fill: '#039BE5',
            left: 0
        });
        editor.canvas.add(circle);
        editor.canvas.renderAll();
    }

    return (
        <li>
            <button onClick={onAddCircle} class="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Customers">
                <i class="bi bi-circle fs-5"></i><br />
                Circle
            </button>
        </li>
    )
}
export default CircleCanvas;