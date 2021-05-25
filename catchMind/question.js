const $q_div = document.createElement('div');

$q_div.setAttribute('class', 'words');

const WORD_NUM = 5;

function createNum() {
    return Math.floor(Math.random() * WORD_NUM);
}

function createWord() {
    return localStorage.getItem(`word_${createNum()}`);
}

function create_wordDiv() {
    const next = localStorage.getItem('next');

    if (next) {
        const word = createWord();

        Array.from(word).forEach(() => {
            const $label = document.createElement('div');
            $label.setAttribute('class', 'word');
            $label.innerText = '?';
            $q_div.appendChild($label);
        })

        localStorage.setItem('answer', word);
        localStorage.setItem('next', false);
    }
}

function init() {
    const body = document.querySelector('body');

    body.appendChild($q_div);
    create_wordDiv();
}

init();

export default { createWord };