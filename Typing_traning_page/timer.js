const $timer_div = document.createElement('div');

$timer_div.setAttribute('class', 'timer-div');

function setTimer() {
    let getSecond = $timer_div.innerText;
    
    console.log(getSecond, typeof(getSecond))
    if (getSecond !== '대기') {
        console.log('더하기')
        $timer_div.innerText = parseInt(getSecond, 10) + 1;
    }
}

function updateTimer() {
        setInterval(setTimer, 1000);
}

function init() {
    const body = document.querySelector('body');
    $timer_div.innerText = '대기';

    body.appendChild($timer_div);

    updateTimer();
}

init();