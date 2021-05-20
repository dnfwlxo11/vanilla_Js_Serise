const $todo_form = document.createElement('form'),
    $todo_input = document.createElement('input'),
    $todo_button = document.createElement('button'),
    $todo_ul = document.createElement('ul');

$todo_form.setAttribute('class', 'js-todo-form');
$todo_input.setAttribute('class', 'js-todo-input');
$todo_input.setAttribute('type', 'text');
$todo_input.setAttribute('placeholder', '메모를 입력하세요');
$todo_button.setAttribute('class', 'js-todo-button');
$todo_button.setAttribute('type', 'submit');
$todo_ul.setAttribute('class', 'js-todo-ul')

const TODO = 'todos';

function paintTodo(text) {
    const $li = document.createElement('li')
    $todo_ul.appendChild($li);

    const $deleteBtn = document.createElement('button');
    $deleteBtn.innerText = "X";

    const $span = document.createElement('span');
    $span.innerText = text;

    $li.appendChild($span);
    $li.appendChild($deleteBtn);
}

function handleSubmit(e) {
    e.preventDefault();

    const value = $todo_input.value;
    paintTodo(value);
    $todo_input.value = ''
}

function loadTodo() {
    const todos = localStorage.getItem(TODO);

    $todo_form.addEventListener('submit', handleSubmit);
}

function init() {
    const body = document.querySelector('body');
    body.appendChild($todo_form);
    $todo_form.appendChild($todo_input);
    $todo_form.appendChild($todo_button);
    body.appendChild($todo_ul);

    $todo_button.innerText = '추가';

    loadTodo();
}

init();