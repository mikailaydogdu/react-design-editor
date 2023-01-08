
const FullScreen = ({editor}) => {
  const onExport = () => {
    let image = new Image();
    image.crossOrigin = "anonymous";
    image.src = editor.canvas.toDataURL();
    let w = window.open("");
    w.document.write(image.outerHTML);
  };


  return (
    <li>
      <button onClick={onExport} class="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Customers">
        <i class="bi bi-fullscreen fs-5"></i><br />
        Fullscreen
      </button>
    </li>
  )
}
export default FullScreen;