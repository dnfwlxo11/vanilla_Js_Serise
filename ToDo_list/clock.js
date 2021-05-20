const $div = document.createElement('div'),
    $h1 = document.createElement('h1');

$div.setAttribute('class', 'js-clock');
$h1.setAttribute('class', 'js-title');

function init() {
    const $body = document.querySelector('body')
    $body.appendChild($div);
    $div.appendChild($h1);

    setInterval(getDate, 1000);
}

function getDate() {
    const date = new Date();

    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    $h1.innerText = `${hour>9 ? `${hour}`:`0${hour}`}:${minute>9 ? `${minute}`:`0${minute}`}:${second>9 ? `${second}`:`0${second}`}`;
}

init();