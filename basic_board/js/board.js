const title = document.getElementById('title'),
    content = document.getElementById('content'),
    submit_btn = document.getElementById('submit-btn'),
    cancel_btn = document.getElementById('cancel-btn');

submit_btn.addEventListener('click', () => {
    const date = dateCalc(new Date());
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if(title === '' || content === '') {
        alert('빈 칸이 있습니다.')
    } else {
        localStorage.setItem(title, title + ',' + content + ',' + date);
    
        window.location.href = 'index.html';
    }
})

cancel_btn.addEventListener('click', () => {
    window.location.href = 'index.html';
})

function dateCalc(date) {
    const year = date.getFullYear();
    const month = ("0" + (1 + date.getMonth())).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);

    return `${year}-${month}-${day}`;
}