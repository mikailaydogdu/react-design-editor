import React, { useState } from "react";
import ObjectColor from '../../data/style'

const BackgroundColorModal = ({ editor }) => {
    const [backgroundColor, setBackgroundColor] = useState("#039BE5")
    const [toast, setToast] = useState(false)

    const onBackgroundColor = () => {
        editor.canvas.setBackgroundColor(backgroundColor)
        editor.canvas.setBackgroundImage(null, editor.canvas.renderAll.bind(editor.canvas));
    };

    const handleObjectColor = (e) => {
        setBackgroundColor(e.target.value)
    }

    return (
        <>
            <li class="nav-item">
                <button class="nav-link py-3 px-2" onClick={() => setToast(true)}>
                <i class="bi bi-paint-bucket"></i><br />
                    Background Color
                </button>
            </li>
            {toast === false ? null :
                <div class="toast show center-0 position-fixed end-0 p-3" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="toast-header">
                        <button style={{ position: "absolute", top: "50%", right: "99%" }} type="button" class="btn btn-close" data-bs-dismiss="toast" aria-label="Close" onClick={() => setToast(false)}></button>

                        <strong class="ml-5">Background Color</strong>
                    </div>
                    <div class="toast-body">
                        {
                            ObjectColor.map((item) => (
                                <>
                                    <input value={item.hex} onChange={handleObjectColor} onClick={onBackgroundColor} type="radio" class="btn-check" id={item.hex} autocomplete="off" />
                                    <label style={{ backgroundColor: item.hex, padding: 20, margin: 5, borderRadius: "50%" }} class="btn btn-outline-primary" for={item.hex}></label>
                                </>
                            ))
                        }
                    </div>
                </div>
            }
        </>
    );
}
export default BackgroundColorModal;
