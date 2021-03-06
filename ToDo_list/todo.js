const $todo_form = document.createElement('form'),
    $todo_input = document.createElement('input'),
    $todo_button = document.createElement('button'),
    $todo_ul = document.createElement('ul'),
    $todo_title = document.createElement('h2');

$todo_form.setAttribute('class', 'js-todo-form');
$todo_input.setAttribute('class', 'js-todo-input');
$todo_input.setAttribute('type', 'textarea');
// $todo_button.setAttribute('class', 'js-todo-button');
// $todo_button.setAttribute('type', 'submit');
$todo_ul.setAttribute('class', 'js-todo-ul');
$todo_title.setAttribute('class', 'js-todo-title');

const TODO = 'todos';
let Todos = [];

function deleteTodo(e) {
    const target_li = e.target.parentNode;
    $todo_ul.removeChild(target_li);

    const removed_Todos = Todos.filter((Todos) => {
        return Todos.id !== parseInt(target_li.id)
    });

    Todos = removed_Todos;
    saveTodos();
}

function saveTodos() {
    localStorage.setItem(TODO, JSON.stringify(Todos));
}

function paintTodo(text) {
    if (text === '') {
        alert('내용을 입력해주세요.')
    } else {
        const $li = document.createElement('li')
        $todo_ul.appendChild($li);

        const $deleteBtn = document.createElement('button');
        $deleteBtn.innerText = "X";
        $deleteBtn.addEventListener('click', deleteTodo);

        const $span = document.createElement('span');
        $span.innerText = text;

        const newId = Todos.length + 1;

        $li.id = newId;

        $li.appendChild($span);
        $li.appendChild($deleteBtn);

        const todoObj = {
            text: text,
            id: newId
        };

        Todos.push(todoObj);
        saveTodos();
    }
}

function handleSubmit(e) {
    e.preventDefault();

    const value = $todo_input.value;
    paintTodo(value);
    $todo_input.value = ''
}

function loadTodo() {
    const loadTodos = localStorage.getItem(TODO);

    if (loadTodos !== null) {
        const parseJson = JSON.parse(loadTodos);

        parseJson.forEach((toDo) => {
            paintTodo(toDo.text)
        })
    }
}

function paintTodoTitle() {
    const user = localStorage.getItem(USER);
    const todo_title = document.querySelector('.js-todo-title');

    if (user === null) {
        todo_title.innerText = '오늘 사용자님이 할 일은 무엇인가요?';
    } else {
        todo_title.innerText = `오늘 ${localStorage.getItem('name')}님이  할 일은 무엇인가요?`;
    }
}

function init() {
    const body = document.querySelector('body');
    body.appendChild($todo_title);
    body.appendChild($todo_form);
    $todo_form.appendChild($todo_input);
    $todo_form.addEventListener('submit', handleSubmit);
    // $todo_form.appendChild($todo_button);

    paintTodoTitle()
    body.appendChild($todo_ul);

    // $todo_button.innerText = '추가';

    loadTodo();
}

init();