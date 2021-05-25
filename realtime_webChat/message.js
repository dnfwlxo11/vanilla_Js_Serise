import key from './key.js'

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

function setFirebase() {
    return firebase.initializeApp(key.firebaseConfig);
}

function sendMessage() {
    let message = document.getElementById('message').value;

    firebase.database().ref('messages').push().set({
        'sender': myName,
        'message': message
    });

    return false;
}

function deleteMessage(self) {
    let messageId = self.getAttribute('delete-id');

    firebase.database().ref('messages').child(messageId).remove();
}

function init() {
    // loadFirebase(fireBaseJs[0]);
    // loadFirebase(fireBaseJs[1]);

    console.log(setFirebase());

}

init();
