const $canvas = document.createElement('canvas');

$canvas.setAttribute('id', 'jsCanvas');
$canvas.setAttribute('class', 'jsCanvas');

let painting = false;

function stopPainting() {
    painting = false;
}

function onMouseMove(e) {
    const x_pos = e.offsetX;
    const y_pos = e.offsetY;
}

function onMouseDown(e) {
    painting = true;
}

function onMouseUp(e) {
    painting = false;
}

function canvasEvent() {
    if ($canvas) {
      $canvas.addEventListener('mousemove', onMouseMove);
      $canvas.addEventListener('mousedown', onMouseDown);
      $canvas.addEventListener('mouseup', onMouseUp);
      $canvas.addEventListener('mouseleave', stopPainting);
    }
}

function init() {
    const body = document.querySelector('body');

    body.appendChild($canvas);

    canvasEvent();
}

init();