import db from './db.js';

// const fireBaseJs = [
//     'https://www.gstatic.com/firebasejs/8.6.2/firebase-app.js',
//     'https://www.gstatic.com/firebasejs/8.6.2/firebase-database.js'
// ]

// function loadFirebase(src) {
//     let script_ = document.createElement('script');
//     script_.type = 'text/javasctipt';
//     script_.src = src;
//     console.log(document.getElementsByTagName('head'))
//     document.getElementsByTagName('head')[0].appendChild(script_);
// }

let myName = db.getName();

function sendMessage(e) {
    e.preventDefault();

    let message = document.getElementById('message').value;

    firebase.database().ref('messages').push().set({
        'sender': myName,
        'message': message
    });
}

function deleteMessage(e) {
    let messageId = e.target.getAttribute('delete-id');

    firebase.database().ref('messages').child(messageId).remove();
}


export default { sendMessage, deleteMessage };