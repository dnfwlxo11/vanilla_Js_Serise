const $type_wrap_div = document.createElement('div'),
    $type_sentence_div = document.createElement('div'),
    $type_area = document.createElement('textarea');

$type_wrap_div.setAttribute('class', 'type-wrap-div');
$type_sentence_div.setAttribute('class', 'type-sentence-div');
$type_area.setAttribute('class', 'type-area');

const SENTENCE_NUM = 5;

function getSentence() {
    let sentence = localStorage.getItem(`sentence_${Math.floor(Math.random() * SENTENCE_NUM)}`)
    console.log(sentence, Math.random() * SENTENCE_NUM)
    $type_sentence_div.innerText = sentence;
}

function init() {
    const body = document.querySelector('body');

    body.appendChild($type_wrap_div);
    $type_wrap_div.appendChild($type_sentence_div);
    $type_wrap_div.appendChild($type_area);

    getSentence()
}

init();