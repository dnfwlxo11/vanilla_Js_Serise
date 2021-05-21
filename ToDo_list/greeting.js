const $greeting_h4 = document.createElement('h4');

$greeting_h4.setAttribute('class', 'js-greetings');

const USER = 'name',
    SHOW = 'showing';

function handleSubmit(e) {
    e.preventDefault();
    const value = $name_input.value;
    paintGreeting(value)
    localStorage.setItem(USER, value);
    $name_form.classList.remove(SHOW);
    $name_form.classList.add('greetings');
}

function loadForm() {
    $name_form.classList.add(SHOW);
    $name_form.addEventListener('submit', handleSubmit);
}

function paintGreeting(text) {
    $name_form.classList.remove(SHOW);
    $greeting_h4.classList.add(SHOW);
    $greeting_h4.innerText = `안녕하세요 ${text}님`;
}

function updateTodoTitle() {
    const user = localStorage.getItem(USER);
    const todo_title = document.querySelector('.js-todo-title');

    console.log('a', user, todo_title)
}

function loadName() {
    const user = localStorage.getItem(USER);
    

    if (user === null) {
        loadForm();
    } else {
        $name_form.classList.add('form-none');
        paintGreeting(user);
        updateTodoTitle();
    }
}

function init() {
    const $body = document.querySelector('body');

    $name_form.classList.add('showing');
    $greeting_h4.classList.add('greetings');

    $body.appendChild($greeting_h4);

    loadName()
}

init();