const $canvas = document.createElement('canvas'),
    $control_div = document.createElement('div'),
    $control_colors = document.createElement('div'),
    $control_btns = document.createElement('div'),
    $control_btn_mode = document.createElement('button'),
    $control_btn_save = document.createElement('button');

$canvas.setAttribute('id', 'jsCanvas');
$canvas.setAttribute('class', 'jsCanvas');
$control_div.setAttribute('class', 'controls');
$control_colors.setAttribute('id', 'jsColors');
$control_colors.setAttribute('class', 'controls-colors');
$control_btns.setAttribute('class', 'controls_btns');
$control_btn_mode.setAttribute('id', 'jsMode');
$control_btn_save.setAttribute('id', 'jsSave');

const COLORS = [
    '#2c2c2c',
    'white',
    '#FF3B30',
    '#FF9500',
    '#FFCC00',
    '#4CD963',
    '#5AC8FA',
    '#0579FF',
    '#5856D6'
];

function createFalette() {
    COLORS.forEach(color => {
        const $control_color = document.createElement('div');

        $control_color.setAttribute('class', 'controls-color');
        // $control_color.style.backgroundColor = color;
        // $control_color.style.width = '50px';
        // $control_color.style.height = '50px';
        // $control_color.style.borderRadius = '25px';
        // $control_color.style.cursor = 'pointer';
        // $control_color.style.boxShadow = '0 4px 6px rgba(50,50,93,0.11), 0 1px 3px rgba(0, 0, 0, 0.08)';
        $control_colors.appendChild($control_color);
    })
}

function init() {
    const body = document.querySelector('body');

    body.appendChild($canvas);
    body.appendChild($control_div);

    console.log('팔레트 추가')

    $control_div.appendChild($control_btns);

    $control_btns.appendChild($control_btn_mode);
    $control_btns.appendChild($control_btn_save);
    $control_btn_mode.innerText = 'Fill'
    $control_btn_save.innerText = 'Save'
    console.log('팔레트 버튼 추가')

    $control_div.appendChild($control_colors);

    createFalette();

    console.log('팔레트 style')
}

init();