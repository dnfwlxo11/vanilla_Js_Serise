const title = document.getElementById('title'),
    content = document.getElementById('content'),
    submit_btn = document.getElementById('submit-btn'),
    cancel_btn = document.getElementById('cancel-btn');

submit_btn.addEventListener('click', () => {
    const date = dateCalc(new Date());
    
    localStorage.setItem(title.value + date, title.value + ',' + content.value + ',' + date);
    
    window.location.href = 'index.html';
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