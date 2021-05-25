const $canvas = document.createElement('canvas'),
    ctx = $canvas.getContext('2d');

$canvas.setAttribute('id', 'jsCanvas');
$canvas.setAttribute('class', 'jsCanvas');

let painting = false;

$canvas.width = 700;
$canvas.height = 700;

ctx.strokeStyle = '#2c2c2c';
ctx.lineWidth = 2.5;

function startPainting() {
    painting = true;
}

function stopPainting() {
    painting = false;
}

function onMouseMove(e) {
    const x_pos = e.offsetX;
    const y_pos = e.offsetY;

    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x_pos, y_pos);
    } else {
        ctx.lineTo(x_pos, y_pos);
        ctx.stroke();
    }
}

function canvasEvent() {
    if ($canvas) {
      $canvas.addEventListener('mousemove', onMouseMove);
      $canvas.addEventListener('mousedown', startPainting);
      $canvas.addEventListener('mouseup', stopPainting);
      $canvas.addEventListener('mouseleave', stopPainting);
    }
}

function init() {
    const body = document.querySelector('body');

    body.appendChild($canvas);

    canvasEvent();
}

init();