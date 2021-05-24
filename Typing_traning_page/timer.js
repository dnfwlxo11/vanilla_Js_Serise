const $timer_div = document.createElement('div');

$timer_div.setAttribute('class', 'timer-div');

function setTimer() {
    const getSecond = $timer_div.innerText;
    $timer_div.innerText = parseInt(getSecond, 10) + 1;
}

function updateTimer() {
    setInterval(setTimer, 1000);
}

function init() {
    const body = document.querySelector('body');
    $timer_div.innerText = 0;

    body.appendChild($timer_div);

    updateTimer();
}

init();