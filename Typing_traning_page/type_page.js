const $type_wrap_div = document.createElement('div'),
    $type_sentence_div = document.createElement('div'),
    $type_area = document.createElement('textarea');

$type_wrap_div.setAttribute('class', 'type-wrap-div');
$type_sentence_div.setAttribute('class', 'type-sentence-div');
$type_area.setAttribute('class', 'type-area');

const SENTENCE_NUM = 5;

$type_area.addEventListener('input', () => {
    checkSentence();
})

function checkSentence() {
    const sentence_arr = $type_sentence_div.querySelectorAll('span');
    const input_arr = $type_area.value.split('');
    let correct = true;

    sentence_arr.forEach((charSpan, index) => {
        const char = input_arr[index];

        if (char == null) {
            charSpan.classList.remove('correct');
            charSpan.classList.remove('incorrect');
            correct = false;
        } else if (char === charSpan.innerText) {
            charSpan.classList.add('correct');
            charSpan.classList.remove('incorrect');
        } else {
            charSpan.classList.add('incorrect');
            charSpan.classList.remove('correct');
            correct = false;
        }
    })

    if (correct) {
        alert('모두 타이핑 하셨습니다. 계속하시려면 알림창을 닫아주세요')
        renderSentence()
        document.querySelector('.timer-div').innerText = 0;
    };
}

function renderSentence() {
    const sentence = localStorage.getItem(`sentence_${Math.floor(Math.random() * SENTENCE_NUM)}`)

    $type_sentence_div.innerText = '';
    sentence.split('').forEach(char => {
        const charSpan = document.createElement('span');
        charSpan.innerText = char;
        $type_sentence_div.appendChild(charSpan);
    })

    $type_area.value = ''
}

function init() {
    const body = document.querySelector('body');

    body.appendChild($type_wrap_div);
    $type_wrap_div.appendChild($type_sentence_div);
    $type_wrap_div.appendChild($type_area);

    renderSentence();
}

init();