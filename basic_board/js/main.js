const board_body = document.getElementById('board-body'),
    submit_btn = document.getElementById('submit-btn'),
    refresh_btn = document.getElementById('refresh-btn');

submit_btn.addEventListener('click', () => {
   window.location.href = 'writing.html' 
});

refresh_btn.addEventListener('click', () => {
    load();
})

function createTh(str) {
    const th = document.createElement('th');
    th.innerText = str;

    return th
}

function load() {
    while (board_body.hasChildNodes()) {
        board_body.removeChild(board_body.firstChild);
    }

    for (let i=0;i<localStorage.length; i++) {
        const item = localStorage.getItem(localStorage.key(i)).split(',');
        const tr = document.createElement('tr');

        tr.appendChild(createTh(item[0]));
        tr.appendChild(createTh(item[1]));
        tr.appendChild(createTh(item[2]));

        board_body.appendChild(tr);
    }
}

function init() {
    load();
}

init();