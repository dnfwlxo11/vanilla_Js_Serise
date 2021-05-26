import key from './key.js';
import message from './message.js';

function getName() {
    return localStorage.getItem('user');
}

function removeMessage_DB() {
    firebase.database().ref('messages').on('child_removed', (snapshot) => {
        document.getElementById(`message-${snapshot.key}`).innerText = '해당 메세지 삭제됨';
    });
}

function pushMessage_DB() {
    firebase.database().ref('messages').on('child_added', (snapshot) => {
        const main = document.getElementById('messages');
        const message_li = document.createElement('li');
        const deleteBtn = document.createElement('button');
        let val = snapshot.val();
    
        message_li.setAttribute('id', `message-${snapshot.key}`);
        message_li.innerText = val.sender + ': ' + val.message;
    
        if (val.sender === getName()) {
            deleteBtn.setAttribute('delete-id', snapshot.key);
            deleteBtn.addEventListener('click', message.deleteMessage);
            deleteBtn.innerText = '삭제';
            message_li.appendChild(deleteBtn);
        }
    
        main.appendChild(message_li);
    });
}

function setFirebase() {
    return firebase.initializeApp(key.firebaseConfig);
}

setFirebase();

export default { getName, removeMessage_DB, pushMessage_DB };

