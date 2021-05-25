const $canvas = document.createElement('canvas');
    
const ctx = $canvas.getContext('2d'),
    colors = document.getElementsByClassName('jsColor');

$canvas.setAttribute('id', 'jsCanvas');
$canvas.setAttribute('class', 'jsCanvas');

$canvas.width = 700;
$canvas.height = 700;
let painting = false;

function setCanvas(color, width) {
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
}
function handleRangeChange(e) {
    console.log(e.target.value)
    setCanvas(ctx.strokeStyle, e.target.value);
}

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

function handleColorClick(e) {
    const color = e.target.style.backgroundColor;
    setCanvas(color, getRange())
}

function getRange() {
    const range = document.getElementsByClassName('controls-range-input');

    return parseInt(range.value);
}

function init() {
    const body = document.querySelector('body');

    body.appendChild($canvas);

    setCanvas('#2c2c2c', '2.5');
    canvasEvent();
    
    setTimeout(() => {
        const range = document.getElementById('jsRange');

        if (range)
            range.addEventListener('input', handleRangeChange)
    })

    setTimeout(() => {
        const range = document.getElementById('jsRange');

        if (range)
            range.addEventListener('input', handleRangeChange)

        Array.from(colors).forEach(color => {
            color.addEventListener('click', handleColorClick)
        });
    }, 0);
}

init();