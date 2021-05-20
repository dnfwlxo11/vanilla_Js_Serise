const $h4 = document.createElement('h4'),
    form = document.querySelector('js-form'),
    input = document.querySelector('js-input');

$h4.setAttribute('class', 'js-greetings');

const USER = 'name',
    SHOW = 'showing';

function handleSubmit(e) {
    e.preventDefault();
    const value = $input.value;
    paintGreeting(value)
    localStorage.setItem(USER, value);
    $form.classList.remove(SHOW);
    $form.classList.add('greetings');
}

function loadForm() {
    console.log(form)
    $form.classList.add(SHOW);
    $form.addEventListener('submit', handleSubmit);
}

function paintGreeting(text) {
    $form.classList.remove(SHOW);
    $h4.classList.add(SHOW);
    $h4.innerText = `안녕하세요 ${text}님`;
}

function loadName() {
    const user = localStorage.getItem(USER);

    if (user === null) {
        loadForm();
    } else {
        $form.classList.add('form-none');
        paintGreeting(user)
    }
}

function init() {
    const $body = document.querySelector('body');

    $form.classList.add('showing');
    $h4.classList.add('greetings');

    $body.appendChild($h4);

    loadName()
}

init();