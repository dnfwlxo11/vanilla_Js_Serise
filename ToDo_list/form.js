const $form = document.createElement('form'),
    $input = document.createElement('input'),
    $button = document.createElement('button');

$form.setAttribute('class', 'js-form');
$input.setAttribute('class', 'js-input');
$input.setAttribute('type', 'text');
$input.setAttribute('placeholder', '사용하실 이름을 입력하세요.');
$button.setAttribute('class', 'js-button');
$button.setAttribute('type', 'submit');

function init() {
    const $body = document.querySelector('body');

    $body.appendChild($form);
    $form.appendChild($input);
    $form.appendChild($button);

    $button.innerText = '확인'
}

init();