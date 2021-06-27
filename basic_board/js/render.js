const title_span = document.getElementById('title-span'),
    content_span = document.getElementById('content-span'),
    delete_btn = document.getElementById('delete-btn'),
    list_btn = document.getElementById('list-btn');

const content_title = localStorage.getItem('current');

delete_btn.addEventListener('click', () => {
    localStorage.removeItem(content_title);

    window.location.href = '../html/index.html';
})

list_btn.addEventListener('click', () => {
    window.location.href = '../html/index.html';
})

function getStorage(title) {
    return localStorage.getItem(title);
}

function render() {
    const title = content_title;
    const content = getStorage(content_title).split(',')[1];

    title_span.innerText = title;
    content_span.innerText = content;
}

render();