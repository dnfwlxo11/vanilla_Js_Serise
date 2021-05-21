const $name_form = document.createElement('form'),
    $name_input = document.createElement('input'),
    // $name_button = document.createElement('button'),
    $name_h4 = document.createElement('h4');

$name_form.setAttribute('class', 'js-form');
$name_input.setAttribute('class', 'js-input');
$name_input.setAttribute('type', 'text');
// $name_input.setAttribute('placeholder', '사용하실 이름을 입력하세요.');
// $name_button.setAttribute('class', 'js-button');
// $name_button.setAttribute('type', 'submit');
$name_h4.setAttribute('class', 'js-name-h4');

function init() {
    const $body = document.querySelector('body');

    $body.appendChild($name_form);
    $name_form.appendChild($name_h4);
    $name_form.appendChild($name_input);
    // $name_form.appendChild($name_button);

    // $name_button.innerText = '확인'
    $name_h4.innerText = '당신의 이름은 무엇인가요?';
}

init();