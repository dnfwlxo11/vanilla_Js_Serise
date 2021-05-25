const $canvas = document.createElement('canvas');

const ctx = $canvas.getContext('2d'),
    colors = document.getElementsByClassName('jsColor');

$canvas.setAttribute('id', 'jsCanvas');
$canvas.setAttribute('class', 'jsCanvas');

$canvas.width = 700;
$canvas.height = 700;
let painting = false;
let mode = false;

function setCanvas(color, width) {
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = width;
}

function handleRangeChange(e) {
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

function fillMode() {
    if (mode) ctx.fillRect(0, 0, 700, 700);
}

function canvasEvent() {
    if ($canvas) {
        $canvas.addEventListener('mousemove', onMouseMove);
        $canvas.addEventListener('mousedown', startPainting);
        $canvas.addEventListener('mouseup', stopPainting);
        $canvas.addEventListener('mouseleave', stopPainting);
        $canvas.addEventListener('click', fillMode);
    }
}

function handleColorClick(e) {
    const color = e.target.style.backgroundColor;
    setCanvas(color, getRange())
}

function handleMode() {
    const modeBtn = document.querySelector('.fill-btn');

    modeBtn.addEventListener('click', () => {
        mode ? mode = false : mode = true;
        mode ? modeBtn.innerText = '그리기모드' : modeBtn.innerText = '채우기모드'
        canvasEvent();
    })
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

        Array.from(colors).forEach(color => {
            color.addEventListener('click', handleColorClick)
        });

        handleMode();
    }, 0);
}

init();