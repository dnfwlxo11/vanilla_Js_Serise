const $canvas = document.createElement('canvas');

$canvas.setAttribute('id', 'jsCanvas');
$canvas.setAttribute('class', 'jsCanvas');

function init() {
    const body = document.querySelector('body');

    body.appendChild($canvas);
}

init();