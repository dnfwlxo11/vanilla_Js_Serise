const $q_div = document.createElement('div');

$q_div.setAttribute('class', 'words');

const WORD_NUM = 5;

function show_wordDiv() {
    Array.from(word).forEach((item) => {
        const $label = document.createElement('div');
        $label.setAttribute('class', 'word');
        $label.innerText = item;
        $q_div.appendChild($label);
    })
}

function create_wordDiv() {
    const randomNum = Math.floor(Math.random() * WORD_NUM);
    const word = localStorage.getItem(`word_${randomNum}`);

    Array.from(word).forEach(() => {
        const $label = document.createElement('div');
        $label.setAttribute('class', 'word');
        $label.innerText = '?';
        $q_div.appendChild($label);
    })
}

function init() {
    const body = document.querySelector('body');

    body.appendChild($q_div);
    create_wordDiv();
}

init();