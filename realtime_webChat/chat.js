import message from './message.js';
import db from './db.js';

const $send_form = document.createElement('form'),
    $message_input = document.createElement('input'),
    $submit_input = document.createElement('input'),
    $chat_ul = document.createElement('ul');

$send_form.setAttribute('id', 'jsForm');
$send_form.setAttribute('class', 'send-form');
$message_input.setAttribute('id', 'message');
$message_input.setAttribute('class', 'message-input');
$message_input.setAttribute('type', 'text');
$message_input.autofocus = true;
$message_input.setAttribute('placeholder', '메세지를 입력해주세요.');
$submit_input.setAttribute('class', 'submit-input');
$submit_input.setAttribute('type', 'submit');
$chat_ul.setAttribute('id', 'messages');

let myName = '';
if (localStorage.getItem('user') === '') {
    myName = prompt('닉네임을 입력하세요.');
    localStorage.setItem('user', myName);
} else {
    myName = localStorage.getItem('user');
}

function updateChat() {
    db.pushMessage_DB();
    db.removeMessage_DB()
}

function init() {
    const body = document.querySelector('body');

    body.appendChild($send_form);
    $send_form.appendChild($message_input);
    $send_form.appendChild($submit_input);
    body.appendChild($chat_ul);

    $submit_input.addEventListener('click', message.sendMessage);

    updateChat();
}

init();