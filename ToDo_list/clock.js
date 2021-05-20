const $clock_div = document.createElement('div'),
    $clock_h1 = document.createElement('h1');

$clock_div.setAttribute('class', 'js-clock');
$clock_h1.setAttribute('class', 'js-title');

function init() {
    const $body = document.querySelector('body')
    $body.appendChild($clock_div);
    $clock_div.appendChild($clock_h1);

    setInterval(getDate, 1000);
}

function getDate() {
    const date = new Date();

    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    $clock_h1.innerText = `${hour>9 ? `${hour}`:`0${hour}`}:${minute>9 ? `${minute}`:`0${minute}`}:${second>9 ? `${second}`:`0${second}`}`;
}

init();